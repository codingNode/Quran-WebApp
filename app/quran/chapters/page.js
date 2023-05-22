"use client"

import React, {useEffect, useState} from 'react';
import Link from 'next/link';


export const getServerSideProps = async () => {
    return {
      props: {}
    };
  };



export default function Chapters() {

    const [data, setData] = useState(null)

    useEffect(()=>{

        const getData=async()=>{
            try{
                const response = await fetch('https://api.quran.com/api/v4/chapters?language=ur')
                const list =await response.json()
                setData(list)
                console.log("=>", list)
            }
            catch(e)
            {
                console.log(e)
            }
        }
       getData();

    },[])

   

  return (
    <div className='flex flex-col bg-[#e9e7e7] items-center text-center justify-between'>
    <div className='font-bold text-4xl mt-10'>Chapters</div>
    {
        data && (
            <>
            <div>
                Total Chapter: {data.chapters.length}

            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 mx-2 md:mx-5'>
            {
                data.chapters.map((chp)=>{
                    return(
                        <div ket={chp.id} className='bg-white shadow-md p-1 md:p-4 rounded-md col-span-1'>
                            <Link href={`quran/chapters/${chp.id}`}>
                            <div className='grid grid-cols-5 gap-2'>
                                <div className='col-start-1 col-span-1 border rounded-sm bg-[#e5e3e3] justify-between my-auto'>
                                    <div className='text-2xl'>{chp.id}</div>
                                </div>
                                <div className='col-start-2 col-span-2 flex flex-col place-items-start ml-4'>
                                    <div className='font-bold text-xl lg:text-2xl '>{chp.name_arabic}</div>
                                    <div className='font-normal text-xs'>{chp.translated_name.name}</div>
                                </div>
                                <div className='col-start-4 col-span-2 flex flex-col place-items-start'>
                                    <div className='text-xs'>{chp.revelation_place}</div>
                                    <div className='text-xs'>Revelation #: {chp.revelation_order}</div>
                                    <div className='text-xs'>verses: {chp.verses_count}</div>

                                </div>
                                
                            </div>
                            </Link>
                            {/* <div className='font-bold text-xl lg:text-4xl underline underline-offset-8'>{chp.name_arabic}</div>
                            <div className='text-xs font-medium flex-row'>Revelation Place: {chp.revelation_place} | Revelation Order: {chp.revelation_order} | verses: {chp.verses_count}</div>
                            <div className='font-normal text-xs'>Surah Meaning: {chp.translated_name.name}</div> */}

                        </div>
                    )
                })
            }
            </div>

            </>
            
               )
    }
    </div>
  )
}
