import Link from "next/link"
import { useRouter } from "next/router"

const Nav = () => {
  return (
    <nav className="w-full h-24 flex justify-start items-center max-w-screen-md m-auto">
      <div className="flex">
        <div className="flex">
          <Button title="Home" route="/" />
          <Button title="About" route="/about" />
          <Button title="Contact" route="/contact" />
        </div>
      </div>
    </nav>
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
