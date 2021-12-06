import React, {useState, useEffect} from "react";

import axios from  'axios'



function App() {
    const [coin, setCoin] = useState([]);
    

    useEffect(()=>{
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res =>{
            setCoin(res.data);
        })
        .catch(error => console.log('error'))
    })
  return (
    <div className="coin-app">
        <div className='coin-search'>
            <h3 className='coin-text'>Search for a currency</h3>
            <form>
                <input className='coin-input' placeholder='search' type='text'/>
            </form>
        </div>
    </div>
  );
}

export default App;
