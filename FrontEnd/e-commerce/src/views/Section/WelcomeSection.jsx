import { useEffect } from "react"
import { Carousel, initTE } from "tw-elements";

export default function WelcomSection() {

    useEffect(() => {
        initTE({ Carousel });
    }, [])

    // carousel code

    return (
        <div
            id="carouselExampleCaptions"
            data-te-carousel-init
            data-te-ride="carousel"

            className="px-4 relative"
        >
            <div
                className=" bottom-0 left-0 right-0 z-[2] mx-[15%]  flex list-none justify-center "
                data-te-carousel-indicators
            >
                <div
                    className="absolute bottom-0 left-0 right-0 z-[2] mx-auto mb-4 flex justify-center p-0"
                    data-te-carousel-indicators
                >
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to="0"
                        data-te-carousel-active
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to="1"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-te-target="#carouselExampleCaptions"
                        data-te-slide-to="2"
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-label="Slide 3"
                    ></button>
                </div>


            </div>

            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                <div
                    className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-active
                    data-te-carousel-item
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                        className="block w-full rounded rounded-b-2xl "
                        alt="..."
                    />
                    <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                        className="block w-full"
                        alt="..."
                    />
                    <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div
                    className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                        className="block w-full"
                        alt="..."
                    />
                    <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>

            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="prev"
            >
                <div className="rounded-full bg-transparent bg-gray-400 w-10 h-10 
                flex items-center justify-center">
                    <span className="inline-block ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5L8.25 12l7.5-7.5"
                            />
                        </svg>
                    </span>
                </div>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Previous
                </span>
            </button>
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.1,0.1,0.1,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="next"
            >
                <div className="rounded-full bg-transparent bg-gray-400 w-10 h-10 
                flex items-center justify-center  ">
                    <span className="inline-block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-8 w-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                            />
                        </svg>
                    </span>
                </div>
                <span className="absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Next
                </span>
            </button>
        </div>

    )

}
