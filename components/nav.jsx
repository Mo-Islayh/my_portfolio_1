import Link from "next/link"
import { useRouter } from "next/router"
import State from "./state"

const Nav = () => {
  // if (typeof window !== "undefined") {
  // }

  return (
    <div className=" w-full flex justify-center  flex-wrap ">
      <nav className="bg-[#1e293b] w-full h-24 max-w-screen-md   top-0    flex items-center justify-start flex-col z-10  ">
        <div className="flex  w-full p-6">
          <Button title="Home" route="/" />
          <Button title="About" route="/about" />
          <Button title="Contact" route="/contact" />
        </div>
        <div className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 h-1">
          {/* <div className=" bg-indigo-500 h-1 w-1/2" /> */}
        </div>
      </nav>
      <State />
    </div>
  )
}

export default Nav

const Button = ({ route, title }) => {
  const router = useRouter()

  return (
    <Link href={route}>
      <button
        className={`block px-4 py-2 mx-1 text-lg font-medium leading-5  transition duration-150 ease-in-out rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100  ${
          router.pathname == route
            ? "bg-gray-100 text-gray-700"
            : "text-slate-200"
        } `}
      >
        {title}
      </button>
    </Link>
  )
}
