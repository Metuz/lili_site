import Image from "next/image";


export default function Hero() {
  return (
    <section id="home" className="py-12 md:py-16 px-4 bg-gradient-to-b from-[#95dcc6] to-[#b1e6b3]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#66332f]">
            Your Journey to Mental Wellness Starts Here
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 text-[#66332f]">
            Professional psychological services tailored to your unique needs.
          </p>
          <button className="bg-[#66332f] hover:bg-[#4a2522] text-white font-bold py-2 md:py-3 px-5 md:px-6 rounded-full transition duration-300 shadow-lg text-sm md:text-base">
            Book a Session
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[274px] md:max-w-[320px] lg:max-w-[548px] aspect-[548/530]">
            <Image
              src="/love-yourself.png"
              alt="Professional therapist providing care"
              fill
              className="object-contain drop-shadow-xl"
              priority
              sizes="(max-width: 768px) 274px, (max-width: 1024px) 320px, 548px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
