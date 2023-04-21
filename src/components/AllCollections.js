import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:5005";

function AllCollections() {
  const [collections, setCollections] = useState([]);

  const storedToken = localStorage.getItem('authToken');

  useEffect(() => {
    getAllCollections();
  }, []);

  const getAllCollections = () => {
    axios.get(`${API_URL}/collection/`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((response) => setCollections(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="fw-light">All Collections</h1>
      <hr />
      {collections.map((collection) => (
        <div key={collection._id}>
          <br />
          <h2>{collection.name}</h2>
          <p>{collection.description}</p>
          
        </div>
      ))}
    </div>
  );
}

export default AllCollections;