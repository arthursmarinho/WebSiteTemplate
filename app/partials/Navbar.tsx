"use server";

import Image from "next/image";
export default async function Navbar() {
  return (
    <nav className="flex justify-evenly items-center h-22 bg-white text-black">
      <div>
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
      </div>
      <div className="flex space-x-6">
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>Lorem ipsum</button>
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>Lorem ipsum</button>
        </div>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button>Lorem ipsum</button>
        </div>
      </div>
    </nav>
  );
}
