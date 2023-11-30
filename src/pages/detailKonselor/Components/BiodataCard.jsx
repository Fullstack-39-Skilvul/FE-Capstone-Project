import React, { useEffect, useState } from 'react'
import Spesifikasi from './Spesifikasi'
import { Link, useParams } from 'react-router-dom'
import JamKonseling from './JamKonseling'
import axios from 'axios'
// import DateKonselor from './DateKonselor'

const BiodataCard = () => {
    const { id } = useParams();

    const [jam, setJam] = useState('')
    const [tanggal, setTanggal] = useState('')
    const [konselor, setKonselor] = useState(null);
    const [bookingId, setBookingId] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault()
        console.log({
            jam: jam,
            tanggal: tanggal
        })
        console.log(
            {
            tanggal: tanggal,//new Date().toISOString().split('T')[0], // Tanggal saat ini, Anda bisa mengganti sesuai kebutuhan
            waktu: jam,
            pasien: "65640d96223d7d39596ad5d2", // Ganti dengan id pasien yang sesuai
            konselor: id, // Ganti dengan id konselor yang sesuai
            jenisKonseling: "6561b726b0edf6551d1a3c44", // Ganti dengan id jenis konseling yang sesuai
        })
        submitbutton()
    }
    const submitbutton = async () => {

        try {
            // Persiapkan data booking yang sesuai
            const bookingData = {
                tanggal: tanggal,//new Date().toISOString().split('T')[0], // Tanggal saat ini, Anda bisa mengganti sesuai kebutuhan
                waktu: jam,
                pasien: "65640d96223d7d39596ad5d2", // Ganti dengan id pasien yang sesuai
                konselor: id, // Ganti dengan id konselor yang sesuai
                jenisKonseling: "6561b726b0edf6551d1a3c44", // Ganti dengan id jenis konseling yang sesuai
            };

            // Ganti URL endpoint sesuai kebutuhan Anda
            const res = await axios.post(
                `https://be-capstone-project.vercel.app/bookings/`,
                bookingData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':
                            'token ' +
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMDY2NzMxfQ.d9ADnKK-sYhF1HvlfzF8mVdGfQPR9xb987m707OD-zM',
                    },
                }
            );

            console.log('Data berhasil ditambahkan:', res.data);
            // setBookingId(res.data._id);
        } catch (error) {
            console.error('Error saat menambahkan data:', error.message);
            // setBookingId(null);
        } 
    };

    // ambil data konselor
    async function getKonselor() {
        try {
            const res = await axios.get(
                `https://be-capstone-project.vercel.app/konselors/` + id,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization':
                            'token ' +
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMDY2NzMxfQ.d9ADnKK-sYhF1HvlfzF8mVdGfQPR9xb987m707OD-zM',
                    },
                }
            );

            setKonselor(res.data);
        } catch (error) {
            console.error(error);
            // return error
        }
    }

    useEffect(() => {
        getKonselor();
    }, []);
    return (
        <>
            <div >
                <div className="flex max-sm:w-auto max-md:w-auto w-full flex-wrap p-8 m-5 md:w-[761px] bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <p className=" mb-6 mx-3 text-sm w-full ">
                    {konselor ? konselor.bio : 'Loading...'}
                    </p>
                    <p className='flex w-full mb-4 justify-center text-center rounded-3xl bg-[#ffdb38cd] font-bold text-md px-8 py-4'>
                    {konselor ? konselor.motivasi : 'Loading...'}
                    </p>
                    <div className='flex justify-center w-full gap-3'>
                        <JamKonseling tanggal={tanggal} setJam={setJam} jam={jam} setTanggal={setTanggal} />
                        {/* <DateKonselor /> */}
                    </div>

                    <button className='flex justify-end w-full mt-6'>
                        <Link className='flex p-2 px-4 bg-[#063D82] hover:bg-blue-700 hover:border-b hover:border-[#063D82] text-white text-sm rounded-2xl' to={'/booking'} onClick={submitHandler}>Booking Now</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BiodataCard