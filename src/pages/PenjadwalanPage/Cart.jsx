import React from 'react'
import Spesifikasi from './Spesifikasi'


const Card = () => {
    return (
        <>
            <div>
                <div className="p-4 m-5 w-[240px] bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <picture className="flex justify-center rounded">
                        <img className='rounded-full aspect-square mx-3 my-2 w-20 h-[78px] border border-[#0F2650]' src="https://picsum.photos/360/240" />
                    </picture>
                    <h1 className="flex justify-center mt-4 mb-2 mx-3 font-bold text-xl">Olivia Davis, Psy.D.</h1>
                   <Spesifikasi />
                   
                </div>
            </div>
        </>
    )
}

export default Card