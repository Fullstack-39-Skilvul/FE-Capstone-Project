import React from 'react'
import { useState } from 'react';

const JamKonseling = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
        setIsOpen(false);
    };
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
                                    onClick={() => handleTimeSelection('08.00 - 08.45')}
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg w-full bg-white hover:bg-gray-100 hover:text-gray-700 border border-[#4898FF]"
                                >
                                    08.00 - 08.45
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleTimeSelection('09.00 - 09.45')}
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg w-full bg-white hover:bg-gray-100 hover:text-gray-700 border border-[#4898FF]"
                                >
                                    09.00 - 09.45
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleTimeSelection('10.00 - 10.45')}
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg w-full bg-white hover:bg-gray-100 hover:text-gray-700 border border-[#4898FF]"
                                >
                                    10.00 - 10.45
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default JamKonseling