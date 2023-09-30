//import//
import { useState } from "react";

interface AddExpenseProps {
    setModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddExpense: React.FC<AddExpenseProps> = ({setModal}) => {
  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [type, setType] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
        await fetch("http://localhost:5000/expenses", {
            method: "POST",
            body: JSON.stringify({
                name,
                cost,
                date,
                type,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="expense-name">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
            id="expense-name"
            className="border"
          />
        </div>
        <div>
          <label htmlFor="expense-cost">Cost</label>
          <input
            type="number"
            value={cost}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCost(parseInt(e.target.value));
            }}
            id="expense-cost"
            className="border"
          />
        </div>
        <div>
          <label htmlFor="expense-date">Date</label>
          <input
            type="text"
            value={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDate(e.target.value);
            }}
            id="expense-date"
            className="border"
          />
        </div>
        <div>
          <label htmlFor="expense-type">Type</label>
          <input
            type="text"
            value={type}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setType(e.target.value);
            }}
            id="expense-type"
            className="border"
          />
        </div>
        <button className="bg-green-300 p-2 rounded-lg">Add Expense</button>
        <button onClick={() => setModal(false)} className="bg-red-300 p-2 rounded-lg">Cancel</button>
      </form>
    </>
  );
};
