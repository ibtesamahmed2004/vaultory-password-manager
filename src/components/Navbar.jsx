import React from 'react'

function Navbar() {
    return (
        <nav className='bg-slate-600 text-white'>

            <div className="mycontainer justify-between items-center flex px-4 h-12 py-6">
                <div className='logo font-bold text-white text-2xl'>

                    <span className='text-green-600'> &lt; Vault</span>

                    ory
                    <span className='text-green-600'>/&gt;  </span>
                </div>

                {/* <ul>
                    <li className='flex gap-6'>
                        <a className='hover:font-bold' href='/'>Home</a>
                        <a className='hover:font-bold' href='#'>About</a>
                        <a className='hover:font-bold' href='#'>Contact</a>
                    </li>
                </ul> */}
                
                <button className='text-white bg-green-800 my-5 mx-2 rounded-full flex justify-between items-center ring-white'>
                    <img className='p-1 w-10' src='https://img.icons8.com/?size=100&id=12599&format=png&color=000000' alt='github logo' />
                    <span className='font-bold px-2'>Github</span>
                </button>
            </div>

        </nav>
    )
}

export default Navbar
