import './App.css'
import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import {InputBox} from './components/index.js';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div 
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage: `url(https://img.freepik.com/premium-photo/creative-glowing-dollar-hologram-with-metaverse-lines-dark-wide-background-money-online-banking-app-currency-finance-concept-3d-rendering_670147-7824.jpg)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/10'>
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className='w-full mb-1'>
              <InputBox 
                label='From'
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>

            <div className='w-full relative h-0.5'>
              <button
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-900 px-2 text-white py-0.5 pb-1'
                onClick={swap}
              >Swap</button>
            </div>

            <div className='w-full mb-1'>
              <InputBox 
                label='to'
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>

            <button
              type='submit'
              className='w-full bg-blue-900 text-white px-4 py-3 rounded-lg mt-2'
            >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
