"use client";
import Header from "../components/Header";
import noConnection from "../images/noConnection.png";

const About = () => {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Header />

      {/* Main Content */}
      <main className="p-4">
        {/* Seccion Mision */}
        <section className="mt-8 text-center text-[#00000]">
          <h2 className="text-lg font-semibold mb-4 text-black">¡Ups!</h2>
          <div className="flex justify-center items-center">
            <img
              src={noConnection.src}
              alt="No connection"
              className="w-40 h-40 object-contain"
            />
          </div>
          <p className="text-black text-center">
            Parece que perdiste tu conexión. Revisa tu red wifi y vuelve a
            intentarlo.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
