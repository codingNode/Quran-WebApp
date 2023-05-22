"use client";
import React,{useState,useEffect} from 'react'
import { HiStop } from "react-icons/hi"

export const getServerSideProps = async () => {
    return {
      props: {}
    };
  };



export default function Chapter({params}) {

    const [chapter, setChapter] = useState(null)
    console.log(params.chapterId)

    const $URL_INFO = `https://api.quran.com/api/v4/chapters/${params?.chapterId}/info?language=ur`
    const URL_VERSES_INFO = `https://api.quran.com/api/v4/verses/by_chapter/${params?.chapterId}`
    // const URL_CHP_VERSES = `https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${params?.chapterId}`

    // https://alquran.cloud/api
    // const URL_CHP_VERSES = `http://api.alquran.cloud/v1/surah/${params?.chapterId}`

    const URL_CHP_VERSES = `https://al-quran1.p.rapidapi.com/${params?.chapterId}`


    useEffect(()=>{

        const getData=async()=>{
            try{
                const response = await fetch(URL_CHP_VERSES,{
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '6e5fdd6b58msh0cdb0e5a6f4c055p1ba337jsn20b616825d76',
                        'X-RapidAPI-Host': 'al-quran1.p.rapidapi.com'
                      }
                })
                const chp =await response.json()
                setChapter(chp)
                
            }
            catch(e)
            {
                console.log("error",e)
            }
        }
       getData();
    },[params.chapterId])


  return (
    <div className='flex flex-col bg-[#e9e7e7] items-center text-center justify-between'>
        <div className='mt-5 mb-2 text-4xl font-amiri'>{chapter?.surah_name_ar}</div>
        <div className='text-sm underline underline-offset-2'>{chapter?.translation}</div>
        {
            chapter&& Object.entries(chapter.verses).map((verse)=>{
                return(
                    <div key={verse[1].id} className='grid grid-cols-1 mx-10 border shadow-md p-3 my-2'>
                        <div className='col-span-1'>
                            <div className='font-amiri  text-3xl'> o {verse[1].content}</div>  <div className='text-xs'> verse {verse[1].id.toString().split(".")[0]}  chapter {verse[1].id.toString().split(".")[1]} </div>      
                        </div>
                        <div className='col-span-1 text-sm'>
                            {verse[1].transliteration}
                        </div>
                        <div className='ocl-span-1 text-xs'>
                            {verse[1].translation_eng}
                        </div>

                    </div>
                )
            })
            // chapter?.ayahs.map((verse)=>{
            //     return(
            //         <div key={verse.number} className='flex flex-row'>
            //             <div className='font-amiri border shadow-sm text-3xl p-3 my-2'>
            //                 {verse.text} | {verse.numberInSurah}
            //             </div>

            //         </div>
            //     )
            // })
        }
    </div>
  )
}
