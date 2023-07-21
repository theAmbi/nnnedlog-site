import divider from '../../images/long_divider.svg'

// eslint-disable-next-line react/prop-types
export const TextHeading = ({ heading }) => {
    return (
        <div className='lg:max-w-3xl lg:mx-auto'>
            <img src={divider} className='bg-borderBlue' />
            <h5 className='font-climate text-white text-3xl max-w-sm mx-auto text-center py-8 md:max-w-lg md:text-4xl md:py-12 lg:text-5xl lg:max-w-3xl lg:py-20'>{heading}</h5>
            <img src={divider} className='bg-borderBlue' />
        </div>
    )
}
