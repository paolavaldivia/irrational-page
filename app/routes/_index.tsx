import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Irrational page" }];

export default function Index() {
  return (
    <main
      className="bg-cover bg-center h-screen w-screen bg-no-repeat"
      style={{ backgroundImage: "url('images/bg1.png')" }}
    >
      <nav className="flex justify-center px-16 py-4">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="flex justify-between items-center max-w-screen-md mx-auto w-full">
          <Link
            to="/about-me"
            className="text-xl mx-2 px-4 py-2 border-2 border-white rounded-lg text-gray-800 bg-opacity-50 bg-white hover:bg-desert-sand hover:text-white transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
          >
            About Me
          </Link>
          <Link
            to="/code-fun"
            className="text-xl mx-2 px-4 py-2 border-2 border-white rounded-lg text-gray-800 bg-opacity-50 bg-white hover:bg-dusk-orange hover:text-white transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Code Fun
          </Link>
          <Link
            to="/blog-posts"
            className="text-xl mx-2 px-4 py-2 border-2 border-white rounded-lg text-gray-800 bg-opacity-50 bg-white hover:bg-twilight-lavender hover:text-white transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Blog Posts
          </Link>
          <Link
            to="/research"
            className="text-xl mx-2 px-4 py-2 border-2 border-white rounded-lg text-gray-800 bg-opacity-60 bg-white hover:bg-canyon-red hover:text-white transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Research
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1
            className="text-8xl font-bold uppercase text-gray-800 leading-none drop-shadow-lg"
            style={{ textShadow: "0 0 5px #DDA500, 0 0 10px #DDA500" }}
          >
            Irrational Page
          </h1>
          <p className="mt-4 text-4xl text-gray-700 font-light">by Paola V</p>
          <button className="mt-10 px-8 py-4 bg-gray-700 bg-opacity-70 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out hover:bg-gray-600">
            Explore
          </button>
        </div>
      </div>
    </main>
  );
}
