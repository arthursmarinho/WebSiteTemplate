import Link from "next/link";
export default function OpeningHours() {
  return (
    <div className="bg-white p-4 mb-12 rounded-4xl shadow-lg text-black flex flex-col w-1/3 ml-60">
      <h2 className="text-xl font-semibold mb-4">Horários de Funcionamento</h2>
      <div className="flex justify-between mb-2">
        <span className="font-medium">Segunda a Sexta:</span>
        <span>00:00 - 00:00</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="font-medium">Sábado:</span>
        <span>00:00 - 00:00</span>
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Domingo:</span>
        <span>00:00 - 00:00</span>
      </div>
      <div className="flex justify-center">(00) 0 0000-0000</div>
      <div className="flex justify-center">
        <Link href="https://www.google.com/maps">
          <button className="bg-green-900 hover:bg-green-700 m-4 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <img
              src="https://png.pngtree.com/png-clipart/20221019/original/pngtree-whatsapp-mobile-software-icon-png-image_8704828.png"
              className="w-6 h-6"
            />
            <span>Whatsapp</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
