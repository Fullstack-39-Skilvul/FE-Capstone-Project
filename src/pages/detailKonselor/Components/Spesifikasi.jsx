import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Spesifikasi = () => {
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
            <div className='flex justify-center flex-wrap my-4 gap-2 mx-3'>
            {
                    konselor ? (
                        konselor.spesialisasi.map((spesialisasi, index) => {
                            return (
                                <div className='flex' key={index}>
                                    <p className='rounded-2xl p-1 px-2 text-white font-bold text-xs bg-[#4898FF] hover:bg-blue-700'>{spesialisasi.namaSpesialisasi}</p>
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