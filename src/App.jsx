import React from 'react'
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();


  return (
    <main className='flex justify-center items-center w-full min-h-screen bg-black'>
      <div className='w-[350px] h-[300px] rounded-[20px] flex flex-col border-2 border-red-600 shadow-[0_0_10px_#ff0000,0_0_30px_#ff0000] gap-[22px] justify-center items-center mt-[10px] pt-[20px]'>
        <input className='w-[260px] h-[40px] rounded-[15px] pl-[20px] border-[4px] border-red-600 outline-0 text-white focus:text-red-600 focus:bg-gray-950 focus:border-[4px]
         focus:border-green-600 shadow-[0_0_10px_#ff0000,0_0_30px_#ff0000] focus:shadow-[0_0_10px_#00ff00,0_0_30px_#00ff00] font-bold capitalize placeholder:normal-case' 
          type="text" placeholder='username' />
        <input className='w-[260px] h-[40px] rounded-[15px] pl-[20px] border-[4px] border-red-600 outline-0 text-white focus:text-red-600 focus:bg-gray-950 focus:border-[4px]
         focus:border-green-600 shadow-[0_0_10px_#ff0000,0_0_30px_#ff0000] focus:shadow-[0_0_10px_#00ff00,0_0_30px_#00ff00] font-bold capitalize placeholder:normal-case' 
          type="password" placeholder='password' />
        <button className='w-[130px] h-[40px] text-red-600 border-[4px] border-red-600 rounded-[15px] shadow-[0_0_10px_#ff0000,0_0_30px_#ff0000] font-bold hover:text-yellow-400
         hover:border-yellow-400 hover:shadow-[0_0_10px_#ffff00,0_0_30px_#ffff00] transition-all ease-in active:text-green-600 active:border-green-600 
          active:shadow-[0_0_10px_#00ff00,0_0_30px_#00ff00]'> Submit </button>
      </div>
    </main>
  )
}
export default App