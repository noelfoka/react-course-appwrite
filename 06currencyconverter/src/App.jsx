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
      style={{backgroundImage: `url(https://www.cnet.com/a/img/resize/11ecd648ae46d7edad540bf1280a5d6fdac46ffe/hub/2023/02/14/ad269de1-1d9f-4bb1-9b3b-87a9dff38e72/cash-money-fan-100s-teal-spiral.png?auto=webp&fit=crop&height=900&width=1200)`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
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
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 px-2 py-0.5'
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
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
            >Convert</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
