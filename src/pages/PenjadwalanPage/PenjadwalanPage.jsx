import React from 'react'
import Card from './Cart'
import Detail from './Detail'
import Title from './Title'

const PenjadwalanPage = () => {
  return (
    <>
      <Title />
      <div>
        <div className='flex mx-4 mb-7 w-[600px] md:w-[710] justify-center  '>
          <p className='flex justify-center w-44 bg-[#0F2650] hover:bg-blue-600 text-white font-bold text-base rounded-2xl mt-5 py-2'>Konseling Online</p>
        </div>
      </div>
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