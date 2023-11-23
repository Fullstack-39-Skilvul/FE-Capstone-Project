import { CalendarCheck, PhoneCall } from '@phosphor-icons/react'
import React from 'react'

const MediaSesi = () => {
    return (
        <>
            <div className='pr-2 pb-2 border-b border-r border-[#0F2650]'>
                <PhoneCall size={25} />
                <h3>Waktu Konseling</h3>
                <h5>Pukul : 08.00 WIB</h5>
            </div>
            <div className='pr-2 border-b border-r border-[#0F2650]'>
                <CalendarCheck size={25}  />
                <h3>Waktu Konseling</h3>
                <h5>Pukul : 08.00 WIB</h5>
            </div>
        </>
    )
}

export default MediaSesi