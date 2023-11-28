import React, { useEffect, useState } from 'react'
import Spesifikasi from './Spesifikasi'
import Waktu from './Components/Waktu'
import Tanggal from './Components/Tanggal'
import MediaSesi from './Components/MediaSesi'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const Detail = () => {
    const { id } = useParams()

    const [konselor, setKonselor] = useState(null)

    // ambil data
    async function getKonselor() {
        try {
            const res = await axios.get('https://nice-gold-indri-sari.cyclic.app/konselors/' + id, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMDY2NzMxfQ.d9ADnKK-sYhF1HvlfzF8mVdGfQPR9xb987m707OD-zM',
                }
            });

            setKonselor(res.data)
           
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
                <div className="w-full flex-wrap p-2 pb-5 m-auto bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <div className='flex flex-wrap'>
                    {konselor ? (
                            <picture className="flex justify-start rounded">
                                <img className='rounded-full aspect-square mx-3 my-2 w-20 h-[78px] border border-[#0F2650]' src={konselor.avatar} />
                            </picture>
                        )
                            : <p>loading</p>
                        }


                        {konselor ? (
                            <div className='flex flex-col mt-2'>
                                <h1 className="flex mx-3 mt-2 font-bold text-xl">{konselor.nama}</h1>
                                <Spesifikasi />
                            </div>
                        )
                            : <p>loading</p>
                        }
                    </div>
                    <div>
                        <div className='flex justify-center flex-wrap md:flex-nowrap md:mx-8 gap-2 mb-3 mt-4 text-[12px] md:text-base sm:gap-2 md:justify-between'>
                           
                            <MediaSesi />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail