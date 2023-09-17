import React, { createRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Text from "../../components/Text";
import Field from "../../components/Field";
import Button from "../../components/Button";
import axiosClient from "../../axios";
import { useStateContext } from "../../contexts/ContextsProvider";

function Login() {

    const emailRef = createRef();
    const passwordRef = createRef();
    const navigate = useNavigate();
    const { setUser, setToken } = useStateContext(localStorage.getItem('ACCESS_TOKEN'))
    const [errors, setError] = useState(null);
    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        // debugger;
        setError(null);
        console.log(payload);
        axiosClient.post('/login', payload).then(({ data }) => {
            setToken(data.access_token)
            setUser(data.user)
            console.log(data.access_token);
            localStorage.setItem('ACCESS_TOKEN', data.access_token)
            // console.log('Access Token:', data.access_token);
            // localStorage.setItem('ACCESS_TOKEN', data.access_token);

            navigate('/home');
        }).catch(err => {
            // debugger;

            const res = err.response;
            if (res && res.status === 422) {
                console.log(res.data.message);
                if (res.data.errors) {
                    setError(res.data.errors)
                } else {
                    setError({
                        email: [res.data.message]
                    });
                }

            }
        })

    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <Text text={'Sign in your account '} />

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" method="POST" >
                        {errors &&
                            <div className="alert">
                                {Object.keys(errors).map(key => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))
                                }
                            </div>
                        }

                        <div>
                            <Field
                                innerRef={emailRef}
                                label="Email address"
                                Id="email"
                                placeholder="Enter you email"
                                type="email"
                                Name="email"
                            />
                            <Field
                                innerRef={passwordRef}
                                label="Password"
                                Id="Password"
                                placeholder="Enter Password"
                                type="Password"
                                Name="Password"
                            />
                        </div>

                        <Button buttonName={'login'}
                            action={onSubmit}

                        />
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Don't hava an account?{' '}
                        <Link to='/register' className="text-indigo-700 font-bold">SignUp</Link>
                    </p>
                </div >
            </div >

        </>
    );
}

export default Login;