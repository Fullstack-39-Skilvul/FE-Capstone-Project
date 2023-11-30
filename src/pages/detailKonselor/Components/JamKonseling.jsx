import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JamKonseling = ({ jam, tanggal, setJam, setTanggal }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);
    const { id } = useParams();
    
    const [konselor, setKonselor] = useState(null);
    

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleDateChange = (event) => {
        // setSelectedDate(event.target.value);
        setTanggal(event.target.value)
    };

    const handleTimeChange = (event) => {
        const selectedHour = event.split(' ')[0];
        setJam(selectedHour)
        setSelectedTime(event);
        setIsOpen(false);
    }


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
            <div className="inline-flex mt-4 bg-white border border-[#1C79F2] rounded-2xl">
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="px-4 py-2 w-44 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-2xl"
                >
                    {selectedTime || 'Waktu Konseling'}
                </button>

                <div className="relative ">
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-2xl hover:bg-gray-50"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isOpen && (
                        <div className="absolute right-6 mt-0.5 z-10 w-40 origin-top-right rounded-md shadow-lg">
                            <div className="flex flex-wrap justify-center ">
                                <button
                                    type="button"
                                    onClick={() => handleTimeChange('08.00 - 08.45')}
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg w-full bg-white hover:bg-gray-100 hover:text-gray-700 border border-[#4898FF]"
                                >
                                    08.00 - 08.45
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleTimeChange('09.00 - 09.45')}
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg w-full bg-white hover:bg-gray-100 hover:text-gray-700 border border-[#4898FF]"
                                >
                                    09.00 - 09.45
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleTimeChange('10.00 - 10.45')}
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg w-full bg-white hover:bg-gray-100 hover:text-gray-700 border border-[#4898FF]"
                                >
                                    10.00 - 10.45
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-4">
                <input
                    type="date"
                    value={tanggal}
                    onChange={handleDateChange}
                    className="border border-[#1C79F2] focus:outline-[#1C79F2] px-4 py-2 w-52 text-sm rounded-2xl"
                />
                {/* <button
                    type="button"
                    onClick={() => handleDateChange(selectedDate)}
                    className="mt-2 px-4 py-2 bg-[#1C79F2] text-white rounded-2xl hover:bg-blue-700 focus:outline-none"
                >
                    Booking Now
                </button> */}
            </div>
        </>
    );
};
export default JamKonseling;