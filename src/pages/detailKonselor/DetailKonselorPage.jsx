import React from 'react'
import Title from './Title'
import ProfilCard from './ProfilCard'
import BiodataCard from './BiodataCard'

const DetailKonselorPage = () => {
    return (
        <>
            <Title />
            <div className='flex flex-wrap justify-center'>
                <ProfilCard />
                <BiodataCard />
            </div>
        </>
    )
}

export default DetailKonselorPage