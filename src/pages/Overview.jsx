import Performance from '../components/Performance'
import Sentiment from '../components/Sentiment';

const Navbar = () => {
  
  return (
    <div>

<nav className=" border-gray-200 mr-40  ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
     <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="  flex flex-col p-4 md:p-0 border cursor-pointer absolute border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
      <div className="group ">
        <li className='group-hover:text-blue-700  '>
        Overview
         <hr className=' hidden group-hover:block mt-2 w-[70px] border border-blue-700 ' />
        
        </li >
        </div>
        <div className="group">
        <li className='group-hover:text-blue-700  '>
         Fundamentals
         <hr className=' hidden group-hover:block mt-2 w-[100]px] border border-blue-700 ' />
        
        </li >
        </div>
        <div className="group">
        <li className='group-hover:text-blue-700  '>
         News Insights
         <hr className=' hidden group-hover:block mt-2 w-[100px] border border-blue-700 ' />
        
        </li >
        </div>
        <div className="group">
        <li className='group-hover:text-blue-700  '>
        Sentiments
         <hr className=' hidden group-hover:block mt-2 w-[80px] border border-blue-700 ' />
        
        </li >
        </div>
        <div className="group">
        <li className='group-hover:text-blue-700  '>
         Team
         <hr className=' hidden group-hover:block mt-2 w-[40px] border border-blue-700 ' />
        
        </li >
        </div>
        <div className="group">
        <li className='group-hover:text-blue-700  '>
        Technical
         <hr className=' hidden group-hover:block mt-2 w-[65px] border border-blue-700 ' />
        
        </li >
        </div>
        <div className="group">
        <li className='group-hover:text-blue-700  '>
        Tokenoimcs
         <hr className=' hidden group-hover:block mt-2 w-[84px] border border-blue-700 ' />
        
        </li >
        </div>
      </ul>
      {/* <hr className=' text-black mt-2  w-[943px] border border-gray-300 absolute' /> */}
     
    </div>
  </div>
</nav>


<Performance/>
<Sentiment/>
</div>

  );
}

export default Navbar;