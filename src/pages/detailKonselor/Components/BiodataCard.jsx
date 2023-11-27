import React from 'react'
import Spesifikasi from './Spesifikasi'
import { Link } from 'react-router-dom'
import JamKonseling from './JamKonseling'
import DateKonselor from './DateKonselor'

const BiodataCard = () => {
    return (
        <>
            <div >
                <div className="flex max-sm:w-auto max-md:w-auto w-full flex-wrap p-8 m-5 md:w-[761px] bg-[#B5D5FE] shadow-gray-300  rounded-xl border border-[#0F2650]" style={{ boxShadow: '18px 19px 14px -3px rgba(0,0,0,0.1)', }}>
                    <p className=" mb-6 mx-3 text-sm ">
                        Dr. Amanda Wijaya, seorang psikolog klinis berpengalaman, telah memberikan kontribusi yang tak terhitung dalam membantu individu menavigasi perjalanan kesehatan mental mereka. Dengan pendekatan terapeutik yang holistik dan kecerdasan emosional yang tinggi, Amanda tidak hanya memahami tantangan yang dihadapi kliennya tetapi juga berkomitmen untuk membimbing mereka menuju pemulihan yang berkelanjutan. Ia menjalankan praktiknya dengan penuh kehangatan dan empati, menciptakan ruang yang aman bagi klien untuk tumbuh dan berkembang. Dengan dedikasi terhadap penelitian dan pendidikan, Amanda bukan hanya seorang praktisi, tetapi juga seorang pemimpin dalam memajukan bidang psikologi klinis.
                    </p>
                    <p className='flex mb-4 justify-center text-center rounded-3xl bg-[#ffdb38cd] font-bold text-md px-8 py-4'>
                        "Setiap langkah kecil adalah kemajuan menuju keberhasilan, jangan pernah meremehkan kekuatan potensial yang tersimpan dalam upaya konsisten."
                    </p>
                    <div className='flex justify-center w-full gap-3'>
                        <JamKonseling />
                        <DateKonselor />
                    </div>

                    <button className='flex justify-end w-full mt-6'>
                        <Link className='flex p-2 px-4 bg-[#063D82] hover:bg-blue-700 hover:border-b hover:border-[#063D82] text-white text-sm rounded-2xl' to={'/'}>Booking Now</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default BiodataCard