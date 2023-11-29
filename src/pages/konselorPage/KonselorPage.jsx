import React from 'react'

import CardKonselor from './CardKonselor'
import Title from './Title'

const KonselorPage = () => {
    return (
        <>
            <Title />
            <div className='flex flex-wrap justify-center'>
                <CardKonselor />
            </div>
        </>
    )
}

export default KonselorPage