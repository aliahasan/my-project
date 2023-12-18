import { Link, Outlet } from "react-router-dom";

const DashBoardLayout = () => {
    return (
        <div className="flex mt-5">
            <div className="w-[20%] bg-red-200 shadow-lg ">
               <ul className="text-xl px-4 py-2 space-y-5">
                <li>
                    <Link to='/dashboard'>DashBoard</Link>
                </li>
                <li>
                    <Link to='/dashboard/profile'>Profile</Link>
                </li>
                <li>
                    <Link to='/dashboard/editProfile'>Edit Profile</Link>
                </li>
               </ul>
            </div>
           <div className="w-[80%]">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoardLayout;