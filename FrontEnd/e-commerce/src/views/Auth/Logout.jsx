import React from 'react';
import { useStateContext } from '../../contexts/ContextsProvider';
import axiosClient from '../../axios';
import { TbLogout } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const { token, setUser, setToken } = useStateContext();
    const navigate = useNavigate();

    const onLogout = (ev) => {
        ev.preventDefault();
        axiosClient
            .post('/logout')
            .then(() => {
                setUser({});
                setToken(null);
            });
    };

    return (
        <div>
            {token ? (
                <button onClick={onLogout} className="focus:outline-none ">
                    <TbLogout className="h-8 w-8  text-gray-900 hover:text-red-500 duration-200" />
                </button>
            ) : (
                <button
                    className="bg-gray-900 hover:bg-gray-600 text-white font-semibold py-1 px-3 rounded-md focus:outline-none "
                    onClick={() => {
                        navigate('/login');
                    }}
                >
                    Login
                </button>
            )}
        </div>
    );
}
