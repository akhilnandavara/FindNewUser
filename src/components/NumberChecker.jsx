import { useEffect, useState } from "react";

export default function NumberChecker() {
  const [service, setService] = useState("swiggy");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const DEP = import.meta.env.VITE_DEPLOYMENT;
  const backAndApi = DEP
    ? import.meta.env.VITE_BACKEND_API_DEP
    : import.meta.env.VITE_BACKEND_API_DEV;

    console.log("backAndApi...",backAndApi)

  useEffect(() => {
    async function firstApiCall() {
      try {
        await fetch(backAndApi, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      } catch (error) {
        console.log("Error in first API call", error.message);
      }
    }
    firstApiCall();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make the API call here
    setLoading(true);
    let response;
    try {
      response = await fetch(`${backAndApi}/api/check-number`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ service, userName: phoneNumber }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.message || "Something went wrong");
        setLoading(false);
        setPhoneNumber("");
        setResult(errorData.message);

        return;
      }

      const data = await response.json();
      setResult(data.registered ? "Registered" : "Not Registered");
      setLoading(false);
      setPhoneNumber("");
    } catch (error) {
      console.log("Error in API call", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Number Checker
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-600 mb-2">
              Select Service
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            >
              {/* <option value="">Select a service</option> */}
              <option value="swiggy">Swiggy</option>
              <option value="snapdeal">Snapdeal</option>
              <option value="flipkart">Flipkart</option>
              <option value="zomato" disabled>
                Zomato
              </option>
              <option value="Amazon" disabled>
                Amazon
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-600 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit phone number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Check Number
          </button>
        </form>
        {!loading && result ? (
          <div className="mt-4 text-center text-red-500 text-lg font-semibold">
            {result}
          </div>
        ) : (
          <div
            className={` ${
              loading ? "visible" : "opacity-0"
            }  text-red-400 transition-all duration-200 mt-4 text-center text-lg font-semibold`}
          >
            loading...
          </div>
        )}
      </div>
    </div>
  );
}
