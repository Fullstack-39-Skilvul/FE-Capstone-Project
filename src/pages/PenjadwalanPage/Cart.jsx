import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Card = () => {
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

    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR'
        }).format(number);
      };

    return (
        <>
            <div>
                <div className="p-4 mx-2 w-72 bg-[#0F2650] shadow-gray-300  rounded-2xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <h3 className='font-bold text-white text-lg mr-3 mb-7'>Cart Detail</h3>
                    <div className='flex mx-2'>
                        <div className='flex w-full text-sm text-white justify-between border-b border-gray-600'>
                            <p className=''>Biaya Konseling</p>
                            <p className=''>{jenisKonseling ? formatRupiah(jenisKonseling.harga) : "loading"}</p>
                        </div>

                    </div>
                    <div className='flex justify-end my-7 mx-2'>
                        <div className='flex w-2/3 justify-between border-b gap-2 border-gray-600'>
                            <p className='text-white text-sm'>Total</p>
                            <p className='text-white text-sm'>{jenisKonseling ? formatRupiah(jenisKonseling.harga) : "loading"}</p>
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