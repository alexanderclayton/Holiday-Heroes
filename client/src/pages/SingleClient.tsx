//import//
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type TClient = {
  _id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: number;
  colors: string;
  paid: boolean;
};

export const SingleClient: React.FC = () => {
  const [client, setClient] = useState<TClient>({} as TClient);
  const { id } = useParams();

  useEffect(() => {
    const fetchClient = async () => {
      const clientResponse = await fetch(`http://localhost:5000/clients/${id}`);
      const newClient = await clientResponse.json();
      setClient(newClient);
      console.log(newClient);
    };
    fetchClient();
  }, []);

  if (!client) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p>{client.name}</p>
      <p>{client.address}</p>
      <p>{client.city}</p>
      <p>{client.state}</p>
      <p>{client.zipCode}</p>
      <p>{client.colors}</p>
      {client.paid ? <p>Paid</p> : <p>Not Paid</p>}
    </div>
  );
};
