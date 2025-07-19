import React from 'react'

const Footer = () => {
  return (

    <div className = 'bg-slate-600 text-white flex flex-col justify-center items-center w-full'>
        <div className='logo font-bold text-white text-2xl'>

                    <span className='text-green-600'> &lt; Vault</span>

                    <span className='text-black'>ory</span>
                    <span className='text-green-600'>/&gt;  </span>
                </div>
    <div className='flex'>
      Created with <img className='w-7 justify-center items-center' mx-2  src='https://img.icons8.com/?size=100&id=DFU1kReSUccu&format=png&color=000000' height={30} width={30} alt=''></img>
        by Mohammad Ibtesam Ahmed
    </div>
    </div>
  )
}

export default Footer
