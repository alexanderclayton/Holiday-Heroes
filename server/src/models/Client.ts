import mongoose from 'mongoose'

const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const Client = new Schema({
    name: String,
    address: String,
    city: String,
    colors: String,
    paid: Boolean,
})

const ClientModel = mongoose.model('Client', Client)

export default ClientModel