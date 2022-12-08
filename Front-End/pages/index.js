import Link from "next/link";
import { AiOutlineDashboard, AiOutlineSync } from "react-icons/ai";
import { useEffect, useState } from "react";
export default function Home() {
  const [sync, setsync] = useState(false);
  const [posts, setPosts] = useState([]);
  const syncdata = () => {
    setsync(!sync);
  };
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/allData");
        const resData = await response.json();
        setPosts(resData.posts);
        console.log(resData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [sync]);

  return (
    <div className="flex flex-col md:w-[80%] lg:w-[50%] mx-0 md:m-auto mt-10 p-5 md:p-10 duration-300 ease-in">
      <div className="flex  justify-between">
        <h1 className="text-4xl font-bold">Posts</h1>
        <Link href="/dashboard">
          <button className="bg-[#fca311] shadow-sm shadow-[#A05700] hover:bg-[#CD7C00] hover:shadow-md hover:shadow-[#A05700] duration-200 px-3 py-2 rounded-sm font-bold flex items-center justify-center">
            <AiOutlineDashboard className="text-2xl mr-2" />
            Go To Dashboard
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-5 max-h-[500px] mt-10 ">
        <div
          onClick={syncdata}
          className="bg-neutral-400  w-1/5 min-w-[150px] p-2 rounded text-white flex items-center justify-center duration-300 select-none hover:bg-neutral-600"
        >
          <AiOutlineSync className="text-xl mr-2" /> Sync Data
        </div>
        {posts.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full bg-[#023047] p-5 space-y-5 text-white rounded-sm shadow-md shadow-[#023047]"
            >
              <h1 className="text-2xl font-mono font-bold">{item.title}</h1>
              <p className="text-sm">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
