import { CalendarCheck } from '@phosphor-icons/react'
import { Calendar } from 'phosphor-react'
import React from 'react'

const Tanggal = () => {
    return (
        <>
            <div className='pr-2 border-b-2 border-r border-blue-700' style={{ boxShadow: '8px 9px 7px -3px rgba(0,0,0,0.1)', }}>
            <div className='bg-white pl-[1px] w-[26px] items-center rounded-md'>
                    <Calendar size={24} color="#1C79F2" weight="fill"/>
                </div>
                <h3 className='font-bold text-sm'>Tanggal</h3>
                <h5>25 November 2023</h5>
            </div>
        </>
    )
}

export default Tanggal