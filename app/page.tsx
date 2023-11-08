import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Datum {
  id: number;
  attributes: {
    title: string;
    description: string;
    draft: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
  };
}

export default async function page() {
  async function getPost() {
    const resulting = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`);
    const result = await resulting.json();
    return result.data;
  }
  const posts = await getPost();
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Blog</h1>
      </div>
      <div className="w-full m-auto p-10 flex flex-col justify-center items-center">
        <h1>Blog Post Links:</h1>
        <div className="flex flex-row justify-center flex-wrap p-10">
          {posts.map((post: Datum) => (
            <div key={post.id} className="w-[30%] box-content bg-[#f8f6f8] p-7 m-2 rounded-sm">
              <Link href={`blog/${post.id}`}>
                <Image src={`${post.attributes.imageUrl}`} alt="blog-post" priority={true} className="rounded-sm" width={300} height={300} />
                <h1>{post.attributes.title}</h1>
                <p>{post.attributes.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
