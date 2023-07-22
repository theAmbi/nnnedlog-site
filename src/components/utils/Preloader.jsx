import { Zoom } from 'react-preloaders'
const Preloader = () => {
    return (
        <section className=' w-full h-fit flex justify-center items-cente'>
            <div className='max-w-[500px]'>
                <Zoom color={'#fff'} time={2000} background={'#15151B'} />
            </div>
        </section>
    )
}

export default Preloader