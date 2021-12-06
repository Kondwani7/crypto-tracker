import React from 'react';
import '../styles/Coin.css';

const Coin = ({name, image, symbol, price, marketCap,priceChange, volume }) => {
    return (
        <div className='coin-container'>
            <div className='coin-row'>
                <div className='coin'>
                    <img src={image} alt='crypto'/>
                    <h4>{name}</h4>
                    <p className='coin-symbol'>{symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className='coin-price'>${price.toLocaleString()}</p>
                    <p className='coin-marketCap'>MktCap: ${marketCap.toLocaleString()}</p>
                    
                    {priceChange < 0? (
                        <p className='coin-percentage red'>{priceChange.toFixed(2)}%</p>
                    ) :(
                        <p className='coin-percentage green'>{priceChange.toFixed(2)}%</p>
                    )}
                    <p className='coin-volume'>{volume.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Coin
