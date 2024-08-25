import Image from "next/image";
import React from "react";
import testing_image from "../../public/Screenshot 2024-08-22 215639.png";

type Props = {
  size: "sm" | "md" | "lg";
};

const Ad = ({ size }: Props) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsered Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          } `}
        >
          <Image
            src={testing_image}
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={testing_image}
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium ">BigChef Lounge</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm "}>
          {size === "sm"
            ? "The fluffy kitten whispered secrets to the clockwork pineapple on the moonlit beach, while the tartan socks danced the tango with a squadron of rainbow-colored narwhals."
            : size === "md"
            ? "The fluffy kitten whispered secrets to the clockwork pineapple on the moonlit beach, while the tartan socks danced the tango with a squadron of rainbow-colored narwhals."
            : "The fluffy kitten whispered secrets to the clockwork pineapple on the moonlit beach, while the tartan socks danced the tango with a squadron of rainbow-colored narwhals."}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg ">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
