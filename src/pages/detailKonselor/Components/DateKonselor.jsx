import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";


const DateKonselor = () => {
    const {id, idbooking} = useParams();
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleUpdateData = async () => {
        try {
            // Kirim data update ke server
            const updatedData = {
                tanggal: selectedDate,
                // Tambahkan field lain sesuai kebutuhan
            };

            // Ganti URL endpoint sesuai kebutuhan Anda
            const res = await axios.put(`https://be-capstone-project.vercel.app/bookings/` + idbooking, updatedData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjQxMjUwNzI3YjE0MWQ0M2NlNWM4MyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAxMDY2NzMxfQ.d9ADnKK-sYhF1HvlfzF8mVdGfQPR9xb987m707OD-zM',
                },
            });

            console.log('Data berhasil diperbarui:', res.data);
        } catch (error) {
            console.error('Error saat memperbarui data:', error);
        }
    };

    return (
        <>
            <div className="mt-4">
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="border border-[#1C79F2] focus:outline-[#1C79F2] px-4 py-2 w-52 text-sm rounded-2xl"
                />
                <button
                    type="button"
                    onClick={handleUpdateData}
                    className="mt-2 px-4 py-2 bg-[#1C79F2] text-white rounded-2xl hover:bg-blue-700 focus:outline-none"
                >
                    Update Data
                </button>
            </div>
        </>
    );
};

export default DateKonselor;