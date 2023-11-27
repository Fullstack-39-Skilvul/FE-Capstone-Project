import axios from 'axios';
import React, { useEffect } from 'react'

const Spesifikasi = () => {
    async function getUser() {
        try {
            const res = await axios.get('https://nice-gold-indri-sari.cyclic.app/konselors/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMDY2NzMxfQ.d9ADnKK-sYhF1HvlfzF8mVdGfQPR9xb987m707OD-zM',
                }
            });
            console.log(res.data);
            // const response = await axios.get('https://nice-gold-indri-sari.cyclic.app/spesialisasis/');
            // console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUser();
    }
        , []);
    return (
        <>
            <div className='flex justify-center flex-wrap my-2 gap-2 mx-3'>
                <div className='flex' >
                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>Konflik</p>
                </div>
                <div className='flex' >
                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>Komunikasi</p>
                </div>
                <div className='flex' >
                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>Depresi</p>
                </div>
                <div className='flex' >
                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>Keluarga</p>
                </div>
                <div className='flex' >
                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>Pendidikan</p>
                </div>
            </div>
        </>
    )
}

export default Spesifikasi