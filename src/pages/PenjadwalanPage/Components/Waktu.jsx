import { Clock } from '@phosphor-icons/react'
import React from 'react'

const Waktu = () => {
    return (
        <>
            <div>
                <Clock size={32} color='red'/>
                <h3>Waktu Konseling</h3>
                <h5>Pukul : 08.00 WIB</h5>
            </div>
        </>
    )
}

export default Waktu