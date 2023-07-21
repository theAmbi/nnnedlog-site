import shortDivider from '../images/short_divider.svg';
import animeBoy from '../images/illustrations/hero/anime-boy.jpg';
import screams from '../images/illustrations/hero/screams.jpg';
import mySide from '../images/illustrations/hero/my-side.jpg';
import bart from '../images/illustrations/hero/bart-simpson.png';
import jez from '../images/illustrations/hero/jez.png';

const Hero = () => {
    return (
        <section className="w-full min-h-[70vh] lg:min-h-fit bg-mainBlue font-climate text-white px-10 ">
            <div className='container relative md:max-w-[90%] md:mx-auto'>
                <h2 className=" pt-40 text-4xl text-center md:text-6xl lg:text-7xl">WELCOME</h2>
                <div className='flex items-center gap-5 justify-center pt-3 text-center'>
                    <img src={shortDivider} className='xs:hidden block' />
                    <h2 className=' text-3xl md:text-5xl lg:text-6xl'>TO THE</h2>
                    <img src={shortDivider} className='xs:hidden block' />
                </div>
                <h2 className=" pt-3 text-4xl text-center md:text-6xl lg:text-7xl">HOME OF</h2>
                <h2 className='text-4xl text-center pt-3 md:text-5xl lg:text-6xl'>VECTOR ART</h2>

                <div className='grid grid-cols-3 grid-rows-1 gap-2 pt-10 lg:pt-20 lg:pb-32 lg:flex lg:gap-3 lg:justify-center md:scale-90 md:pb-20'>
                    <img src={screams} alt="black gojo nnnedlog illustration" className=' rounded-md order-3 hover:-translate-y-4 transition duration-300 ease-in-out' />
                    <img src={mySide} alt="my side album cover art nnnedlog illustration" className=' rounded-md order-2 hover:-translate-y-4 transition duration-300 ease-in-out' />
                    <img src={animeBoy} alt="anime boy nnnedlog vector illustration" className=' rounded-md hover:-translate-y-4 transition duration-300 ease-in-out' />
                </div>

                <img src={jez} alt="jerem lynch nnnedlog vector illustration" className='absolute w-[14%] top-36 right-4 -rotate-12 hover:-rotate-45 transition ease-in-out duration-300 shadow-lg shadow-yellow-800 rounded-full md:w-[10%] lg:w-[6%] lg:top-72 lg:right lg:hover:shadow-2xl' />
                <img src={bart} alt="jerem lynch nnnedlog vector illustration" className='absolute w-[14%] bottom-36 hover:-rotate-45 transition duration-300 ease-in-out left-0 shadow-lg shadow-red-800 rounded-full md:w-[10%] md:top-96 lg:w-[6%] lg:top-96' />
            </div>

        </section>
    )
}

export default Hero;