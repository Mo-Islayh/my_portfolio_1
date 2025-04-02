import State from "./state";
import { NavButton } from "./NavButton";

const Nav = () => {
  return (
    <div className=" w-full flex justify-center  flex-wrap ">
      <nav className="bg-[#1e293b] w-full h-24 max-w-screen-md   top-0    flex items-center justify-start flex-col z-10  ">
        <div className="flex  w-full p-6">
          <NavButton title="Home" route="/" />
          <NavButton title="About" route="/about" />
          <NavButton title="Contact" route="/contact" />
        </div>
        <div className="w-full bg-gradient-to-r from-indigo-500 to-blue-600 h-1" />
      </nav>
      <State />
    </div>
  );
};

export default Nav;
