import Image from "next/image";
import Link from "next/link";

interface ItemProps {
  title: string;
  id: number;
  photo: string;
  price: number;
  comments: number;
  hearts: number;
  create: string;
}

export default function Item({
  title,
  photo,
  price,
  comments,
  hearts,
  id,
  create,
}: ItemProps) {
  return (
    <Link href={`/products/${id}`}>
      <a className="flex px-4 pt-5 cursor-pointer justify-between w-full">
        <div className="flex space-x-4 w-3/12 h-20">
          {photo ? (
            <Image
              className="w-20 h-20 bg-gray-400 rounded-md"
              src={`https://imagedelivery.net/w46l_DmHQSMJLI8NrmR8QQ/${photo}/productPreview`}
              width={80}
              height={80}
            />
          ) : (
            <div className="w-20 h-20 bg-gray-400 rounded-md" />
          )}
        </div>
        <div className="pt-1 pl-0.5 flex flex-col space-y-1 w-7/12 md:w-8/12">
          <h3 className="text-sm font-medium text-gray-900 truncate">
            {title}
          </h3>
          <span className="text-xs font-extralight">{create}</span>
          <span className="font-bold mt-1 text-gray-900">
            {price.toLocaleString("ko-KR")}원
          </span>
        </div>
        <div className="flex space-x-2 items-end justify-end w-2/12">
          <div className="flex space-x-0.5 items-center text-sm text-gray-600 w-1/2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
            <span>{hearts}</span>
          </div>
          <div className="flex space-x-0.5 items-center text-sm text-gray-600 w-1/2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>{comments}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
