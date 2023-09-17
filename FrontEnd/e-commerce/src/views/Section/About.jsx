import React from 'react'

export default function About() {
    return (
        <div className='flex flex-row h-screen m-6   bg-gray-200 '>
            <div className='relative w-full font-serif  bg-slate-300 rounded-l-xl  
            overflow-scroll '>
                <p className='absolute  m-5  text-2xl' >
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Nulla ipsam non laudantium consequatur cum distinctio, voluptatem debitis eveniet?
                    Corrupti accusantium tempora natus fuga omnis ratione, repellendus facilis fugit quod laboriosam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Nulla ipsam non laudantium consequatur cum distinctio, voluptatem debitis eveniet?
                    Corrupti accusantium tempora natus fuga omnis ratione, repellendus facilis fugit quod laboriosam.
                </p>
            </div>


            <img className=' w-3/5 bg-cover hidden md:block '
                src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                alt=''
            />
        </div>
    )
}
