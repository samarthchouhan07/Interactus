import Image from "next/image";
import React from "react";
import testing_image from "../../public/Screenshot 2024-08-23 194652.png";
import Comments from "./Comments";

type Props = {};

const Post = (props: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={testing_image}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium ">Samarth Chouhan</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src={testing_image}
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          The fluffy kitten whispered secrets to the clockwork pineapple on the
          moonlit beach, while the tartan socks danced the tango with a squadron
          of rainbow-colored narwhals.
        </p>
      </div>
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300 ">|</span>
            <span className="text-gray-500 ">
              123 <span className="hidden md:inline ">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300 ">|</span>
            <span className="text-gray-500 ">
              123 <span className="hidden md:inline ">Likes</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              width={16}
              height={16}
              alt=""
              className="cursor-pointer"
            />
            <span className="text-gray-300 ">|</span>
            <span className="text-gray-500 ">
              123 <span className="hidden md:inline ">Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default Post;
