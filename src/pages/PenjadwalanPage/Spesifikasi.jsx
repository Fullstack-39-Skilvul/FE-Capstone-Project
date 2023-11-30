import axios from 'axios';
// import { get } from 'http';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Spesifikasi = () => {
    const { idbooking } = useParams()

    const [booking, setBooking] = useState(null)

    // ambil data
    async function getBooking() {
        try {
            const res = await axios.get('https://be-capstone-project.vercel.app/bookings/' + idbooking, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMDY2NzMxfQ.d9ADnKK-sYhF1HvlfzF8mVdGfQPR9xb987m707OD-zM',
                }
            });
  
            setBooking(res.data)
            // console.log(res.data);
        } catch (error) {
            console.error(error);
            // return error
        }
    }

    useEffect(() => {
        getBooking();
    }, []);

    return (
        <>
            <div className='flex flex-wrap my-2 gap-2 mx-3'>
            {
                    booking ? (
                        booking.konselor.spesialisasi.map((item) => {
                            return (
                                <div className='flex' key={item._id}>
                                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>{item.namaSpesialisasi}</p>
                                </div>
                            )
                        })
                    )
                        : <p>loading</p>
                }
            </div>
        </>
    )
}

export default Spesifikasi