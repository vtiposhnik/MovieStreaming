import { useState } from "react"
import { Dialog } from '@headlessui/react'
import { useCommonContext } from "../../context/MovieFetchContext"
import { Button } from "../../util/utilComps"
import { authFetch } from "../../util/constants"
import { useForm } from "react-hook-form"

interface SubmitProps {
    password: string
    passwordReg: string
    passwordConfirm: string
    email: string
    emailReg: string
}

export default function SignPage() {
    const { clicked, setClicked } = useCommonContext()

    const [switched, setSwitched] = useState(false)
    const [bgLog, setBgLog] = useState('gray')
    const [bgReg, setBgReg] = useState('white')

    function handleClick(e: React.MouseEvent<HTMLSpanElement>) {
        if (e.currentTarget.id === 'login') {
            setSwitched(false)
            setBgLog('gray')
            setBgReg('white')
        } else {
            setSwitched(true)
            setBgReg('gray')
            setBgLog('white')
        }
    }

    return (
        <section className="pt-[5rem] ">
            {clicked ? <div className="backdrop-blur z-[5]"></div> : <></>}

            <Dialog open={clicked} onClose={() => setClicked(false)}>
                <Dialog.Panel className="w-[30%] fixed inset-y-[30vh] left-[35vw] z-10">
                    <div className="switcher grid grid-cols-2 ">
                        <span onClick={handleClick} id="login" style={{ backgroundColor: bgLog }} >Login</span>
                        <span onClick={handleClick} id="register" style={{ backgroundColor: bgReg }}>Register</span>
                    </div>

                    {!switched ? <Login /> : <Register />}

                </Dialog.Panel>
            </Dialog>
        </section>
    )
}


function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const method = 'POST'
        const auth = 'login'
        authFetch({data, method, auth})
    };

    return (
        <div id="login" >
            <form action="" className="flex flex-col bg-gray-auth p-5 rounded-b-xl" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" placeholder="Email..." className="border rounded-md" required
                    {...register(('email'), {
                        maxLength: 60,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Invalid Email!"
                        }
                    })} />
                {errors.email && (<span className="error"> {errors.email.message} </span>)}

                <label htmlFor="password">Password: </label>
                <input type="text" id="password" placeholder="Password..." className="border rounded-md" required
                    {...register('password', {
                        maxLength: 60,
                        validate: {
                            matchPattern: (value) =>
                                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)/.test(
                                    value
                                ),
                            minLength: (value) => value.length > 6
                        }
                    })} />
                {errors.password?.type === 'matchPattern' && <span className="error"> Password should contain at least one uppercase letter, lowercase
                    letter, digit, and special symbol.</span>}
                {errors.password?.type === 'minLength' && <span className="error"> Password should be at least 6 characters!</span>}
                <button type="submit" className="border cursor-pointer text-center rounded-lg py-2 px-4 hover:bg-blue transition w-[50%] mt-[1rem]"> Submit</button>
            </form>
        </div>)
}

function Register() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    const password = watch('passwordReg', '')

    const onSubmit = (data) => {
        console.log(data);
        const method = 'POST'
        const auth = 'register'
        authFetch({data, method, auth})
    };


    return (
        <div id="register">
            <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-gray-auth p-5 rounded-b-xl">
                <label htmlFor="email">Username: </label>
                <input type="text" placeholder="Username..." className="border rounded-md" required
                {...register('username', {
                    maxLength: 40
                })}
                />

                <label htmlFor="email">Email: </label>
                <input type="text" id="email" placeholder="Email..." className="border rounded-md"
                    {...register(('emailReg'), {
                        maxLength: 60,
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                    })} />
                {errors.emailReg && <span className="error"> Invalid Email! </span>}

                <label htmlFor="password">Password: </label>
                <input type="text" id="password" placeholder="Password..." className="border rounded-md"
                    {...register('passwordReg', {
                        maxLength: 60,
                        validate: {
                            matchPattern: (value) =>
                                /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)/.test(
                                    value
                                ),
                            minLength: (value) => value.length > 6
                        }
                    })} />
                    {errors.passwordReg?.type === 'matchPattern' && <span className="error"> Password should contain at least one uppercase letter, lowercase
                        letter, digit, and special symbol.</span>}
                    {errors.passwordReg?.type === 'minLength' && <span className="error"> Password should be at least 6 characters!</span>}

                <label htmlFor="password">Confirm password: </label>
                <input type="password" placeholder="Password..." className="border rounded-md" required
                    {...register(('passwordConfirm'), {
                        maxLength: 60,
                        minLength: {
                            value: 6,
                            message: "Password should be at least 6 characters!"
                        },
                        validate: (value) => value === password || "Passwords do not match!"
                    })} />
                {errors.passwordConfirm && <span className="error"> {errors.passwordConfirm.message} </span>}

                <button type="submit" className="border cursor-pointer text-center rounded-lg py-2 px-4 hover:bg-blue transition w-[50%] mt-[1rem]"> Submit</button>
            </form>
        </div>)
}