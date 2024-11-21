const Header=()=>{
    return(
       
      <nav className="flex justify-between items-center py-5 px-5 bg-black text-white">
        <div>
            <h1 className="text-2xl ">TSS</h1>
        </div>
        <div>
            <input type="text" />
            <span>Search</span>
        </div>
        <div>
            <select className="text-black p-2">
                <option value="profile">Profile</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
           
            </select>
        </div>
      </nav>
  
    )
}
export default Header;