import './App.css'
import InputBox from './components/InputBox'
import { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div 
      className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{backgroundImage: `url(https://www.cnet.com/a/img/resize/11ecd648ae46d7edad540bf1280a5d6fdac46ffe/hub/2023/02/14/ad269de1-1d9f-4bb1-9b3b-87a9dff38e72/cash-money-fan-100s-teal-spiral.png?auto=webp&fit=crop&height=900&width=1200)`}}
    >
      <InputBox />
    </div>
  )
}

export default App
