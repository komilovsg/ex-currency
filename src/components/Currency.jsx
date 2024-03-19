import { useState, useEffect } from "react";

export default function Currency() {
  const initialCurrencyList = [
    { id: 1, name: "US Dollar", code: "USD" },
    { id: 2, name: "Russian Ruble", code: "RUB" },
    { id: 3, name: "Tajik Somoni", code: "TJS" },
    { id: 4, name: "Uzbekistani Som", code: "UZS" },
  ];

  const [currencies, setCurrencies] = useState(
    JSON.parse(localStorage.getItem("currencies")) || initialCurrencyList
  );
  const [newCurrency, setNewCurrency] = useState({ name: "", code: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("currencies", JSON.stringify(currencies));
  }, [currencies]);

  const handleAddCurrency = () => {
    const existingCurrency = currencies.find(
      (currency) => currency.code === newCurrency.code
    );
    if (existingCurrency) {
      setError("Currency with this code already exists");
      return;
    }

    const newCurrencies = [
      ...currencies,
      { id: currencies.length + 1, ...newCurrency },
    ];
    setCurrencies(newCurrencies);
    setNewCurrency({ name: "", code: "" });
    setError("");
  };

  const handleDeleteCurrency = (id) => {
    const updatedCurrencies = currencies.filter(
      (currency) => currency.id !== id
    );
    setCurrencies(updatedCurrencies);
  };

  return (
    <div className="w-full container mx-auto">
      <h1 className="my-4 font-semibold text-center">Currency List</h1>
      <div className="w-full flex flex-col justify-center items-center">
        {currencies.map((currency) => (
          <div className="w-[80%] flex flex-wrap justify-between items-center p-5 border-b" key={currency.id}>
            <p>{currency.name} ({currency.code}){" "}</p>
            <button className="bg-red-600 font-semibold text-white border rounded-md p-2 px-4" onClick={() => handleDeleteCurrency(currency.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <h2 className="my-4 font-semibold text-center">Add New Currency</h2>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <input
          type="text"
          className="border rounded-md p-2"
          placeholder="Name"
          value={newCurrency.name}
          onChange={(e) =>
            setNewCurrency({ ...newCurrency, name: e.target.value })
          }
        />
        <input
          type="text"
          className="border rounded-md p-2"
          placeholder="Code"
          value={newCurrency.code}
          onChange={(e) =>
            setNewCurrency({ ...newCurrency, code: e.target.value })
          }
        />
        <button className="bg-green-600 font-semibold text-white border rounded-md p-2 px-4" onClick={handleAddCurrency}>
          Add Currency
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
