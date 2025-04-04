"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { sendEmail } from "../api/action";

const initialState = {
  message: "",
  errors: {
    email: ""
  }
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending ? true : false} className="bg-white text-green-600 font-semibold py-2 px-4 rounded-r-lg hover:bg-gray-100 transition duration-300">
      Notificarme
    </button>
  )
}

export default function NotifyForm() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return(
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white text-center">
      <div>
        <h1 className="text-5xl font-bold mb-4">Proximamente!</h1>
        <p className="text-lg mb-6">Estamos trabajando duro para ofrecerte algo especial. ¡No te lo pierdas!</p>
        <div className="flex justify-center mb-6">
          <form action={formAction}>
            <input name="email" type="email" placeholder="Ingresa tu correo" className="p-2 w-64 border-2 rounded-l-lg focus:outline-none" required />
            <SubmitButton />
            {state.errors?.email && (
              <p className="text-red-500">{state.errors.email}</p>
            )}
            {state?.success && <p>{state.success}</p>}
          </form>
        </div>
          <p className="text-sm">Respetamos tu privacidad y no compartiremos tu información.</p>
      </div>
    </section>
  );
}
