import instagram from '../images/logos/instagram.svg';
import tiktok from '../images/logos/tiktok.svg';
import twitter from '../images/logos/twitter.svg';
import youtube from '../images/logos/youtube.svg';

const Footer = () => {
    return (
        <section className="w-full h-fit py-10 font-quicksand text-white relative overflow-clip lg:py-40">
            <div className='container flex flex-col gap-8 justify-center items-center md:flex-row lg:flex-row lg:justify-between'>
                <div className="container px-10 md:font-semibold lg:font-semibold text-center lg:text-lg">
                    &copy; 2023 NNNedlog. All rights reserved <br />
                    Made with love by Golden Ekpendu
                </div>

                <div className='flex gap-5 items-center justify-center lg:gap-10'>
                    <a href="https://" className='w-7 lg:w-8 hover:scale-125 transition duration-500 ease-linear'><img src={instagram} alt='instagram' /></a>
                    <a href="https://" className='w-7 lg:w-8 hover:scale-125 transition duration-500 ease-linear'><img src={tiktok} alt='tiktok' /></a>
                    <a href="https://" className='w-7 lg:w-8 hover:scale-125 transition duration-500 ease-linear'><img src={twitter} alt='twitter' /></a>
                    <a href="https://" className='w-7 lg:w-8 hover:scale-125 transition duration-500 ease-linear'><img src={youtube} alt='youtube' /></a>
                </div>
            </div>
            <div className='w-12 h-12 hidden bg-blurYellow/60 blur-[130px] absolute left-[70%] lg:block lg:w-44 lg:h-44 lg:top-[93%] lg:blur-[160px]' />

        </section>
    )
}

export default Footer;