import React, { useEffect, useState } from 'react'
import { useStateContext } from '../contexts/ContextsProvider'
import Navbar from '../components/Navbar/Navbar'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import axiosClient from '../axios';

export default function Users() {


    const [user, setUser] = useState({})
    const { token } = useStateContext(localStorage.getItem('ACCESS_TOKEN'))
    console.log('token', token)
    useEffect(() => {

        axiosClient.get('/user')
            .then((res) => {
                // console.log('res', res.data)
                setUser(res.data)
            }).catch((err) => {
                console.log('err', err)
            })

    }, [])

    return (
        <div>
            <Navbar />
            <div className="max-w-screen-lg mx-auto mt-8 p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-300">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Field
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Value
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    edit
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-zinc-200 divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Name</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                <td>
                                    <button type="button"
                                        className="px-4 p-2 m-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm ">
                                        edit
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">Email</td>
                                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                <td>
                                    <button type="button"
                                        className="px-4 p-2 m-2 rounded-md border border-transparent font-semibold bg-gray-500 text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all text-sm ">
                                        edit
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
