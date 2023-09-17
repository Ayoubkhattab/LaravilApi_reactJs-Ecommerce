import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextsProvider'

export default function Default() {

    const { token } = useStateContext();

    if (!token) {
        return <Navigate to='/login' />
    }
    // const onLogout = ev => {
    //     ev.preventDefault()

    //     axiosClient.post('/logout')
    //         .then(() => {
    //             setUser({})
    //             setToken(null)
    //         })
    // }

    // console.log(user);
    return (
        <div>
            <aside>
                <Link to='/users' ></Link>
                <Link to='/category' ></Link>
                <Link to='/home' ></Link>
            </aside>

            <main>
                <Outlet />
            </main>
        </div>
    )
}
