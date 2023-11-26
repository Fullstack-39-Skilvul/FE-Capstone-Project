import React from 'react'


const Card = () => {
    return (
        <>
            <div>
                <div className="p-4 mx-2 w-72 bg-[#0F2650] shadow-gray-300  rounded-2xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <h3 className='font-bold text-white text-lg mr-3 mb-7'>Cart Detail</h3>
                    <div className='flex mx-2'>
                        <div className='flex w-full text-sm text-white justify-between border-b border-gray-600'>
                            <p className=''>Biaya Konseling</p>
                            <p className=''>Rp 150.000,00</p>
                        </div>

                    </div>
                    <div className='flex justify-end my-7 mx-2'>
                        <div className='flex w-2/3 justify-between border-b gap-2 border-gray-600'>
                            <p className='text-white text-sm'>Total</p>
                            <p className='text-white text-sm'>Rp 150.000,00</p>
                        </div>

                    </div>
                    <div className='flex mx-4 my-3'>
                        <button className='bg-[#42A7FF] hover:bg-blue-600 text-white font-bold text-base rounded-2xl w-full mt-5 py-2'>Checkout</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card