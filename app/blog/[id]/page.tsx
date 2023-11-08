import React from "react";
import PostLayout from "../../../components/PostLayout";
import Link from "next/link";

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

export async function generateStaticParams() {
  const resulting = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`);
  const result = await resulting.json();
  return result.data.map((data: any) => ({ id: data.id.toString() }));
}

export default async function page({ params }: { params: { id: string } }) {
  const resulting = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs/${params.id}`);
  const result = await resulting.json();
  const hasil: Datum = result.data;
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PostLayout title={hasil.attributes.title} description={hasil.attributes.description} draft={hasil.attributes.draft} imageUrl={hasil.attributes.imageUrl} />
      <button className="m-5">
        <Link href={"/"} className="bg-red-500 p-4 text-white">
          Back
        </Link>
      </button>
    </div>
  );
}
