import { Clock } from '@phosphor-icons/react'
import React from 'react'

const Waktu = () => {
    return (
        <>
            <div className='pr-2 border-b-2 border-r border-blue-700' style={{ boxShadow: '8px 9px 7px -3px rgba(0,0,0,0.1)', }}>
                <div className='bg-white pl-[1px] w-[25px] items-center rounded-md'>
                    <Clock size={24} color="#1C79F2" weight="fill"/>
                </div>
                <h3 className='font-bold text-sm'>Waktu Konseling</h3>
                <h5>Pukul : 08.00 WIB</h5>
            </div>
        </>
    )
}

export default Waktu