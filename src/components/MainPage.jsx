import { useState } from 'react';

function MainPage() {
  const currencyRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 108.73,
  };

  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleExchange = () => {
    const exchangeRate = currencyRates[toCurrency] / currencyRates[fromCurrency];
    setResult((parseFloat(amount) * exchangeRate).toFixed(2));
  };

  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      {/* INPUT */}
      <div className='flex gap-2'>
        <input className='border p-2 rounded-md shadow-md' type="number" value={amount} onChange={handleAmountChange} />
        <select className='p-2 border rounded-md shadow-md' value={fromCurrency} onChange={handleFromCurrencyChange}>
          {Object.keys(currencyRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      {/* EX BTN */}
      <div className='my-2'>
        <p>Exchange Rate: {currencyRates[toCurrency] / currencyRates[fromCurrency]}</p>
        
      </div>
      {/* RESULT */}
      <div>
        <div className='flex flex-wrap justify-center items-center gap-5'>
      <p className='border p-2 rounded-md shadow-md w-[190px]'>Result: {result}</p>
        <select className='p-2 border rounded-md shadow-md' value={toCurrency} onChange={handleToCurrencyChange}>
          {Object.keys(currencyRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        </div>
        <button className='bg-green-500 hover:shadow-green-500 w-full my-4 p-2 rounded-md shadow-md font-semibold text-white' onClick={handleExchange}>Exchange</button>
      </div>
    </div>
    </>
  );
}

export default MainPage;
