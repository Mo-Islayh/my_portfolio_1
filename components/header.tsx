import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="w-full max-w-screen-md m-auto  flex justify-between gap-4 items-center ">
      <div>
        <h1 className="text-white mb-4 text-5xl sm:text-6xl font-extrabold tracking-tight">
          Mo Islayh
        </h1>
        <h2 className="text-1xl sm:text-3xl font-extrabold tracking-tight uppercase">
          FULL STACK SOFTWARE DEVELOPER
        </h2>
        <h2 className="text-1xl sm:text-3xl font-extrabold tracking-tight uppercase">
          JORDAN, MADABA
        </h2>
      </div>
      <div className="rounded-full md:h-[200px] md:min-w-[200px] h-[150px] min-w-[150px]">
        <Image
          src={"/me1.jpg"}
          alt={"Picture of Mo Islayh"}
          width={200}
          height={200}
          objectFit="cover"
          loading="lazy"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

export default Header;
