import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-2 p-6 font-medium">
        <Link to="/bai1">
          <div className="p-40 px-20 py-2 text-xl text-white border cursor-pointer p bg-cyan-950 rounded-xl">
            Exercise 1
          </div>
        </Link>
        <Link to="/bai2">
          <div className="p-40 px-20 py-2 text-xl text-white border cursor-pointer p bg-cyan-950 rounded-xl">
            Exercise 2
          </div>
        </Link>
        <Link to="/bai3">
          <div className="p-40 px-20 py-2 text-xl text-white border cursor-pointer p bg-cyan-950 rounded-xl">
            Exercise 3
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
