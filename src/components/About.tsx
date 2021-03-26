import SocialFollow from "./SocialFollow";
import profileImg from "../assets/unnamed.png";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div className='max-w-7xl mx-auto flex flex-row justify-center items-center h-full w-full bg-gray-100'>
      <div style={{ width: "60%" }} className='ml-6'>
        <h1 className='text-xl font-bold'>
          <Typewriter
            onInit={(typewriter: any) => {
              typewriter.typeString("About Me").start();
            }}
          />
        </h1>
        <div className='flex justify-between items-center'>
          <div className='p-4'>
            <p className='p-2'>
              My name is Oscar Andersson. I'm a positive, ambitious and loyal
              person who's interested in development, both personal and on the
              web. I'm a true team-player with several seasons in my local
              football where I gained experience in both leadership and
              organisation. Professionally I've gained a lot of different
              experience, as my former role as a Sports Betting Consultant. In
              which I had a lot of responsibility as the publisher of the
              company's texts amongst others.
            </p>
            <p className='p-2'>
              This past year I've started a new challange, to become a front end
              developer. I'm studying at Medieinstitutet in Gothenburg and I'm
              really enjoying the programming world so far.
            </p>
          </div>
          <div>
            <p className='font-bold hidden'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
              autem.
            </p>
          </div>
        </div>
        <p className='font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, maxime?
        </p>
        <div className='mt-2 text-green-700'>
          <SocialFollow />
        </div>
      </div>
      <div style={{ width: "40%" }} className='flex justify-center mt-16'>
        <div className='border-8 border-green-800 border-opacity-60 rounded-sm'>
          <img
            style={{ height: "30rem" }}
            src={profileImg}
            alt='Me'
            className='object-cover'
          />
        </div>
      </div>
    </div>
  );
}

export default About;
