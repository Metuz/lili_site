"use server";
import { z } from "zod";

const nodemailer = require("nodemailer"); // eslint-disable-line @typescript-eslint/no-require-imports

interface FormState {
  success?: string;
  errors: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
}

// Mexican phone regex (supports optional +52 and formats like 55XXXXXX, 33XXXXXX, etc.)
const mexicanPhoneRegex = /^(\+52|0052|52)?[ -]*(1)?[ -]*([0-9][ -]*){10}$/;

const emailSchema = z.object({
  name: z.string().trim().min(2, { message: "Tu nombre debe contener al menos 2 letras" }),
  email: z.string().email({ message: "Por favor ingresa un correo válido" }),
  phone: z.string()
    .trim()
    .optional()
    .or(z.string().length(0)) // Allow empty string
    .superRefine((val, ctx) => {
      if (val && val.length > 0 && !mexicanPhoneRegex.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Por favor ingresa un teléfono mexicano válido (ej: +52 55 1234 5678)",
        });
      }
    }),
  message: z.string().trim().min(10, { message: "El mensaje debe contener al menos 10 caracteres" })
});

// Verify required environment variables
const requiredEnvVars = [
  'IONOS_SMTP_HOST',
  'IONOS_SMTP_PORT',
  'IONOS_USER',
  'IONOS_PASSWORD',
  'EMAIL'
];

requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});

const transporter = nodemailer.createTransport({
  host: process.env.IONOS_SMTP_HOST,
  port: Number(process.env.IONOS_SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.IONOS_USER,
    pass: process.env.IONOS_PASSWORD
  }
});

export async function sendEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const contactFormData = Object.fromEntries(formData);
  const validateContactFormData = emailSchema.safeParse(contactFormData);

  if (!validateContactFormData.success) {
    const formFieldErrors = validateContactFormData.error.flatten().fieldErrors;
    return {
      errors: {
        name: formFieldErrors.name?.[0],
        email: formFieldErrors.email?.[0],
        phone: formFieldErrors.phone?.[0],
        message: formFieldErrors.message?.[0],
      }
    };
  }

  try {
    await transporter.verify();
    
    const mailOptions = {
      from: 'Terapia el fin <contacto@terapiaelfin.com>',
      to: process.env.EMAIL,
      subject: `Nuevo mensaje de ${validateContactFormData.data.name}`,
      html: `
        <h1>Nuevo mensaje del formulario de contacto</h1>
        <p><strong>Nombre:</strong> ${validateContactFormData.data.name}</p>
        <p><strong>Email:</strong> ${validateContactFormData.data.email}</p>
        ${validateContactFormData.data.phone ? `<p><strong>Teléfono:</strong> ${validateContactFormData.data.phone}</p>` : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${validateContactFormData.data.message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        Nuevo mensaje de ${validateContactFormData.data.name} (${validateContactFormData.data.email})
        ${validateContactFormData.data.phone ? `Teléfono: ${validateContactFormData.data.phone}\n` : ''}
        Mensaje:
        ${validateContactFormData.data.message}
      `
    };

    await transporter.sendMail(mailOptions);

    return {
      success: "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
      errors: {}
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      errors: {
        email: "Ocurrió un error al enviar tu mensaje. Por favor inténtalo nuevamente más tarde."
      }
    };
  }
}
