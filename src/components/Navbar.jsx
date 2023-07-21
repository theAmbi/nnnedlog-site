import { useEffect } from 'react';
import logo from '/logo.svg';
// import { Squash as Hamburger } from 'hamburger-react';

const Navbar = () => {
    // const [isOpen, setOpen] = useState(false);

    useEffect(() => {

    })

    return (
        <div className='fixed top-0 left-0 w-full h-[89px] bg-mainBlue/90 z-50 border-b border-b-slate-800 backdrop-blur-lg'>
            <nav className="w-full h-[89px] flex items-center justify-between container px-5 ">
                <div><img src={logo} alt="nnnedlog-logo" className='w-[80%] lg:w-full' /></div>
                <div className='flex items-center justify-end text-white font-quicksand gap-5 relative'>
                    <div className='flex items-center gap-16 hidden lg:flex'>
                        <p>About</p>
                        <p>Gallery</p>
                        <button className='font-semibold bg-white px-3 py-2 rounded-md text-mainBlue cursor-pointer hover:border-2 hover:border-borderBlue hover:bg-transparent hover:text-white'>Get a Quote</button>
                    </div>
                    <div className='lg:hidden'>
                        {/* <Hamburger color='#8C8CCA' size={25} toggle={setOpen} toggled={isOpen} /> */}
                        <a href="https://wa.me/+2347018448727" target='_blank' rel='noreferrer'>
                            <button className='bg-transparent border-borderBlue border-2 text-white py-3 px-3 rounded-lg'>Get a Quote</button>
                        </a>
                    </div>

                </div>
            </nav>
            {/* {isOpen && <div className='bg-mainBlue/90 border-r  border-slate-800 w-[60%] h-[calc(100vh-89px)] lg:hidden z-50'>
                <div className='relative border-yellow-300 px-10 py-10 w-full h-full text-white font-quicksand backdrop-blur-lg flex flex-col justify-between'>
                    <div className='flex flex-col gap-5'>
                        <p className=' py-3 px-4'>About</p>
                        <p className=' py-3 px-4'>Gallery</p>
                    </div>
                    <div className='px-4 pt-5 border-t border-slate-700 w-full' >
                        <button className='font-semibold bg-white w-full px-3 py-2 rounded-md text-mainBlue cursor-pointer hover:text-mainBlue hover:bg-textBlue'>Request a Quote</button>
                    </div>
                </div>
            </div>} */}
        </div>
    )
}

export default Navbar;