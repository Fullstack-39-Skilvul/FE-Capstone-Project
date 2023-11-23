import React from 'react'
import Spesifikasi from './Spesifikasi'


const Card = () => {
    return (
        <>
            <div>
                <div className="p-4 mx-2 bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <h3 className='font-bold '>Cart Detail</h3>
                    <div className='flex w-full justify-between border-b border-gray-600'>
                        <p className=''>biaya</p>
                        <p className=''>Rp 150.000,00</p>
                    </div>
                    <div className='flex w-full justify-between border-b border-gray-600'>
                        <p className=''>biaya</p>
                        <p className=''>Rp 150.000,00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card