import React from 'react'

export default function Field({ label, Id, placeholder, type, Name, innerRef }) {
    return (
        <>

            <label htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 ">
                {label}
            </label>
            <div className="mt-2">
                <input
                    ref={innerRef}
                    id={Id}
                    name={Name}
                    type={type}
                    placeholder={placeholder}
                    required
                    className="block w-full bg-gray-100 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6
                    p-2 mb-6"
                />
            </div>
        </>
    )
}
