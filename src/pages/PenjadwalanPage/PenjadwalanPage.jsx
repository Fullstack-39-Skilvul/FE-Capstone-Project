import React, { useEffect, useState } from 'react'
import Card from './Cart'
import Detail from './Detail'
import Title from './Title'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PenjadwalanPage = () => {
  const { id, idbooking, idjenis } = useParams()

    
    const [jenisKonseling, setJenisKonselor] = useState(null)
    const [konselor, setKonselor] = useState(null)
    const [booking, setBooking] = useState(null)


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
  }async function getJenisKonseling() {
    try {
        const res = await axios.get('https://be-capstone-project.vercel.app/jenisKonselings/' + idjenis, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'token ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMDY2NzMxfQ.d9ADnKK-sYhF1HvlfzF8mVdGfQPR9xb987m707OD-zM',
            }
        });

        setJenisKonselor(res.data)

    } catch (error) {
        console.error(error);
        // return error
    }
}

    

    useEffect(() => {
      getKonselor();
      getBooking();
      getJenisKonseling();
    }, []);
  return (
    <>
      <Title />
      <div className='flex flex-wrap justify-center'>
        <div className='flex flex-wrap justify-center w-full'>
          <div className='flex mx-4 mb-7 w-[900px] md:w-[690]'>
            <p className='flex justify-center w-44 bg-[#0F2650] hover:bg-blue-600 text-white font-bold text-base rounded-2xl mt-5 py-2'>{jenisKonseling ? "Konseling " + jenisKonseling.jenis : "loading"}</p>
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

      </div>
    </>
  )
}

export default PenjadwalanPage