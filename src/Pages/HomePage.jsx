import { FaSearch } from "react-icons/fa";

const HomePage=()=>{
    return(
        <>
        <div className="container mx-auto flex justify-between items-center">
           <div className="border shadow-lg m-2 p-2 rounded-lg w-4/12">
            <h1 className="bg-black text-white mt-2 p-2 text-xl">Dashboard</h1>
              <p className="bg-gray-300">This screen contain search bar for search jobs
              </p>
              <p>Profile complete percentage 
              </p>
              <p>Suggested jobs by his skills
              </p>
              <p>Latest jobs by his skills
              </p>
              <p>Top recruiters which have most vacancies
              </p>
              <p>Recruiter Actions. 
              </p>
           </div>
           <div className="border shadow-lg m-2 p-2 rounded-lg w-full h-80 flex justify-center items-center ">
            <input type="text" name="" id="" placeholder="Search Jobs" className="" />
              <FaSearch />
           </div>
        </div>
        
        </>
    )
}
export default HomePage;