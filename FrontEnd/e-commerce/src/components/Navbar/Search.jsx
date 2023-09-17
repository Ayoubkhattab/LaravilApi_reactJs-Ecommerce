import React from 'react'
import { FaSistrix } from 'react-icons/fa'

export default function Search() {
    return (
        <>
            <div >
                <div className="flex items-center mx-auto bg-white rounded-lg " x-data="{ search: '' }">
                    <div className="w-full">
                        <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-l-lg focus:outline-none ring-1 ring-inset bg-white
                         ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600
                        "
                            placeholder="search" x-model="search" />
                    </div>
                    <div>
                        <button type="submit" className="flex items-center bg-gray-500 justify-center w-10 h-8 text-white rounded-r-lg
                         hover:bg-gray-600 duration-200"
                        >
                            <FaSistrix />
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
