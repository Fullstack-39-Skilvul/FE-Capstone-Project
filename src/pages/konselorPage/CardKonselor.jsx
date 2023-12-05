import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spesifikasi from './Spesifikasi'
import axios from 'axios'

const CardKonselor = () => {

    const [konselor, setKonselor] = useState(null);
    const token = localStorage.getItem(`token`) || null;

    // ambil data
    async function getKonselor() {
        try {
            const res = await axios.get('https://be-capstone-project.vercel.app/konselors/', {
                headers: {
                    // 'Content-Type': 'application/json',
                    'Authorization': 'token ' + token,
                }
            });

            setKonselor(res.data.data)


            // return res.data;
            // const response = await axios.get('https://nice-gold-indri-sari.cyclic.app/spesialisasis/');
            console.log(res);
        } catch (error) {
            console.error(error);
            // return error
        }
    }

    // console.log(token);
    

    useEffect(() => {
        getKonselor();
    }, []);
    return (
        <>

            <div className='flex flex-wrap justify-center'>
                {
                    konselor ? (
                        konselor.map((item) => {
                            return (
                                // <Link to={'/detailkonselor/'+ item._id}>
                                    <div key={item._id} className="p-4 m-8 w-80 bg-[#F6F6F6] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                                        <picture className="rounded">
                                            <img className='rounded-full aspect-square mx-3 my-2 w-20 h-[78px] border border-[#0F2650]' src={item.avatar} />
                                        </picture>
                                        <h1 className="mt-4 mb-2 mx-3 font-bold text-xl">{item.nama}</h1>
                                        <Spesifikasi data={item.spesialisasi} />
                                        <button className='flex justify-end w-full mt-6'>
                                            <Link to={'/detailkonselor/'+ item._id} className='flex p-2 px-4 bg-[#063D82] hover:bg-blue-700 hover:border-b hover:border-[#063D82] text-white text-sm rounded-2xl' >Booking Now</Link>
                                        </button>
                                    </div>
                                // </Link>
                            )
                        })
                    )
                        : <p>loading</p>
                }
            </div>
        </>
    )
}

export default CardKonselor