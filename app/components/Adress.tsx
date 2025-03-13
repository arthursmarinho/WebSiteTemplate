import Link from "next/link";

export default function Adress() {
  return (
    <div className="p-4 pt-28 w-1/3 ml-60">
      <div className="border-2 rounded-4xl p-4 mb-4">
        <span className="text-black">Endereço: </span>
        <span className="text-gray-500">xxxxxxxxxxxxxx-xxxxxxxxx-0000</span>
        <Link href="https://www.google.com/maps">
          <button className="bg-blue-500 m-4 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            Mostrar no mapa 🗺️
          </button>
        </Link>
      </div>
    </div>
  );
}
