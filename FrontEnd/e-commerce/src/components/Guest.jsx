import React from 'react'
import { Outlet } from 'react-router-dom'
// import { useStateContext } from '../contexts/ContextsProvider'

export default function Guest() {

    // const { token } = useStateContext();
    // debugger;

    // if (token) {
    //     return <Navigate to='/home' />
    // }

    return (
        <div>
            <Outlet />
        </div>
    )
}
