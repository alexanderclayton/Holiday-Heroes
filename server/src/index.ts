import { config } from 'dotenv'
config()

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from 'cors'
import Client from "./models/Client";

const PORT = 5000;

const app = express();

app.use(cors())
app.use(express.json())

app.post("/clients", async (req: Request, res: Response) => {
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
    res.json(createdClient)
});

mongoose.connect(process.env.MONGO_URI!).then(() => {
    console.log(`succesfully connected to MongoDB!`);
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  });
