import React, { useState } from "react";

export default function LineCalculator() {
  const [people, setPeople] = useState("");
  const [percentage, setPercentage] = useState(15);
  const [price, setPrice] = useState(15);

  const total =
    people && price
      ? (people * (percentage / 100) * price * 0.7).toFixed(2)
      : "0.00";

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center justify-center p-8">
      <img src="/lineleap-horizontal-safearea-color (1).png" alt="LineLeap Logo" className="w-48 mb-6" />
      <h1 className="text-4xl font-bold mb-2 text-[#0682fe] text-center">
        LineSkip Revenue Calculator
      </h1>
      <p className="text-gray-300 text-center mb-8 max-w-xl">
        This calculator helps you estimate how much money you could generate in a single night with LineLeap.
      </p>

      <div className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block mb-2 text-sm text-gray-300">Number of Nightly Customers</label>
            <input
              type="number"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              placeholder="Enter number"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#0682fe]"
            />
          </div>

          <div className="flex flex-col items-center">
            <label className="block mb-2 text-sm text-gray-300">Percentage of Customers who would purchase LineSkips</label>
            <input
              type="range"
              min="0"
              max="100"
              value={percentage}
              onChange={(e) => setPercentage(Number(e.target.value))}
              className="w-full"
            />
            <div className="text-[#0682fe] text-sm mt-2">{percentage}%</div>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">LineSkip Price</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full pl-7 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#0682fe]"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <div className="text-lg text-gray-400 mb-2">New LineSkip Revenue:</div>
          <div className="text-4xl font-bold text-[#0682fe]">${total}</div>
        </div>
      </div>
    </div>
  );
}
