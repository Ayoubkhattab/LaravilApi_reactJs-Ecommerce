import React from 'react'
import { Link } from 'react-router-dom'
export default function LogoNavbar() {



    return (


        <Link to={'/home'}>
            <button className="text-lg font-semibold tracking-widest text-textColor uppercase rounded-lg  ">
                Store
            </button>
        </Link>

    )
}
