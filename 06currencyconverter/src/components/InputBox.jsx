function InputBox({ 
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amoundDisabled = false,
  currencyDisabled = false,
  className = "" 
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1-2'>
        <label className='text-black/40 mb-2 inline-block'>
          {label}
        </label>
        <input
          type='number'
          className='outline-none bg-transparent py-1.5 w-full'
          placeholder='Amount'
          disabled={amoundDisabled}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black-40 mb-2 w-full'>Currency Type</p>
      </div>
    </div>
  )
}

export default InputBox