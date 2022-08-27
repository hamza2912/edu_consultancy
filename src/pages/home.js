import React from 'react';
import Button from '../components/button';

function Home() {

  

  return (
      
    <div className='container mx-auto lg:px-16 px-6'>  

      <section className='w-full h-screen grid grid-cols-2'>
        <div className='flex items-center justify-start h-full'>
          <div className='content w-3/4'>
            <h1 className='text-5xl'>Kickstart your Career from UK</h1>
            <p className='my-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className='w-1/2'>
              <Button title="Start Journey" />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-end'>
          <img className='w-4/5' src="images/hero_image.svg" alt="Hero Image" />
        </div>
        <div className='absolute -bottom-20 left-0 w-full'>
          <div className='container mx-auto lg:px-16 px-6'>
            <div className='bg-white rounded-lg py-12 shadow-xl'>
              <div className='flex gap-8 w-3/5 mx-auto items-center'>
                <div className='flex gap-2 w-3/4'>
                  <select className='w-1/2 text-gray text-sm bg-gray px-4 py-3 rounded-2xl shadow-md focus:outline-none' name="" id="">
                    <option value="">What you want to Study?</option>
                    <option value="">Engineering</option>
                  </select>
                  <input className='w-1/2 text-gray text-sm bg-gray px-4 py-3 rounded-2xl shadow-md focus:outline-none' type="text" placeholder='example@gmail.com' />
                </div>
                <div className='w-1/5'>
                  <Button title="Send" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='h-40'></section>
      <section className='w-full h-screen'>
        <h1 className='text-center text-5xl my-10'>About Us</h1>
        <div className='grid grid-cols-2'>


        </div>
      </section>
    
    </div>

  );

}
  
export default Home;
