"use server";
import { z } from "zod";
import { Resend } from "resend";

const emailSchema = z.object({
  email: z.string().email({ message: "Correo invalido"})
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(prevState: any, formData: FormData) { // eslint-disable-line @typescript-eslint/no-explicit-any
  const contactFormData = Object.fromEntries(formData)
  const validateContactFormData = emailSchema.safeParse(contactFormData)

  if (!validateContactFormData.success) {
    const formFieldErrors = validateContactFormData.error.flatten().fieldErrors;

    return {
      errors: {
        email: formFieldErrors?.email
      },
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'El fin del principio <onboarding@resend.dev>',
      to: ['lic.lilia.psicologa@gmail.com'],
      subject: 'Persona interesada',
      html: validateContactFormData.data.email
    });

    if (error) {
      return {
        errors: {
          email: "No pudimos agregarte"
        }
      }
    }

    return {
      success: "Esperanos pronto",
    };
  } catch (error) {
    console.log(error);
    return {
      errors: {
        email: "No pudimos agregarte"
      }
    }
  }
}
