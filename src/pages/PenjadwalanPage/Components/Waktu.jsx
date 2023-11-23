import { Clock } from '@phosphor-icons/react'
import React from 'react'

const Waktu = () => {
    return (
        <>
            <div className='pr-2 border-b border-r border-[#0F2650]'>
                <Clock size={25} />
                <h3>Waktu Konseling</h3>
                <h5>Pukul : 08.00 WIB</h5>
            </div>
        </>
    )
}

export default Waktu