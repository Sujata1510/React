import { NavLink, Outlet } from "react-router-dom"

const MainPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">This is Main Page</h1>

      <div className="space-x-3">
        <NavLink to={'/'} className={'text-red-600 font-bold'}>Page1</NavLink>
        <NavLink to={'/page-2'} className={'text-green-900 font-bold'}>Page2</NavLink>
      </div>
      <Outlet />

    </div>
  )
}
export default MainPage