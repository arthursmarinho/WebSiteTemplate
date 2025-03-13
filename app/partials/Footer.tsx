"use server";

import Image from "next/image";

export default async function Footer() {
  return (
    <footer className="footer bg-blue-300 text-center text-black py-3">
      <p>© 20xx Sua empresa</p>

      <div className="footer-logo flex justify-center mt-10">
        <Image src="/logo.png" alt="Sua logo" width={150} height={150} />
      </div>

      <p>(00) 0 0000-0000</p>
    </footer>
  );
}
