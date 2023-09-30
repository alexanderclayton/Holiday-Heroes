import mongoose from 'mongoose'

const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const ExpenseSchema = new Schema({
    name: String,
    cost: Number,
    date: String,
    type: String,
})

const ExpenseModel = mongoose.model('Expense', ExpenseSchema)

export default ExpenseModel