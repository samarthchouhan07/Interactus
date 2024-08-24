import Image from "next/image";
import React from "react";
import storiesimage from "../../public/Screenshot 2024-08-22 215639.png"

type Props = {};

const Stories = (props: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src={storiesimage} alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
            <span className="font-medium">
                Samarth
            </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src={storiesimage} alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
            <span className="font-medium">
                Samarth
            </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src={storiesimage} alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
            <span className="font-medium">
                Samarth
            </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src={storiesimage} alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
            <span className="font-medium">
                Samarth
            </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src={storiesimage} alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
            <span className="font-medium">
                Samarth
            </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src={storiesimage} alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
            <span className="font-medium">
                Samarth
            </span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src={storiesimage} alt="" className="w-20 h-20 rounded-full ring-2" width={80} height={80}/>
            <span className="font-medium">
                Samarth
            </span>
        </div>
      </div>
    </div>
  );
};

export default Stories;