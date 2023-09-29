import { config } from 'dotenv'
config()

import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Client from "./models/Client";

const PORT = 5000;

const app = express();

app.use(express.json())

app.post("/clients", async (req: Request, res: Response) => {
  try {
    const newClient = new Client({
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      colors: req.body.colors,
      paid: req.body.paid,
    });
    const createdClient = await newClient.save();
    res.json(createdClient)
  } catch (error) {
    console.error(error);
  }
});

mongoose.connect(process.env.MONGO_URI!).then(() => {
    console.log(`succesfully connected to MongoDB!`);
    app.listen(PORT, () => {
      console.log(`server listening on port ${PORT}`);
    });
  });
