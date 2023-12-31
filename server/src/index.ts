import { config } from "dotenv";
config();

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import Client from "./models/Client";
import Expense from './models/Expense'

const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/clients", async (req: Request, res: Response) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.error(error);
  }
});

app.get("/clients/:id", async (req: Request, res: Response) => {
  try {
    const client = await Client.findById(req.params.id);
    res.json(client);
  } catch (error) {
    console.error(error);
  }
});

app.post("/clients", async (req: Request, res: Response) => {
  try {
    const newClient = new Client({
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      colors: req.body.colors,
      paid: req.body.paid,
    });
    const createdClient = await newClient.save();
    res.json(createdClient);
  } catch (error) {
    console.error(error);
  }
});

app.get('/expenses', async (req: Request, res: Response) => {
  try {
    const expense = await Expense.find()
    res.json(expense)
  } catch (error) {
    console.error(error)
  }
})

app.post('/expenses', async (req: Request, res: Response) => {
  try {
    const newExpense = new Expense({
      name: req.body.name,
      cost: req.body.cost,
      date: req.body.date,
      type: req.body.type
    })
    const createdExpense = await newExpense.save()
    res.json(createdExpense)
  } catch (error) {
    console.error(error)
  }
})

mongoose.connect(process.env.MONGO_URI!).then(() => {
  console.log(`succesfully connected to MongoDB!`);
  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
});
