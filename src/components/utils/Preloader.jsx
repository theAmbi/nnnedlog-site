import { Zoom } from 'react-preloaders'
const Preloader = () => {
    return (
        <section className='bg-mainBlue w-full h-screen flex justify-center items-center'>
            <Zoom color={'#fff'} time={2000} background={'#15151B'} />
        </section>
    )
}

export default Preloader