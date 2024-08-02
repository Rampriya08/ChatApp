import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import Search from "./Search"



const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col " >
        <Search />
        <div className='divider px-3'></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default Sidebar