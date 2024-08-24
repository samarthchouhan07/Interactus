import Image from "next/image";
import Link from "next/link";
import React from "react";
import testing_image from "../../public/Screenshot 2024-08-22 215639.png"

type Props = {};

const FriendRequests = (props: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <div>
            <Image src={testing_image} alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover"/>
            <span>Samarth Chouhan</span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default FriendRequests;
