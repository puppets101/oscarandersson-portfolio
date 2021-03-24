import React from "react";
import image from "../assets/showcaseHero.jpeg";
import WelcomeMessage from "./WelcomeMessage";

function Home() {
  return (
    <main>
      <img
        src={image}
        alt={image}
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 sm:pt-64 px-8'>
        <h1 className='text-green-100 font-bold lg:text-8xl sm:text-6xl xs:text-2xl  font leading-none lg:leading-snug home-name'>
          <WelcomeMessage />
        </h1>
      </section>
    </main>
  );
}

export default Home;
