import hoodie from '../images/illustrations/about/hoodie-woman.jpeg';
import darthMaul from '../images/illustrations/about/darth-maul.jpg';
import { TextHeading } from './utils/Heading';

const About = () => {
    return (
        <section className="w-full h-fit pb-5 bg-mainBlue">
            <div className="container px-10 py-5 relative lg:px-4">
                <TextHeading heading={'What the NNNedlog brand is all about'} />

                <div className=' font-quicksand text-textBlue mt-20 flex flex-col gap-10 md:flex-row lg:flex-row lg:justify-between lg:py-10 lg:items-center'>
                    <p className=' md:text-lg md:max-w-lg lg:text-2xl lg:max-w-2xl'>The rise of the NNNedlog brand is quite interesting.
                        NNNedlog was born in 2020, during the COVID-19 lockdown period. <br /><br />
                        It was started all because a friend introduced me to a mobile drawing app - Adobe Illustrator Draw. <br /><br />
                        This was a game-changer, since I didn’t know apps like these existed, and so I began making simple vector illustrations. <br /><br />
                        <span className='font-bold text-textBoldBlue'> This was my first vector illustration I made on Adobe Illustrator on my Infinix Hot 7 Pro.</span> <br /><br />
                        Back then, I named my brand Adobe Draw with Golden.
                    </p>

                    <img src={hoodie} alt="hooded woman vector illustration by nnnedlog" className='rounded-lg md:w-52 md:h-52 lg:w-full lg:h-full ' />
                </div>

                <div className=' font-quicksand text-textBlue mt-20 flex flex-col-reverse gap-10 md:flex-row md:flex-row-reverse lg:flex-row lg:justify-between lg:flex-row-reverse lg:items-center'>
                    <p className=' md:text-lg md:max-w-lg md:text-right lg:text-right lg:text-2xl lg:max-w-2xl'>Years after, and Adobe Draw with Golden has been changed to NNNedlog. <br /><br />
                        With added services like NFT art, merch design and more, NNNedlog is better suited to serve your art needs. <br /><br />
                        <span className='font-bold text-textBoldBlue'> So what are you waiting for? Reach out today or Darth Maul will tickle your feet at night</span> <br /><br />
                        <button className='font-semibold text-mainBlue px-6 py-4  bg-white rounded-lg mt-5 lg:mt-16 '>Request an illustration</button>
                    </p>

                    <img src={darthMaul} alt="darth maul star wars vector illustration by nnnedlog" className='rounded-lg md:w-56 md:h-60 lg:w-[381px] lg:h-[493px]' />
                </div>

                <div className='w-28 h-28 bg-blurBlue blur-[130px] mt-32 absolute right-0 top-[50%] lg:w-44 lg:h-44 lg:top-[10%] lg:blur-[160px]' />
                <div className='w-28 h-28 bg-blurRed blur-[130px] absolute -left-20 bottom-28  lg:w-60 lg:h-60 lg:top-[80%] lg:blur-[160px]' />
            </div>
        </section>
    )
}

export default About;