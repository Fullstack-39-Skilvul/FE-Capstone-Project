import React from 'react'
import Spesifikasi from './Spesifikasi'
import Waktu from './Components/Waktu'
import Tanggal from './Components/Tanggal'
import MediaSesi from './Components/MediaSesi'


const Detail = () => {
    return (
        <>
            <div >
                <div className="max-sm:w-auto max-md:w-auto w-full flex-wrap p-8 m-5 md:w-[761px] bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <div className='flex flex-wrap'>
                        <picture className="flex justify-start rounded">
                            <img className='rounded-full aspect-square mx-3 my-2 w-20 h-[78px] border border-[#0F2650]' src="https://picsum.photos/360/240" />
                        </picture>
                        <div className='flex flex-col align-middle'>
                            <h1 className="flex mx-3 font-bold text-xl">Olivia Davis, Psy.D.</h1>
                            <Spesifikasi />
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <Waktu />
                            <Tanggal />
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <MediaSesi />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail