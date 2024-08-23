import Image from "next/image";
import React from "react";
import testing_image from "../../public/Screenshot 2024-08-23 194652.png";

type Props = {};

const Comments = (props: Props) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src={testing_image}
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full ">
          <input
            type="text"
            placeholder="Write a comment"
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="">
        <div className="flex gap-4 justify-between mt-6 ">
          <Image
            src={testing_image}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Samarth Chouhan</span>
            <p>
              The fluffy kitten whispered secrets to the clockwork pineapple on
              the moonlit beach, while the tartan socks danced the tango with a
              squadron of rainbow-colored narwhals.
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt=""
                  width={16}
                  height={16}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          <Image
            src="/more.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
