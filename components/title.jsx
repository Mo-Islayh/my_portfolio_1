import Image from "next/image"
import React from "react"
import PicOfMe from "../images/me.jpg"

const Header = () => {
  return (
    <div className="w-full max-w-screen-md m-auto  flex justify-between gap-4 items-center ">
      <div>
        <h1 className="text-white mb-4 text-5xl sm:text-6xl font-extrabold tracking-tight">
          Mo Islayh
        </h1>
        <div className="text-1xl sm:text-3xl font-extrabold tracking-tight uppercase">
          FULL STACK SOFTWARE DEVELOPER
        </div>
        <div className="text-1xl sm:text-3xl font-extrabold tracking-tight uppercase">
          JORDAN, MADABA
        </div>
      </div>
      <div className="rounded-xl block sm:hidden">
        <Image
          src={PicOfMe}
          alt={"Picture of Me"}
          width={150}
          height={150}
          objectFit="cover"
          loading="lazy"
          className="rounded-full"
        />
      </div>
      <div className="rounded-xl hidden sm:block">
        <Image
          src={PicOfMe}
          alt={"Picture of Me"}
          width={200}
          height={200}
          objectFit="cover"
          loading="lazy"
          className="rounded-full"
        />
      </div>
    </div>
  )
}

export default Header
