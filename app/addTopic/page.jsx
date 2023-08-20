"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router =useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are require.");
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/topics`, {
        method: "POST",
        headers:{
          "Content-type":"application/json",
        },
        body:JSON.stringify({title,description}),
      });
      if(res.ok){
        router.push("/");
      }else{
        throw new Error("Failed to create topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
