import axios from 'axios';
import React, { useEffect } from 'react'

const Spesifikasi = () => {
    
    return (
        <>
            <div className='flex justify-center flex-wrap my-2 gap-2 mx-3'>
                <div className='flex' >
                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>Konflik</p>
                </div>
                <div className='flex' >
                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>Komunikasi</p>
                </div>
                <div className='flex' >
                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>Depresi</p>
                </div>
                <div className='flex' >
                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>Keluarga</p>
                </div>
                <div className='flex' >
                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>Pendidikan</p>
                </div>
            </div>
        </>
    )
}

export default Spesifikasi