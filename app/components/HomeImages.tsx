import Image from "next/image";

export default function HomeImages() {
  return (
    <div className="pt-44">
      <div className="grid grid-cols-2 justify-items-end gap-2 pb-60">
        <div>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5578/5578817.png"
            alt="Logo"
            width={560}
            height={420}
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 w-full justify-items-start">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5578/5578817.png"
            alt="Logo"
            width={280}
            height={202}
          />
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5578/5578817.png"
            alt="Logo"
            width={280}
            height={202}
          />
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5578/5578817.png"
            alt="Logo"
            width={280}
            height={202}
          />
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5578/5578817.png"
            alt="Logo"
            width={280}
            height={202}
          />
        </div>
      </div>
    </div>
  );
}
