import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Spesifikasi from './Spesifikasi'
import axios from 'axios'


const CardKonselor = () => {
    const { id } = useParams()

    const [konselor, setKonselor] = useState(null)

    // ambil data
    async function getKonselor() {
        try {
            const res = await axios.get('https://be-capstone-project.vercel.app/konselors/' + id, {
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
            <div>
                <div className="p-4 m-5 w-[240px] bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    {konselor ? (
                        <picture className="flex justify-center rounded">
                            <img className='rounded-full aspect-square mx-3 my-2 w-20 h-[78px] border border-[#0F2650]' src={konselor.avatar} />
                        </picture>
                    )
                        : <p>loading</p>
                    }


                    {konselor ? (
                        <div>
                            <h1 className="flex justify-center mt-4 mb-2 mx-3 font-bold text-lg">{konselor.nama}</h1>
                            <Spesifikasi />
                        </div>

                    )
                        : <p>loading</p>
                    }


                    

                </div>
            </div>
        </>
    )
}

export default CardKonselor