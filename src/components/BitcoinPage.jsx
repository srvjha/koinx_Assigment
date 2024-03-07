import React, { useEffect, useState } from 'react'
import bitcoinLogo from '../assets/bitcoinLogo.png'
import axios from 'axios'
import TradingViewWidget from '../Helper/TradingViewWidget'
import leftPhoto from '../assets/leftPhoto.png'


const BitcoinPage = () => {
     const[amountINR , setAmountINR] = useState(0)
     const[amountUSD , setAmountUSD] = useState(0)
     const [changeINR,setChangeINR] = useState(0)
     const [changeUSD,setChangeUSD] = useState(0)
     const [trendingCoin,setTrendingCoin] = useState([])
     
    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true")
        .then((res)=>{
            console.log("Response Data : ",res)
            
            setAmountINR(res.data.bitcoin.inr)
            setAmountUSD(res.data.bitcoin.usd)
            setChangeUSD(res.data.bitcoin.usd_24h_change)
            setChangeINR(res.data.bitcoin.inr_24h_change)
        })
        .catch((err)=>
        {
            console.log("Error While Fetching the data!! ",err)
        })
    },[])
    
    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/search/trending")
        .then((res)=>{
            console.log("Response of Trending : ",res.data.coins)
            setTrendingCoin(res.data.coins)
            console.log("Trending Coin : ",trendingCoin)
        })
        .catch((err)=>
        {
            console.log("Error While Fetching the data!! ",err)
        })
    },[])
  return (
    <>
    <div className=' mt-2 ml-12'>
        <span className='text-gray-600'>Cryptocurrencies &gt;&gt;</span>  <span className=' font-semibold'>Bitcoin</span> 
     </div>
     <div className=' flex flex-row mt-5 '>
    <div className='flex flex-col ml-12  min-h-[700px] min-w-[950px] items-start bg-white h-96 w-96 rounded-md'>
     <div className='flex flex-row'>
        <img 
            src={bitcoinLogo} 
            alt="bitcoinLogo"
            className=' h-9 w-9 mt-6 ml-5'
        />
        <div className='mt-7 ml-2 text-xl font-bold'>Bitcoin</div>
        <span className='text-gray-600 ml-2 text-[13px] font-semibold mt-8'>BTC</span>
        <div className='mt-6 ml-7 text-sm bg-gray-500 pl-3 pr-3 pt-2 pb-2 items-center rounded-md text-white'>Rank #1</div>
     </div>
    <div className='flex flex-row'>
        <div className='mt-10 ml-6 text-2xl font-bold'>{`$${amountUSD.toLocaleString()}`}</div> 
       <div className='mt-11 ml-6 bg-green-100 text-[14px] font-semibold text-green-500 pl-2 pr-2 pt-1 pb-1 rounded-md'>
        &#9650;{` ${changeUSD.toFixed(2)}`}%        
       </div>
     <div className='text-gray-500 text-[13px] font-semibold mt-12 ml-3'>(24H)</div>
    </div>

    <div className='mt-2 ml-6 text-sm font-medium mb-10'> {`₹ ${amountINR.toLocaleString()}`}</div>
    <TradingViewWidget/>
  
    </div>
   
    



     {/* Left Part */}
        <div>
           <div className='flex flex-col items-center min-h-[420px] ml-8 bg-custom-blue h-96 w-96 rounded-md'>
            <div className=' mt-5 text-white text-2xl font-semibold'>
            <div>Get Started with KoinX </div>
            <div className=' ml-20 '>for FREE </div>
            </div>
            <div className='text-sm text-white text-center mt-4 ml-8 mr-8'>With our range of features that you can equip for free, KoinX
             allows you to be more educated and aware of your tax reports.</div>
            <img src={leftPhoto} className='h-40 w-40' alt="" />
           <div className='mt-3 text-black bg-white pl-4 pr-4 font-semibold pt-2 pb-2 rounded-md cursor-pointer'>Get Started for FREE {`->`}</div>
            
            </div>
         <div className='flex flex-col ml-8 bg-white min-h-[250px] mt-3 rounded-md'>
           <div className=' ml-4 font-bold mt-4 text-xl'>
           Trending Coins (24h)
           </div>
           <div className=' mt-3 ml-5'>
           
            {trendingCoin
            .filter((_,index)=>index<3)  // slice bhi use kr skte the .slice(0,3)
            .map((coin,index)=>(
                <div key={index} className=' flex items-center'>
                    <img src={coin.item.large} alt={coin.item.name} className='h-10 w-10 mt-2' />
                   <div className='  ml-2'>{coin.item.name}</div> 
                   <div className=' ml-auto mr-3  bg-green-100 text-[14px] font-semibold text-green-500 pl-2 pr-2 pt-1 pb-1 rounded-md'>
                   &#9650; {coin.item.data.price_change_percentage_24h.btc.toFixed(2)}</div>
                    </div>
               
            ))}
           </div>
        </div>
        
        </div>
    </div>

    
    </>
    
  )
}

export default BitcoinPage