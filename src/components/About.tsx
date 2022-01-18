import React from 'react';
import squareProfileImg from '../assets/squareprofileimg.png';
import TypingTitle from './TypingTitle';

interface Id {
  id: string;
}

function About(props: Id) {
  return (
    <div className='mt-24 max-w-5xl mx-auto'>
      <div id={props.id} className='bg-gray-100 px-1 sm:px-4'>
        <section className='container block md:flex mx-auto'>
          <div className='md:w-2/3'>
            <TypingTitle title='About me' classes='text-4xl font-bold' />
            <div>
              <div>
                <p className='p-4 font-light leading-relaxed'>
                  Before I began my path to become a web developer, I've spent a
                  substantial part of my professional career in the sports
                  betting business, working for a company whose goal is to
                  provide its customers the best bet of the day. Here I gained
                  much confidence working on a deadline. As the publisher of the
                  company's texts, I had a lot of responsibility, providing our
                  customers with the most valuable content each day. During the
                  past three years, I've also written my picks, gaining
                  knowledge in statistics, research and writing.
                </p>
                <p className='p-4 font-light leading-relaxed'>
                  Working in the sports betting industry has prepared me for the
                  fast-paced web-development environment, and I'm looking
                  forward to taking my experience into a new line of work.
                </p>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 flex justify-center items-center my-4'>
            <img
              src={squareProfileImg}
              alt='Me'
              className='object-cover object-center h-64 w-64 rounded-full'
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
