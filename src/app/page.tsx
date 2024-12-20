import { client } from "@/sanity/lib/client";
import Image from "next/image";
  export default async function Home(){
    const query = `*[_type == "homePage"]{
      heading,
      paragraph,
      buttonText,
      image
    }`;
    const sanityData = await client.fetch(query);
    
    return (
      <div className="">
        <h1 className="font-bold text-2xl">{sanityData[0].heading}</h1>
        <p className="font-extrabold text-3xl">{sanityData[0].paragraph}</p>
        <button className="font-semibold">{sanityData[0].buttonText}</button>
        {sanityData[0].image && (
          <Image
            src={sanityData[0].image} // Generate the URL for the image
            alt="Image Alt Text"
            width={200}
            height={200}
          />
        )}
      </div>
    );
  }