//import//
import { useState, useEffect } from 'react'
import { AddExpense } from "../components/AddExpense"

type TExpense = {
  _id: string,
  name: string,
  cost: number,
  date: string,
  type: string,
}

export const Expenses: React.FC = () => {
  const [expenses, setExpenses] = useState<TExpense[]>([])
  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    const fetchExpenses = async () => {
      const expenseResponse = await fetch("http://localhost:5000/expenses")
      const newExpenses = await expenseResponse.json()
      setExpenses(newExpenses)
    }
    fetchExpenses()
  }, [])

  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense._id} className='flex w-full justify-between'>
          <p>{expense.name}</p>
          <p>{expense.cost}</p>
          <p>{expense.date}</p>
          <p>{expense.type}</p>
        </div>
      ))}
      <button onClick={() => setModal(!modal)} className='bg-green-200 p-2 rounded-lg'>Add Expense</button>
      {modal && <AddExpense setModal={setModal} />}
    </div>
  )
}
