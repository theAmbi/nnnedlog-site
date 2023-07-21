import { TextHeading } from "./utils/Heading";
import { services } from "../../data/services";

const ServicesOffered = () => {
    return (
        <section className="w-full pt-20 h-fit bg-mainBlue pb-20">
            <div className="container px-10 py-5 relative">
                <TextHeading heading={'What I can offer you'} />
                <div className="mt-16 lg:mt-20 grid grid-cols-2 gap-x-3 gap-y-5 md:grid-cols-3">
                    {services.map(({ id, slug, coverImg, title }) => <div key={id} className="border border-borderBlue rounded-xl flex flex-col justify-center items-center hover:-translate-y-4 transition duration-300 ease-in-out">
                        <div className="p-4  bg-gradient-to-b from-transparent to-borderBlue backdrop-blur-md w-full flex justify-center items-center">
                            <img src={coverImg} alt={slug} className="" />
                        </div>
                        <div className="font-climate text-md text-white py-5 px-3 lg:text-lg lg:px-11 w-full">{title}</div>
                    </div>
                    )}
                </div>

                <div className='w-28 h-28 bg-blurBlue blur-[130px] mt-32 absolute right-0 top-[50%] lg:w-44 lg:h-44 lg:top-[10%] lg:blur-[160px]' />

            </div>

        </section>
    )
}

export default ServicesOffered;