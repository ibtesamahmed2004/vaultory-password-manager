import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");

        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }

    }, [])

    const copyText = (text) => {

        toast('Copied to clickboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });



        navigator.clipboard.writeText(text)
    }


    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)

        if (ref.current.src.includes("https://img.icons8.com/?size=100&id=60022&format=png&color=000000")) {


            ref.current.src = "https://img.icons8.com/?size=100&id=22021&format=png&color=000000"
            passwordRef.current.type = "text"

        }

        else {
            ref.current.src = "https://img.icons8.com/?size=100&id=60022&format=png&color=000000"
            passwordRef.current.type = "password"
        }



    }


    const savePassword = () => {

        if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {




            setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
            localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
            console.log([...passwordArray, form])
            setForm({ site: "", username: "", password: ""})
    
            toast('Password saved!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        else {
            toast('Error: Password not saved!');
        }


    }


    const deletePassword = (id) => {
        console.log("Deleting password with id ", id)

        let c = confirm("Do you really want to delete this password?")
        
        if(c) {
            setPasswordArray(passwordArray.filter(item=>item.id!==id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
            toast('Password Deleted Successfully!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        }
        // setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
        // localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
        // console.log([...passwordArray, form])
    }


    const editPassword = (id) => {


        console.log("Editing password with id ", id)
        setForm(passwordArray.filter(i=>i.id===id)[0])
        setPasswordArray(passwordArray.filter(item=>item.id!==id))
        // setPasswordArray([...passwordArray, {...form, id: uuidv4()}])
        // localStorage.setItem("password", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
        // console.log([...passwordArray, form])
    }


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }



    return (

        <>

            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />


            <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div className="p-2 md:p-0 mycontainer min-h-[84.7vh]">

                <h1 className='text-4xl font-bold text-center'><span className='text-green-600'> &lt; Vault</span>

                    ory
                    <span className='text-green-600'>/&gt;  </span></h1>
                <p className='text-green-800 text-lg text-center m-2'>Your Personal Digital Vault</p>


                <div className='flex flex-col p-4 text-black gap-4 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-green-400 w-full p-4 py-0.5' type='text' name='site' id='site' />
                    <div className='flex flex-col md:flex-row w-full justify-between gap-4'>
                        <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full border border-green-400 w-full p-4 py-0.5' type='text' name='username' id='username' />
                        <div className='relative'>
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-400 w-full p-4 py-0.5' type='password' name='password' id='password' />
                            <span className='absolute right-0 cursor-pointer size-9.5' onClick={showPassword}>
                                <img ref={ref} className='m-1 ml-2' src="https://img.icons8.com/?size=100&id=60022&format=png&color=000000" width={24} alt="" /> </span>


                        </div>
                    </div>



                    <button onClick={savePassword} className='flex justify-center items-center m-4 bg-green-500 cursor-pointer hover:bg-green-300 gap-2 rounded-full px-8  py-2 w-fit border border-green-800'>
                        <lord-icon
                            src="https://cdn.lordicon.com/mfdeeuho.json"
                            trigger="hover"
                            stroke="bold"
                            state="hover-swirl"
                            colors="primary:#000000,secondary:#242424">
                        </lord-icon>
                        Save Password</button>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-3' >Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No passwords yo show </div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-600 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>Username</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>

                                </tr>
                            </thead>
                            <tbody className='bg-green-200'>
                                {passwordArray.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className='py-2 border-green-300 text-center'>

                                                <div className='flex items-center justify-center'>

                                                    <a href={item.site} target='_blank'>{item.site}</a>


                                                    <div className='lordiconcopy size-8 cursor-pointer m-1' onClick={() => { copyText(item.site) }}>
                                                        <img src='https://img.icons8.com/?size=100&id=89427&format=png&color=000000' width={28} height={28} paddingTop={3} paddingLeft={2} alt='copy' />
                                                    </div>
                                                </div>

                                            </td>
                                            <td className='py-2 border-green-300 text-center'>
                                                <div className='flex items-center justify-center'>
                                                    <span>{item.username}</span>
                                                    <div className='lordiconcopy size-8 cursor-pointer m-1' onClick={() => { copyText(item.username) }}>
                                                        <img src='https://img.icons8.com/?size=100&id=89427&format=png&color=000000' width={28} height={28} paddingTop={3} paddingLeft={2} alt='copy' />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className=' py-2 border-green-300 text-center flex items-center justify-center'> <span>{item.password}</span>
                                                <div className='lordiconcopy size-8 cursor-pointer m-1 ' onClick={() => { copyText(item.password) }}>
                                                    <img src='https://img.icons8.com/?size=100&id=89427&format=png&color=000000' width={28} height={28} paddingTop={3} paddingLeft={2} alt='copy' />
                                                </div>
                                            </td>

                                            <td className=' py-2 border-green-300 text-center'>
                                                <span className='cursor-pointer mx-1' onClick={() => {editPassword(item.id)}}>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/exymduqj.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        colors="primary:#242424,secondary:#08a88a"
                                                    >
                                                    </lord-icon>
                                                </span>
                                                <span className='cursor-pointer mx-1' onClick={() => {deletePassword(item.id)}}>
                                                    <script src="https://cdn.lordicon.com/lordicon.js"></script>
                                                    <lord-icon
                                                        src="https://cdn.lordicon.com/jzinekkv.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        colors="primary:#242424,secondary:#08a88a"
                                                        >
                                                    </lord-icon>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>}
                </div>

            </div>

        </>


    )
}

export default Manager
