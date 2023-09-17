 import React from 'react'

export default function Text({ text }) {
    return (
        <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-serif">
                    {text}
                </h2>
            </div>
        </div>
    )
}
