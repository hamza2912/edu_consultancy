import React from 'react';
import Button from '../components/button';
import { useHistory } from 'react-router-dom';
import { getDatabase, ref, set, onValue } from "firebase/database";
import OwlCarousel from 'react-owl-carousel';

function Home() {

  let history = useHistory();
  const [email, setemail] = React.useState("");
  const [study, setstudy] = React.useState("");
  const [emailList, setemailList] = React.useState([]);
  const [betaList, setbetaList] = React.useState([]);
  const db = getDatabase();

  React.useEffect(() => {
    const emails = ref(db, `emailList/`);
    onValue(emails, (snapshot) => {
        if(snapshot.val()){
            setemailList(snapshot.val());
        }
    });
    const betalists = ref(db, `betaList/`);
    onValue(betalists, (snapshot) => {
        if(snapshot.val()){
            setbetaList(snapshot.val());
        }
    });
},[]);


function submitEmail() {
  if(email != ''){
    var emails = emailList;
    console.log(emails);
    emails.push(email);
    set(ref(db, 'emailList'), emails);
    setemail("");
    alert("Thank you for submitting your email");
  }
}

function submitBeta() {
  if(email != ''){
    var betalist = betaList;
    console.log(betaList);
    betalist.push({
        email: email,
        study: study
    })
    set(ref(db, 'betaList'),betalist);
    setemail("");
    setstudy("");
    alert("Thank you for submitting your email");
  }
}

const partners_responsiveness = {
  0 : {
    items: 3,
  },
  1000 : {
    items: 5, 
  }
}

const services_responsiveness = {
  0 : {
    margin: 10,
    center: false,
    items: 1,
  },
  1000 : {
    items: 2, 
  }
}


  

  return (

    <>
      
    <div className='container mx-auto lg:px-16 px-6 overflow-x-hidden'>  

      <section id='home' className='w-full lg:h-screen h-auto grid lg:grid-cols-2 grid-cols-1 pt-16 lg:pt-0'>
        <div className='flex items-center justify-start lg:h-full py-16 lg:py-0'>
          <div className='content lg:w-3/4 w-10/11 relative z-10'>
            <h1 data-aos="fade-right" data-aos-duration="800" className='lg:text-5xl text-3xl'>Take Right Decisions and Master your destiny.</h1>
            <p data-aos="fade-right" data-aos-duration="800" className='my-8 text-black text-xl'>Studying abroad is not a dream now, See how we make it happen.</p>
            <div data-aos="fade-right" data-aos-duration="800" className='lg:w-1/2 w-full'>
              <Button  title="Yes!  Show me now" type='anchor' href="#journey" />
            </div>
            <img className='absolute lg:w-24 w-16 lg:-top-20 -top-12 left-1/3 z-minus' src="images/icons/globe.svg" alt="" />
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="800" className='flex lg:items-center items-start lg:justify-end justify-center z-10'>
          <img className='w-4/5' src="images/hero_image.svg" alt="Hero Image" />
        </div>
        <div data-aos="flip-left" data-aos-duration="800" className='lg:absolute relative lg:-bottom-20 left-0 w-full z-10'>
          <div className='container mx-auto lg:px-16 px-6'>
            <div className='bg-white rounded-lg lg:py-12 py-8 shadow-xl'>
              <div className='flex lg:flex-row flex-col gap-8 lg:w-3/5 w-4/5 mx-auto items-center'>
                <div className='flex lg:flex-row flex-col gap-2 lg:w-3/4 w-full'>
                  <input value={study} onChange={(event) => setstudy(event.target.value)} className='lg:w-1/2 w-full text-gray text-sm bg-gray px-4 py-3 rounded-2xl shadow-md focus:outline-none' type="text" placeholder='What do you want to study?' />
                  <input value={email} onChange={(event) => setemail(event.target.value)} className='lg:w-1/2 w-full text-gray text-sm bg-gray px-4 py-3 rounded-2xl shadow-md focus:outline-none' type="text" placeholder='example@gmail.com' />
                </div>
                <div className='lg:w-1/5 w-full'>
                  <Button onClick={submitBeta} title="Send" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className='absolute w-24 bottom-12 left-1/2 z-0' src="images/icons/spiral.svg" alt="" />
        <img className='absolute right-0 lg:top-24 top-1/2 w-full z-minus' src="images/icons/line.svg" alt="" />
      </section>
      
      <section className='lg:h-40 h-10'></section>
      
      <section id='about' className='w-full lg:h-screen h-auto py-16 lg:pt-5'>
        <h1 data-aos="fade-zoom-in" data-aos-duration="800" className='text-center lg:text-5xl text-3xl my-10'>Who we are</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-20 lg:gap-0'>
          <div className='flex justify-start items-center text-gray-600'>
            <div data-aos="fade-right" data-aos-duration="800" className='lg:w-11/12 w-full z-10'>
              <p className='lg:text-xl text-lg text-black text-center lg:text-left'>Trescents make it hassle-free for you to get an education overseas. We believe that the Trescent is a condition in which you are in control of your future. Our purpose is to assist you in achieving it by removing obstacles from your way through our counseling sessions, securing an acceptance offer from your dream university, and giving you professional advice on visa application so that you understand the process like the back of your hand. Enter the educational sea and develop your inner greatness—the greatness that transforms the world.</p>
              <div className='mt-8 relative flex justify-center lg:justify-start'>
                  <Button title="Yes!  I want to know more" type='anchor' href="https://wa.me/923363781910" target="_blank" />
                  <img className='absolute w-24 left-0 -bottom-24 z-0' src="images/icons/spiral.svg" alt="" />
              </div>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="800" className='flex items-center justify-center'>
            <img className='w-4/5' src="images/about.svg" alt="consultancy" />
          </div>
        </div>
      </section>
      
      <section id='partners' className='w-full relative py-16'>
        <div data-aos="fade-zoom-in" data-aos-duration="800" className='text-lg text-center'>
          <h2>Partner Universities</h2>
        </div>
        <div data-aos="fade-down" data-aos-duration="800" className='lg:text-5xl text-3xl text-center my-10'>
          <h1>Where you achieve your Goals</h1>
        </div>
        <OwlCarousel className='owl-theme lg:my-20 my-10' loop margin={10} responsive={partners_responsiveness}>
          <div class="item flex justify-center"><div className='lg:w-3/5 w-full'><img src="images/partners/image-2.png" alt="partner 1"/></div></div>
          <div class="item flex justify-center"><div className='lg:w-2/5 w-4/5'><img src="images/partners/image-3.png" alt="partner 2"/></div></div>
          <div class="item flex justify-center"><div className='lg:w-3/5 w-full -mt-10'><img src="images/partners/image-5.png" alt="partner 3"/></div></div>
          <div class="item flex justify-center"><div className='lg:w-4/5 w-full'><img src="images/partners/image-4.png" alt="partner 4"/></div></div>
          <div class="item flex justify-center"><div className='lg:w-3/5 -mt-2 w-full'><img src="images/partners/image-6.png" alt="partner 5"/></div></div>
        </OwlCarousel>
        <div data-aos="flip-left" data-aos-duration="800" className='bg-pink grid lg:grid-cols-2 grid-cols-1 lg:px-24 px-5 py-12 relative'>
          <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
            <h1 className='lg:text-4xl text-3xl font-bold text-blue'>Know before you make a decision. </h1>
            <p className='text-xl text-blue my-6'>Join our Newsletter and get the latest updates about admissions, stories and tips about life abroad and many more.</p>
            <div className='flex flex-row lg:w-4/5 w-full'>
              <input value={email} onChange={(event) => setemail(event.target.value)} className='w-3/4 text-sm bg-gray px-4 py-3 rounded-bl-xl rounded-tr-xl shadow-sm focus:outline-none z-10' type="text" placeholder='Type your email' />
              <div className='w-1/4 -ml-2'>
                <Button onClick={submitEmail} title="Send"/>
              </div>
            </div>
          </div>
          <img className='absolute lg:w-24 w-16 lg:-bottom-16 -bottom-8 left-24 z-0' src="images/icons/spin.svg" alt="" />
          <img data-aos-delay="500" className='absolute w-1/5 right-24 bottom-0 hidden lg:block' src="images/study_abroad.png" alt="" />
        </div>
        <img className='absolute lg:w-24 w-16 top-5 lg:left-20 left-0 z-0' src="images/icons/globe.svg" alt="" />
      </section> 

      <section id='journey' className='relative lg:h-screen pt-12'>
        <h1 data-aos="fade-down" data-aos-duration="800" className='text-center lg:text-5xl text-3xl my-10'>Let's Study Abroad</h1>
        <h2 data-aos="fade-zoom-in" data-aos-duration="800" className='text-lg text-center'>Embrace your dreams and apply with us!</h2>
        <img className='w-full' src="images/process/journey.svg" alt="" />
      </section>
      <section className='grid lg:grid-cols-2 grid-cols-1 gap-y-20 place-items-center pb-24 lg:pt-0 pt-20'>
        <div data-aos="fade-right" data-aos-duration="800"  className='flex gap-4'>
          <h1 className='text-9xl'>1</h1>
          <div className='flex flex-col'>
            <h1 className='text-4xl text-black'>Mentoring Session</h1>
            <p className='w-4/5 text-xl my-4'>Visit our office to meet with a counselor and receive free counseling, or if you live too far away to visit, schedule a free Skype consultation.</p>
            <h2 className='text-xl font-semibold'>Duration: <span className='text-red-600 font-normal'>1-2 Days</span></h2>
            <a href="https://wa.me/923363781910" target="_blank" className='text-lg text-blue-400 font-medium mt-2'>Let's Chat and Meet</a>
          </div>
        </div>
        <img className='w-4/5' src="images/process/step1.svg" alt="" />
        <img className='w-3/5 hidden lg:block' src="images/process/step4.svg" alt="" />
        <div data-aos="fade-left" data-aos-duration="800"  className='flex gap-4'>
          <h1 className='text-9xl'>2</h1>
          <div className='flex flex-col'>
            <h1 className='text-4xl text-black'>Avatar Assesment</h1>
            <p className='w-4/5 text-xl my-4'>It is often the case that people don't know where you stands based on your profile. Get a free evaluation of your profile from us.</p>
            <h2 className='text-xl font-semibold'>Duration: <span className='text-red-600 font-normal'>1-2 Days</span></h2>
            <a href="https://wa.me/923363781910" target="_blank" className='text-lg text-blue-400 font-medium mt-2'>Evaluate my Profile</a>
          </div>
        </div>
        <img className='w-4/5 lg:hidden' src="images/process/step4.svg" alt="" />
        <div data-aos="fade-right" data-aos-duration="800"  className='flex gap-4'>
          <h1 className='text-9xl'>3</h1>
          <div className='flex flex-col'>
            <h1 className='text-4xl text-black'>Application Process</h1>
            <p className='w-4/5 text-xl my-4'>Your admittance is just a click away. For further information, get in touch with us.</p>
            <h2 className='text-xl font-semibold'>Duration: <span className='text-red-600 font-normal'>6-8 Weeks</span></h2>
            <a href="https://wa.me/923363781910" target="_blank" className='text-lg text-blue-400 font-medium mt-2'>Begin my Application</a>
          </div>
        </div>
        <img className='w-1/2' src="images/process/step2.svg" alt="" />
        <img className='w-4/5 hidden lg:block' src="images/process/step5.svg" alt="" />
        <div data-aos="fade-left" data-aos-duration="800"  className='flex gap-4'>
          <h1 className='text-9xl'>4</h1>
          <div className='flex flex-col'>
            <h1 className='text-4xl text-black'>VISA  <span className='lg:text-4xl text-3xl'>Processing</span></h1>
            <p className='w-4/5 text-xl my-4'>Getting a visa involves organizing your paperwork in accordance with visa regulations. understand the proper techniques to ace your visa interview.</p>
            <h2 className='text-xl font-semibold'>Duration: <span className='text-red-600 font-normal'>4-6 Weeks</span></h2>
            <a href="https://wa.me/923363781910" target="_blank" className='text-lg text-blue-400 font-medium mt-2'>Apply for my VISA</a>
          </div>
        </div>
        <img className='w-4/5 lg:hidden' src="images/process/step5.svg" alt="" />
        <div data-aos="fade-right" data-aos-duration="800"  className='flex gap-4'>
          <h1 className='text-9xl'>5</h1>
          <div className='flex flex-col'>
            <h1 className='text-4xl text-black'>Ready to Departure</h1>
            <p className='w-4/5 text-xl my-4'>You can feel anxious about going overseas to school. We've set up a pre- and post-departure orientation for you as a result of our commitment to you. The orientation will give you all the information you need and help you get settled into your new life abroad.</p>
            <a href="https://wa.me/923363781910" target="_blank" className='text-lg text-blue-400 font-medium mt-2'>Lets Meet before I Fly</a>
          </div>
        </div>
        <img className='w-4/5' src="images/process/step3.svg" alt="" />

      </section>

      {/* <section id='testimonials' className='w-full lg:h-screen h-auto'>
        <h1 data-aos="fade-down" data-aos-duration="800" className='text-center lg:text-5xl text-3xl my-10'>Testimonials</h1>
        <div className='flex items-center my-20 z-10'>
          <div className='relative w-2/12 lg:ml-10 hidden lg:block'>
            <img className='w-12' src="images/icons/curve.svg" alt="" />
            <img className='w-12 h-auto rounded-full absolute -top-10 left-8' src="images/testimonials/Ellipse1.png" alt="" />
            <img className='w-12 h-auto rounded-full absolute top-12 -left-4' src="images/testimonials/Ellipse5.png" alt="" />
            <img className='w-12 h-auto rounded-full absolute bottom-16 -left-4' src="images/testimonials/Ellipse6.png" alt="" />
            <img className='w-12 h-auto rounded-full absolute -bottom-10 left-8' src="images/testimonials/Ellipse7.png" alt="" />
          </div>
          <div className='lg:w-10/12 w-full lg:-ml-20'>
            <OwlCarousel className='owl-theme' loop margin={10} items={1}>
              <div className='item grid lg:grid-cols-2 grid-cols-1 gap-40 lg:gap-0 items-center'>
                <div className='flex items-center lg:justify-start justify-center'>
                  <div data-aos="zoom-in" data-aos-duration="800" className='w-3/5 p-6 bg-light-blue rounded-full'>
                    <img className='w-full rounded-full' src="images/testimonials/Ellipse1.png" alt="consultancy" />
                  </div>
                </div>
                <div className='flex items-center lg:justify-start justify-center text-gray-600 relative'>
                  <div data-aos="fade-left" data-aos-duration="800" className='w-4/5'>
                    <p className='lg:text-lg text-base text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className='w-full flex justify-end mt-12'>
                      <div className='flex flex-col items-center text-black'>
                          <p className='text-xl'>Ava Adams</p>
                          <p>Student of Pharmacy</p>
                      </div>
                    </div>
                    <div className='flex lg:gap-8 gap-5 mt-4 lg:mt-0'>
                      <img className='lg:w-12 w-8 cursor-pointer prev' src="images/icons/previous.svg" alt="" />
                      <img className='lg:w-12 w-8 cursor-pointer next' src="images/icons/next.svg" alt="" />
                    </div>
                  </div>
                  <img className='absolute w-24 right-0 top-1/2 z-minus' src="images/icons/spiral.svg" alt="" />
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section> */}
    
    </div>

    <section id='services' className='relative mt-24 lg:mt-0 pt-8'>
      <div className='container mx-auto w-full h-auto pb-16 lg:px-16 px-6'>
          <div className='flex justify-center'>
            <h1 data-aos="zoom-in-up" data-aos-duration="800" className='text-center lg:text-5xl text-3xl relative'>Our Services
              <img className='absolute w-32 -top-8 -left-6 z-0' src="images/icons/globe.svg" alt="" />
            </h1>
          </div>
        <OwlCarousel className='owl-theme mt-20 px-6 lg:px-0 services' loop margin={20} center items={2} responsive={services_responsiveness}>
          <div className='item bg-white lg:px-16 px-6 lg:py-20 py-12'>
            <div className='flex justify-between'>
              <h1 className='lg:text-4xl text-3xl text-black'>IELTS/TOEFL  <br />Training</h1>
              <div className='flex justify-center items-center lg:w-24 lg:h-24 w-16 h-16 rounded-full bg-pink'>
                <img className='w-12' src="images/icons/filters.svg" alt="" />
              </div>
            </div>
            <p className='my-6'>Institutions abroad frequently demand confirmation of English language proficiency. In order to guarantee that the student receives a good score, we offer intensive instruction and extensive training.</p>
            <Button title="Explore More" type='anchor' href="https://wa.me/923363781910" target="_blank"/>
          </div>
          <div className='item bg-white lg:px-16 px-6 lg:py-20 py-12'>
            <div className='flex justify-between'>
              <h1 className='lg:text-4xl text-3xl text-black'>Academic <br />Counselling</h1>
              <div className='flex justify-center items-center lg:w-24 lg:h-24 w-16 h-16 rounded-full bg-pink'>
                <img className='w-12' src="images/icons/filters.svg" alt="" />
              </div>
            </div>
            <p className='my-6'>Our knowledgeable counselors take into account your educational background, hobbies, skills, and market trends before recommending the best possible pathways that are personalized to your needs.</p>
            <Button title="Explore More" type='anchor' href="https://wa.me/923363781910" target="_blank"/>
          </div>
          <div className='item bg-white lg:px-16 px-6 lg:py-20 py-12'>
            <div className='flex justify-between'>
              <h1 className='lg:text-4xl text-3xl text-black'>Admissions</h1>
              <div className='flex justify-center items-center lg:w-24 lg:h-24 w-16 h-16 rounded-full bg-pink'>
                <img className='w-12' src="images/icons/filters.svg" alt="" />
              </div>
            </div>
            <p className='my-6'>We personally handle the application procedure and advise the student on the proper set of supporting documents needed. Additionally, we immediately get in touch with the institution to ensure a quick admissions procedure.</p>
            <Button title="Explore More" type='anchor' href="https://wa.me/923363781910" target="_blank"/>
          </div>
          <div className='item bg-white lg:px-16 px-6 lg:py-20 py-12'>
            <div className='flex justify-between'>
              <h1 className='lg:text-4xl text-3xl text-black'>Visa Guidance</h1>
              <div className='flex justify-center items-center lg:w-24 lg:h-24 w-16 h-16 rounded-full bg-pink'>
                <img className='w-12' src="images/icons/filters.svg" alt="" />
              </div>
            </div>
            <p className='my-6'>We communicate regularly with embassies, consulates, and other relevant departments. Our counselors are therefore up to date on all applicable laws and regulations. Our success record in obtaining visas is hence very high.</p>
            <Button title="Explore More" type='anchor' href="https://wa.me/923363781910" target="_blank"/>
          </div>
          <div className='item bg-white lg:px-16 px-6 lg:py-20 py-12'>
            <div className='flex justify-between'>
              <h1 className='lg:text-4xl text-3xl text-black'>University <br /> Guidance</h1>
              <div className='flex justify-center items-center lg:w-24 lg:h-24 w-16 h-16 rounded-full bg-pink'>
                <img className='w-12' src="images/icons/filters.svg" alt="" />
              </div>
            </div>
            <p className='my-6'>To study at one of the best colleges in the world, Pakistani students should apply for the widest range of international scholarships possible.</p>
            <Button title="Explore More" type='anchor' href="https://wa.me/923363781910" target="_blank"/>
          </div>
          <div className='item bg-white lg:px-16 px-6 lg:py-20 py-12'>
            <div className='flex justify-between'>
              <h1 className='lg:text-4xl text-2xl text-black'>Personal Statement/SOP  <br /> Writing & Assessment </h1>
              <div className='flex justify-center items-center lg:w-24 lg:h-24 w-16 h-16 rounded-full bg-pink'>
                <img className='w-12' src="images/icons/filters.svg" alt="" />
              </div>
            </div>
            <p className='my-6'>The admissions staff is curious to learn more about you. With the help of our SOP experienced team, express your reflections, accomplishments, and ideas in the best possible manner and get your amazing SOP done.</p>
            <Button title="Explore More" type='anchor' href="https://wa.me/923363781910" target="_blank"/>
          </div>
          <div className='item bg-white lg:px-16 px-6 lg:py-20 py-12'>
            <div className='flex justify-between'>
              <h1 className='lg:text-4xl text-3xl text-black'>Pre and Post  <br /> Departure Guide</h1>
              <div className='flex justify-center items-center lg:w-24 lg:h-24 w-16 h-16 rounded-full bg-pink'>
                <img className='w-12' src="images/icons/filters.svg" alt="" />
              </div>
            </div>
            <p className='my-6'>TWe provide a variety of pre and post-departure workshops to help you take advantage of the personal and cultural opportunities available to you while traveling and feel at home.</p>
            <Button title="Explore More" type='anchor' href="https://wa.me/923363781910" target="_blank"/>
          </div>
          <div className='item bg-white lg:px-16 px-6 lg:py-20 py-12'>
            <div className='flex justify-between'>
              <h1 className='lg:text-4xl text-3xl text-black'>Profile   <br /> Assessment</h1>
              <div className='flex justify-center items-center lg:w-24 lg:h-24 w-16 h-16 rounded-full bg-pink'>
                <img className='w-12' src="images/icons/filters.svg" alt="" />
              </div>
            </div>
            <p className='my-6'>We summarize your profile based on the data you provided and give you a complete analysis of your chances of receiving a visa based on instructions from the Embassy.</p>
            <Button title="Explore More" type='anchor' href="https://wa.me/923363781910" target="_blank"/>
          </div>
          <div className='item bg-white lg:px-16 px-6 lg:py-20 py-12'>
            <div className='flex justify-between'>
              <h1 className='lg:text-4xl text-3xl text-black'>CV Writing  <br />  & Assesment</h1>
              <div className='flex justify-center items-center lg:w-24 lg:h-24 w-16 h-16 rounded-full bg-pink'>
                <img className='w-12' src="images/icons/filters.svg" alt="" />
              </div>
            </div>
            <p className='my-6'>CV is the vital part of an application, on which your admission depends. We help you curate professional winning CVs.</p>
            <Button title="Explore More" type='anchor' href="https://wa.me/923363781910" target="_blank"/>
          </div>
        </OwlCarousel>

        <img className='absolute w-1/3 lg:bottom-0 top-0 right-0 z-0' src="images/icons/cloud.svg" alt="" />
        <img className='absolute w-1/5 lg:bottom-20 bottom-32 left-0 z-0' src="images/icons/cloud_sm.svg" alt="" />
      </div>
    </section>

    </>

  );

}
  
export default Home;
