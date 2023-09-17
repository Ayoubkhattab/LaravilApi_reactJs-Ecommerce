import React from 'react'
export default function MenuButton({ open }) {

    return (
        <div className='flex items-center'>

            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                <path
                    style={{
                        display: { open } ? 'none' : 'block'
                    }}
                    fillRule="evenodd "
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z  "
                    clipRule="evenodd"
                ></path>
                <path
                    style={{ display: { open } ? 'block' : 'none' }}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                ></path>
            </svg>
        </div>
    )
}
