import React from 'react'
import { Link } from 'react-router-dom'

const CardKonselor = () => {
    return (
        <>
            <div>
                <div className="p-4 m-8 w-80 bg-[#F6F6F6] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <picture className="rounded">
                        <img className='rounded-full aspect-square mx-3 my-2 w-20 h-[78px] border border-[#0F2650]' src="https://picsum.photos/360/240" />
                    </picture>

                    <h1 className="mt-4 mb-2 mx-3 font-bold text-xl">Olivia Davis, Psy.D.</h1>
                    <div className='flex flex-wrap my-4 gap-2 mx-3'>
                        <div className='flex' >
                            <p className='rounded-2xl p-1 px-2 text-white font-bold text-sm' style={{ background: '#4898FF' }}>Konflik</p>
                        </div>
                        <div className='flex' >
                            <p className='rounded-2xl p-1 px-2 text-white font-bold text-sm' style={{ background: '#4898FF' }}>Komunikasi</p>
                        </div>
                        <div className='flex' >
                            <p className='rounded-2xl p-1 px-2 text-white font-bold text-sm' style={{ background: '#4898FF' }}>Depresi</p>
                        </div>
                        <div className='flex' >
                            <p className='rounded-2xl p-1 px-2 text-white font-bold text-sm' style={{ background: '#4898FF' }}>Keluarga</p>
                        </div>
                        <div className='flex' >
                            <p className='rounded-2xl p-1 px-2 text-white font-bold text-sm' style={{ background: '#4898FF' }}>Pendidikan</p>
                        </div>
                    </div>
                    <button className='flex justify-end w-full mt-6'>
                        <Link className='flex p-2 px-4 bg-[#063D82] text-white text-sm rounded-2xl' to={'/'}>Booking Now</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default CardKonselor