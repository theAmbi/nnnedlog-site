import { useEffect } from 'react';
import divider from '/images/long_divider.svg';
import WhatsAppBtn from './utils/WhatsAppBtn';
// import { gsap } from 'gsap';
import { } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
    useEffect(() => {

    })

    return (
        <section className='w-full h-fit pt-10 pb-20 bg-mainBlue lg:pt-40 relative'>
            <div className='container'>
                <div className='w-28 h-28 bg-blurPurple2/70 blur-[130px] mt-32 absolute left-0 top-[60%] lg:w-44 lg:h-44 lg:top-[10%] lg:blur-[160px]' />

                <div className='px-10'>
                    <img src={divider} className='bg-borderBlue lg:max-w-3xl lg:mx-auto' />
                    <h5 className='font-climate text-white text-3xl max-w-sm mx-auto text-center pt-8 md:max-w-lg md:text-4xl md:py-12 lg:text-5xl lg:max-w-4xl lg:pt-32'>Want a custom design? <br /> Hit me up!</h5>
                    <div className='pb-8 pt-5 lg:pb-32 lg:pt-0'>
                        <WhatsAppBtn />
                    </div>
                    <img src={divider} className='bg-borderBlue lg:max-w-3xl lg:mx-auto' />
                </div>
            </div>
        </section>)
}

export default CallToAction;