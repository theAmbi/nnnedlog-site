import whatsapp from '/images/logos/whatsapp.svg';

const WhatsAppBtn = () => {
    return (
        <a href="https://wa.me/+2347018448727" target='_blank' rel='noreferrer' className='bg-transparent'>
            <button className='flex items-center justify-center max-w-full mx-auto hover:scale-110  transition duration-300 ease-out'>
                <div className='bg-whatsapp py-6 px-4 rounded-l-xl lg:px-6'><img src={whatsapp} alt="whatsapp contact button" className='w-6 h-6 lg:w-9 lg:h-9' /></div>
                <div className=' bg-white font-quicksand text-mainBlue font-bold py-6 px-5 rounded-r-xl lg:text-lg lg:py-7 lg:px-10'>Send Message</div>
            </button>
        </a>
    )
}

export default WhatsAppBtn