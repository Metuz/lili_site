"use server";
import { z } from "zod";

const nodemailer = require('nodemailer');
const emailSchema = z.object({
  name: z.string().min(2, { message: "Tu nombre debe conterner al menos 2 letras" }),
  email: z.string().email({ message: "Correo invalido"}),
  message: z.string().min(10, { message: "Mensaje debe contener al mentos 10 letras" })
});

const transporter = nodemailer.createTransport({
  host: process.env.IONOS_SMTP_HOST,
  port: process.env.IONOS_SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.IONOS_USER,
    pass: process.env.IONOS_PASSWORD
  }
})

export async function sendEmail(prevState: any, formData: FormData) { // eslint-disable-line @typescript-eslint/no-explicit-any
  const contactFormData = Object.fromEntries(formData)
  const validateContactFormData = emailSchema.safeParse(contactFormData)

  if (!validateContactFormData.success) {
    const formFieldErrors = validateContactFormData.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name,
        email: formFieldErrors?.email,
        message: formFieldErrors?.message
      },
    };
  }

  try {
    const isVerified = await transporter.verify()
  } catch ( error ) {
    return {
      errors: {
        email: "No pudimos agregarte"
      },
    }
  }
  const info = await transporter.sendMail({
    from: 'Terapia el fin <contacto@terapiaelfin.com>',
    to: process.env.EMAIL,
    subject: `Mensaje enviado por ${validateContactFormData.data.name}`,
    text: `${validateContactFormData.data.message} ${validateContactFormData.data.email}`
  });
  return {
    success: "Esperanos pronto",
  };
}
