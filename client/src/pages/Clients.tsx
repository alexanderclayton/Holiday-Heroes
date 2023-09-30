//import//
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddClient } from "../components/AddClient";

type TClient = {
  _id: string,
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: number;
  colors: string;
  paid: boolean;
};

export const Clients: React.FC = () => {
  const [clients, setClients] = useState<TClient[]>([]);
  const [modal, setModal] = useState<boolean>(false)

  const navigate = useNavigate()

  useEffect(() => {
    const fetchClients = async () => {
      const clientResponse = await fetch("http://localhost:5000/clients");
      const newClients = await clientResponse.json();
      setClients(newClients);
    };
    fetchClients();
  }, []);

  return (
    <div>
      {clients.map((client) => (
        <div key={client._id} onClick={() => navigate(`/clients/${client._id}`)} className="flex w-full justify-around">
          <p className="w-[25%]">{client.name}</p>
          <p className="w-[25%]">{client.address}</p>
          <p className="w-[25%]">{client.colors}</p>
          {client.paid === true ? <p className="w-[25%]">paid</p> : <p className="w-[25%]">not paid</p>}
        </div>
      ))}
      <button onClick={() => setModal(!modal)} className="bg-green-200 p-2 rounded-lg">Add Client</button>
      {modal && <AddClient setModal={setModal}/>}
    </div>
  );
};
