
import koinxLogo from '../assets/koinxLogo.png'

const Navbar = () => {
  
  return (
   

<nav className="bg-white border-gray-200 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <img src={koinxLogo} className=" h-4 w-12" alt="Koinx Logo Logo" />       
     
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="  font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
        <li>
         Crypto Taxes
        </li>
        <li>
          Free Tools
        </li>
        <li>
          Resource Center
        </li>
         <li className='-m-2 text-white bg-blue-700 rounded-md cursor-pointer p-2 pl-5 pr-5'>
        Get Started
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>

  );
}

export default Navbar;