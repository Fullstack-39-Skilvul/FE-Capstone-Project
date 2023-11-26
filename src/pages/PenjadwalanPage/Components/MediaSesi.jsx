import { CalendarCheck, PhoneCall } from '@phosphor-icons/react'
import { Calendar, Clock, MapPinLine } from 'phosphor-react'
import React from 'react'

const MediaSesi = () => {
    return (
        <>
            <div className='pr-4 pl-2 pb-2 border-b-2 border-r border-blue-700' style={{ boxShadow: '8px 9px 7px -3px rgba(0,0,0,0.1)', }}>
                <div className='bg-white pl-[1px] w-[25px] items-center rounded-md'>
                    <Clock size={24} color="#1C79F2" weight="fill" />
                </div>
                <h3 className='font-bold text-sm'>Waktu Konseling</h3>
                <h5>Pukul : 08.00 WIB</h5>
            </div>
            <div className='pr-4 pl-2 border-b-2 border-r border-blue-700' style={{ boxShadow: '8px 9px 7px -3px rgba(0,0,0,0.1)', }}>
                <div className='bg-white pl-[1px] w-[26px] items-center rounded-md'>
                    <MapPinLine size={24} color="#1C79F2" weight="fill" />
                </div>
                <h3 className='font-bold text-sm'>Tempat</h3>
                <h5>Online Meet</h5>
            </div>
            <div className='pr-4 pl-2 border-b-2 border-r border-blue-700' style={{ boxShadow: '8px 9px 7px -3px rgba(0,0,0,0.1)', }}>
                <div className='bg-white pl-[1px] w-[26px] items-center rounded-md'>
                    <Calendar size={24} color="#1C79F2" weight="fill" />
                </div>
                <h3 className='font-bold text-sm'>Tanggal</h3>
                <h5>25 November 2023</h5>
            </div>
            <div className='pr-4 pl-2 border-b-2 border-r border-blue-700' style={{ boxShadow: '8px 9px 7px -3px rgba(0,0,0,0.1)', }}>
                <div className='bg-white pl-[1px] w-[26px] items-center rounded-md'>
                    <CalendarCheck size={24} color="#1C79F2" weight="fill" />
                </div>
                <h3 className='font-bold text-sm'>Durasi</h3>
                <h5>45 Menit</h5>
            </div>
        </>
    )
}

export default MediaSesi