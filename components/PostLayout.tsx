import Image from "next/image";
import React from "react";

interface Datum {
  title: string;
  description: string;
  draft: string;
  imageUrl: string;
}

export default function PostLayout({ title, description, draft, imageUrl }: Datum) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 flex flex-col justify-center items-center bg-slate-500 m-10 rounded-lg shadow-lg">
        <h1 className="text-3xl m-4">{title}</h1>
        <Image src={imageUrl} alt={title} width={300} height={300} className="rounded-md" />
        <p className="p-4 text-center">{draft}</p>
      </div>
    </div>
  );
}
