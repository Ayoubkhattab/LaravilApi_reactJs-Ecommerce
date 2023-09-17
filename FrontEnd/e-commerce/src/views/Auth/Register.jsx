import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Field from '../../components/Field'
import Text from '../../components/Text'
import Button from '../../components/Button'
import axiosClient from '../../axios'
import { useStateContext } from '../../contexts/ContextsProvider'
export default function Register() {

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();

    const { setUser, setToken } = useStateContext()
    const [errors, setError] = useState(null);
    // const navigate = useNavigate();

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(payload);
        axiosClient.post('/register', payload)
            .then(({ data }) => {
                // debugger;
                setToken(data.token)
                setUser(data.user);
                // navigate('/home');
                console.log(localStorage);
            }).catch(err => {
                // console.log(err);
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
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8
             ">
                <Text text={'Creat a new account'} />

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6 rounded-md p-4 " onSubmit={onSubmit} method='POST'  >
                        {errors &&
                            <div className="alert">
                                {Object.keys(errors).map(key => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))}
                            </div>
                        }
                        <div >
                            <Field
                                innerRef={nameRef}
                                label="Name"
                                Id="text"
                                placeholder="Enter you name"
                                type="text"
                                Name="text"
                            />
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
                        <div>

                            <Button buttonName={"Sign Up"}
                                action={onSubmit}
                            />

                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        you hava an account?{' '}
                        <Link to='/login' className=" text-indigo-700 font-bold">login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
