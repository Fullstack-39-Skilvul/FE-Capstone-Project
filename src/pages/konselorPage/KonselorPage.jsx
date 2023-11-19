import React from 'react'

import CardKonselor from './CardKonselor'

const KonselorPage = () => {
    return (
        <>
            <header className='mt-14 mb-6'>
                <div className='flex gap-2 justify-center w-full'>
                    <h1 className='font-bold text-[#0F2650] text-4xl'>
                        Profesional
                    </h1>
                    <h1 className='font-bold text-[#1C79F2] text-4xl'>
                        Konselor
                    </h1>
                </div>
                <p className='flex justify-center w-full'>
                    Temukan Paket Konseling yang Tepat untuk Mendukung Kesehatan Mental dan Kesejahteraan Anda
                </p>
            </header>
            <div className='flex flex-wrap justify-center'>
                <CardKonselor />
                <CardKonselor />
                <CardKonselor />
                <CardKonselor />
                <CardKonselor />
                <CardKonselor />
            </div>
        </>
    )
}

export default KonselorPage