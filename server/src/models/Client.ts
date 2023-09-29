import mongoose from 'mongoose'

const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const ClientSchema = new Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zipCode: Number,
    colors: String,
    paid: Boolean,
})

const ClientModel = mongoose.model('Client', ClientSchema)

export default ClientModel