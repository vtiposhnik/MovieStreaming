import { useState } from "react"
import { Dialog } from '@headlessui/react'
import { useCommonContext } from "../../context/MovieFetchContext"

export default function SignPage() {
    const { clicked, setClicked } = useCommonContext()

    const [switched, setSwitched] = useState(true)
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
                        {switched ? <div id="register" className="flex flex-col bg-gray-auth p-5 rounded-b-xl">
                            Register
                            <label htmlFor="email">Username: </label>
                            <input type="text" id="email" placeholder="Email..." className="border rounded-md" required />
                            <label htmlFor="email">Email: </label>
                            <input type="text" id="email" placeholder="Email..." className="border rounded-md" required />
                            <label htmlFor="password">Password: </label>
                            <input type="text" id="password" placeholder="Password..." className="border rounded-md" required />
                            <label htmlFor="password">Confirm password: </label>
                            <input type="text" id="password" placeholder="Password..." className="border rounded-md" required />
                        </div> : <></>}
                        {!switched ? <div id="login" className="flex flex-col bg-gray-auth p-5 rounded-b-xl">
                            Login
                            <label htmlFor="email">Username or Email: </label>
                            <input type="text" id="email" placeholder="Email..." className="border rounded-md" required />
                            <label htmlFor="password">Password: </label>
                            <input type="text" id="password" placeholder="Password..." className="border rounded-md" required />
                        </div> : <></>}
                </Dialog.Panel>
            </Dialog>
        </section>
    )
}
