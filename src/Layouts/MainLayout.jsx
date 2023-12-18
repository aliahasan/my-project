import { NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
       <section className="flex justify-between px-10 shadow-lg bg-red-300 py-6">
          <div>
            <h1 className="text-2xl font-bold">Amazon</h1>
          </div>
         <nav>
            <ul className="flex justify-between gap-5 font-medium">
                

                <NavLink to='/' className={({isActive , isPending}) =>
                    isPending ? 'pending' : isActive ? 'bg-green-400 underline' : ''}>
                        Home
                        </NavLink>


                <NavLink to='/products' className={({isActive , isPending}) =>
                    isPending ? 'pending' : isActive ? 'bg-sky-400 underline' : ''}>
                        Products
                        </NavLink>


                <NavLink to='/about' className={({isActive , isPending}) =>
                    isPending ? 'pending' : isActive ? 'bg-orange-400 underline' : ''}>
                        About
                        </NavLink>


                <NavLink to='/dashboard' className={({isActive , isPending}) =>
                    isPending ? 'pending' : isActive ? 'bg-red-400 underline' : ''}>
                        Dashboard
                        </NavLink>
            </ul>
         </nav>
        </section>
               <div className="min-h-screen">
               <Outlet></Outlet>
               </div>
               <Footer></Footer>
         </div>
    );
};

export default MainLayout;