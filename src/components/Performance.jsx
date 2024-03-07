import React from 'react'



const Performance = () => {
     
     
    
  return (
    <>
    <div className=' flex flex-row mt-10 '>
     
    <div className='flex flex-col ml-12  min-h-[600px] min-w-[950px] items-start bg-white h-96 w-96 rounded-md'>
    <div className='text-2xl text-black font-semibold mt-3 ml-4'>
        Performance
      </div>
     
      {/* <div className="flex justify-between mb-4">        
        <div>
          <p className="text-gray-500">$48,637.83</p>
        </div>
      </div> */}
      <div className='flex flex-row ml-6 mt-8 '>
      <div className="flex flex-col">
        <div>
          <h3 className="text-[18px] text-gray-500">Today's Low</h3>
          <p className="text-gray-800 text-[17px] font-medium">46,930.22</p>
        </div>
        <div>
          <h3 className="text-[18px] text-gray-500 mt-3">52W Low</h3>
          <p className="text-gray-800 text-[17px] font-medium">16,930.22</p>
        </div>
      </div>
      <div className="flex flex-col ml-[680px] ">
        <div>
          <h3 className="text-[18px] text-gray-500">Today's High</h3>
          <p className="text-gray-800 text-[17px] font-medium">49,343.83</p>
        </div>
        <div>
          <h3 className="text-[18px] text-gray-500 mt-3">52W High</h3>
          <p className="text-gray-800 text-[17px] font-medium">49,743.83</p>
        </div>
      </div>
      </div>
       {/* Fundamentals of Bitcoin */}
       <div className=' flex flex-row'>
       <div className='text-xl text-black font-semibold mt-8 ml-4'>Fundamentals</div>
       <div class='bg-gray-400 mt-[38px] ml-3 rounded-full text-white p-[9px] w-1 h-1 flex items-center justify-center'>
             i
       </div>
       </div>
      <div className=' flex flex-row mt-6 ml-6'>
      <div className="flex flex-col justify-between ">
        <div className='flex flex-row '>
          <p className="text-lg font-medium mt-2">Bitcoin Price</p>
          <p className="text-sm  text-gray-500 mt-1 ml-48">$16,815.46</p>
        </div>
        <hr className=' border border-gray-300 mt-4'/>
        <div className="flex flex-col justify-between">
          <div  className='flex flex-row '>
            <p className="text-lg font-medium mt-2">24h Low / 24h High</p>
            <p className="text-sm text-gray-500 mt-1 ml-14">$16,382.07 / $16,874.12</p>
          </div>
          <hr className=' border border-gray-300 mt-4'/>
          <div  className='flex flex-row '>
            <p className="text-lg font-medium mt-2">7d Low / 7d High</p>
            <p className="text-sm text-gray-500 mt-1 ml-20">$16,382.07 / $16,874.12</p>
          </div>
        </div>    
        <hr className=' border border-gray-300 mt-4'/> 
      
        <div  className='flex flex-row '>
          <p className="text-lg font-medium mt-2">Trading Volume</p>
          <p className="text-sm text-gray-500 mt-1 ml-36">$23,249,202,782</p>
        </div>
        <hr className=' border border-gray-300 mt-4'/>
        <div  className='flex flex-row '>
          <p className="text-lg font-medium mt-2">Market Cap Rank</p>
          <p className="text-sm text-gray-500 mt-1 ml-48">#1</p>
        </div>
        <hr className=' border border-gray-300 mt-4'/>
      </div>
      
      <div className="flex flex-col justify-between ml-[110px]">
        <div className='flex flex-row '>
          <p className="text-lg font-medium mt-2">Market Cap</p>
          <p className="text-sm text-gray-500 mt-1 ml-44">$323,507,290,047</p>
        </div>
        <hr className=' border border-gray-300 mt-4 w-96'/>
        <div  className='flex flex-row '>
          <p className="text-lg font-medium mt-2">Market Cap Dominance</p>
          <p className="text-sm text-gray-500 mt-1 ml-36">38.343%</p>
        </div>
        <hr className=' border border-gray-300 mt-4'/>
        <div  className='flex flex-row '>
          <p className="text-lg font-medium mt-2">Volume / Market Cap</p>
          <p className="text-sm text-gray-500 mt-1 ml-44">0.0718</p>
        </div>
        <hr className=' border border-gray-300 mt-4'/>
        <div  className='flex flex-row '>
          <p className="text-lg font-medium mt-2">All-Time High</p>
          <p className="text-sm text-gray-500 mt-1 ml-56">18,727,775</p>
        </div>
        <hr className=' border border-gray-300 mt-4'/>
        <div  className='flex flex-row '>
          <p className="text-lg font-medium mt-2">All-Time Low</p>
          <p className="text-sm text-gray-500 mt-1 ml-56">4,727,775</p>
        </div>
        <hr className=' border border-gray-300 mt-4'/>
      </div>
    
      </div>
  
    </div>
    
   
    </div>
   
   

    
    </>
    
  )
}

export default Performance