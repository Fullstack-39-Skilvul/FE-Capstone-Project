import React from 'react'
import Card from './Cart'
import Detail from './Detail'
import Title from './Title'

const PenjadwalanPage = () => {
  return (
    <>
    <Title />
      <div className='flex flex-wrap justify-center gap-2'>
        <div className='w-[300px] md:w-[450px] lg:w-[650px]'>
          <Detail />
        </div>
        <div className='w-[300px] md:w-[260px] text-sm md:text-base'>
          <Card />
        </div>
      </div>

    </>
  )
}

export default PenjadwalanPage