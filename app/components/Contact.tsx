"use client"

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { sendEmail } from "../api/action";

const initialState = {
  message: "",
  errors: {
    name: "",
    email: "",
    message: ""
  }
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit"
      disabled={pending ? true : false}
      className="w-full bg-[#66332f] hover:bg-[#4a2522] text-white font-bold py-3 px-6 rounded transition duration-300 shadow-md"
    >
      Enviar
    </button>
  )
}

export default function Contact() {
  const [state, formAction] = useActionState(sendEmail, initialState)

  return (
    <section id="contact" className="py-16 px-4 bg-[#95dcc6] text-[#66332f]">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Contactanos</h2>
        <div className="max-w-2xl mx-auto">
          <form action={formAction} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Nombre</label>
              <input 
                type="text" 
                name="name" 
                className="w-full p-3 rounded bg-white/80 border border-[#80a06e] focus:outline-none focus:ring-2 focus:ring-[#66332f]"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input 
                type="email" 
                name="email" 
                className="w-full p-3 rounded bg-white/80 border border-[#80a06e] focus:outline-none focus:ring-2 focus:ring-[#66332f]"
                placeholder="tu.email@example.com"
              />
              {state.errors?.email && (
                <p className="text-red-500">{state.errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Mensaje</label>
              <textarea 
                name="message" 
                rows={4}
                className="w-full p-3 rounded bg-white/80 border border-[#80a06e] focus:outline-none focus:ring-2 focus:ring-[#66332f]"
                placeholder="Como podemos ayudarte?"
              ></textarea>
            </div>
            <SubmitButton />
          </form>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Visita nuestro consultorio</h3>
            <p className="mb-2">123 Wellness Avenue</p>
            <p className="mb-2">Mental Health City, MH 12345</p>
            <p className="mb-4">Phone: (123) 456-7890</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-[#66332f]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#66332f]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[#66332f]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
