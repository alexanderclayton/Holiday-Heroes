//import//
import { useState } from "react";

export const AddClient: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipCode, setZipCode] = useState<number>(0);
  const [colors, setColors] = useState<string>("");
  const [paid, setPaid] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:5000/clients", {
      method: "POST",
      body: JSON.stringify({
        name,
        address,
        city,
        state,
        zipCode,
        colors,
        paid,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(name, address, city, colors, paid)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="client-name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
            id="client-name"
            className="border"
          />
        </div>
        <div>
          <label htmlFor="client-address">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAddress(e.target.value);
            }}
            id="client-address"
            className="border"
          />
        </div>
        <div>
          <label htmlFor="client-city">City</label>
          <input
            type="text"
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCity(e.target.value);
            }}
            id="client-city"
            className="border"
          />
        </div>
        <div>
          <label htmlFor="client-state">State</label>
          <input
            type="text"
            value={state}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setState(e.target.value);
            }}
            id="client-state"
            className="border"
          />
        </div>
        <div>
          <label htmlFor="client-zip">Zip Code</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setZipCode(parseInt(e.target.value));
            }}
            id="client-zip"
            className="border"
          />
        </div>
        <div>
          <label htmlFor="client-colors">Colors</label>
          <input
            type="text"
            value={colors}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setColors(e.target.value);
            }}
            id="client-colors"
            className="border"
          />
        </div>
        <div>
          <label htmlFor="client-paid">Paid</label>
          <input
            type="checkbox"
            onChange={() => {
              setPaid(!paid);
            }}
            id="client-paid"
          />
        </div>
        <button className="bg-green-300 p-2 rounded-lg">Add Client</button>
      </form>
    </>
  );
};
