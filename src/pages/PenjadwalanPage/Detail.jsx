import React from 'react'
import Spesifikasi from './Spesifikasi'
import Waktu from './Components/Waktu'
import Tanggal from './Components/Tanggal'
import MediaSesi from './Components/MediaSesi'


const Detail = () => {
    return (
        <>
            <div >
                <div className="w-full flex-wrap p-2 pb-5 m-auto bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <div className='flex flex-wrap'>
                        <picture className="flex justify-start rounded">
                            <img className='rounded-full aspect-square mx-3 my-2 w-20 h-[78px] border border-[#0F2650]' src="https://picsum.photos/360/240" />
                        </picture>
                        <div className='flex flex-col mt-2'>
                            <h1 className="flex mx-3 font-bold text-xl">Olivia Davis, Psy.D.</h1>
                            <Spesifikasi />
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center flex-wrap md:flex-nowrap md:mx-10 gap-2 mb-3 mt-4 text-[12px] md:text-base sm:gap-2 md:justify-between'>
                            {/* <Waktu /> */}
                            {/* <Tanggal /> */}
                            <MediaSesi />
                        </div>
                    </div>
                    {/* <div>
                        <div className='flex justify-center md:mx-40 gap-2 mb-3 mt-3 text-[12px] md:text-base sm:gap-2 md:justify-between'>
                            <MediaSesi />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Detail