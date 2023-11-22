import React from 'react'
import Spesifikasi from './Spesifikasi'
import Waktu from './Components/Waktu'


const Detail = () => {
    return (
        <>
            <div >
                <div className="max-sm:w-auto max-md:w-auto w-full flex-wrap p-8 m-5 md:w-[761px] bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <div className='flex'>
                        <picture className="flex justify-start rounded">
                            <img className='rounded-full aspect-square mx-3 my-2 w-20 h-[78px] border border-[#0F2650]' src="https://picsum.photos/360/240" />
                        </picture>
                        <h1 className="flex justify-center mt-4 mb-2 mx-3 font-bold text-xl">Olivia Davis, Psy.D.</h1>
                    </div>
                    <Spesifikasi />
                </div>
                <div>
                    <div className='flex justify-center'>
                        <Waktu />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail