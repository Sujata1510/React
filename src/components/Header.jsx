import { NavLink } from "react-router-dom"

const Header = () => {



  return (
    <div className="bg-black text-white flex px-5 py-3 items-end justify-between">

      <h1 className="text-xl">WebName</h1>
      <nav className="space-x-4">
        <NavLink to={'/about-page'} className="hover:text-red-900">About</NavLink>
        <NavLink>Contact</NavLink>
      </nav>


    </div>
  )
}
export default Header