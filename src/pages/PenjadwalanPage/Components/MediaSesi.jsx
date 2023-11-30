import { CalendarCheck, PhoneCall } from '@phosphor-icons/react'
import axios from 'axios'
import { format } from 'date-fns'
import { Calendar, Clock, MapPinLine } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MediaSesi = () => {
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
            console.log(res.data);
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
            <div className='pr-4 pl-2 pb-2 border-b-2 border-r border-blue-700' style={{ boxShadow: '8px 9px 7px -3px rgba(0,0,0,0.1)', }}>
                <div className='bg-white pl-[1px] w-[25px] items-center rounded-md'>
                    <Clock size={24} color="#1C79F2" weight="fill" />
                </div>
                <h3 className='font-bold text-sm'>Waktu Konseling</h3>
                <h5>{booking ? 'Pukul ' + booking.waktu + ' WIB' : "loading..."}</h5>
            </div>
            <div className='pr-4 pl-2 border-b-2 border-r border-blue-700' style={{ boxShadow: '8px 9px 7px -3px rgba(0,0,0,0.1)', }}>
                <div className='bg-white pl-[1px] w-[26px] items-center rounded-md'>
                    <MapPinLine size={24} color="#1C79F2" weight="fill" />
                </div>
                <h3 className='font-bold text-sm'>Tempat</h3>
                <h5>{booking ? booking.jenisKonseling.platformPertemuan : "loading..."}</h5>
            </div>
            <div className='pr-4 pl-2 border-b-2 border-r border-blue-700' style={{ boxShadow: '8px 9px 7px -3px rgba(0,0,0,0.1)', }}>
                <div className='bg-white pl-[1px] w-[26px] items-center rounded-md'>
                    <Calendar size={24} color="#1C79F2" weight="fill" />
                </div>
                <h3 className='font-bold text-sm'>Tanggal</h3>
                <h5>{booking ? format(new Date(booking.tanggal), 'dd MMMM yyyy') : "loading..."}</h5>
            </div>
            <div className='pr-4 pl-2 border-b-2 border-r border-blue-700' style={{ boxShadow: '8px 9px 7px -3px rgba(0,0,0,0.1)', }}>
                <div className='bg-white pl-[1px] w-[26px] items-center rounded-md'>
                    <CalendarCheck size={24} color="#1C79F2" weight="fill" />
                </div>
                <h3 className='font-bold text-sm'>Durasi</h3>
                <h5>45 Menit</h5>
            </div>
        </>
    )
}

export default MediaSesi