import React from 'react'

export default function Button({ buttonName, action }) {
    return (
        <div>
            <button
                onClick={action}
                type="submit"
                className='rounded-full bg-gray-800 w-1/3 p-3 m-3 hover:bg-cyan-800  font-serif font-bold text-white text-center'
            >
                {buttonName}
            </button>
        </div>
    )
}
