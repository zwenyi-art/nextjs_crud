"use client";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useEffect, useState } from "react";

const TopicList = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    const getTopics = async()=>{
      try {
        const res =await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/topics`,{cache:'no-cache'});
        if(!res.ok){
          throw new Error("Failed to load topic");
        }
        const data  = await res.json();
        setTopics(data);
       } catch (error) {
        console.log("Error Loading Topic",error);
      }
    }
    getTopics();
  }, []);

  return (
    <>
      {topics?.map((t)=>(
           <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
           <div>
               <h2 className="font-bold text-2xl">{t.title}</h2>
               <div>{t.description}</div>
           </div>
           <div className="flex gap-2">
               <RemoveBtn id={t._id}/>
              <Link href={`/editTopic/${t._id}`}>
                <HiPencilAlt size={24}/>
              </Link>
           </div>
         </div>
    ))}
    </>
  );
};

export default TopicList;
