import { useState, useEffect, useContext } from "react";
import axios from "axios";
import CreateSpot from "../components/CreateSpot";
import { AuthContext } from "../context/auth.context";
//import SpotCard from "../components/SpotCard";


const API_URL = "http://localhost:5005";

function SpotPage() {
  const [spots, setSpots] = useState([]);
  const [collection, setCollection] = useState([]);
  const [collectionId, setCollectionId] = useState();
  const [spotId, setSpotId] = useState();
  const [showForm, setShowForm] = useState(false);


  const {isLoggedIn } = useContext(AuthContext)
  const storedToken = localStorage.getItem('authToken');


  const getAllSpots = () => {

    axios.get(`${API_URL}/spots`)
      .then((response) => setSpots(response.data))
      .catch((error) => console.log(error));
  };

  const addToCollection = (event) => {
    event.preventDefault();
    console.log(collectionId, spotId)
    axios.put(`${API_URL}/collection/${collectionId}/${spotId}`, null, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then(() => {
      setShowForm(false);
    })
    .catch((error) => console.log(error));
    
  }

  const getMyCollections = () => {
    
    axios.get(`${API_URL}/collection/mycollection`, { 
      headers: { Authorization: `Bearer ${storedToken}` }
    })
       
      .then((response) => setCollection(response.data))
      .catch((error) => console.log(error));
  };

  
  useEffect(() => {
    getMyCollections();
    getAllSpots();
  }, []);

  return (
    <div>
      <h1>All Spots</h1>
      
      {isLoggedIn && (
        <>
            <CreateSpot refreshSpots={getAllSpots} />
        </>
      )}
  
      {spots.map((spot) => (
        <div key={spot._id}>
          <h2>{spot.name}</h2>
          <p>{spot.description}</p>
          <p>{spot.category}</p>
          <img src={spot.image} alt={spot.name} />
          {/* // form
          // select 
            //collections.map
          //   options collection._id -->name
          // input hidden spot._id 
          // button submit */}

          {isLoggedIn && (
          <button type="submit" onClick={() => { setShowForm(true); setSpotId(spot._id)}}>Add to collection</button>
          )}
          {showForm && (
            <form onSubmit={addToCollection}>
              <select
                name="collectionId"
                onChange={(event) => {
                  setCollectionId(event.target.value);
                }}
              >
                <option value="">Select a collection</option>
                {collection.map((collection) => (
                  <option key={collection._id} value={collection._id}>
                    {collection.name}
                  </option>
                ))}
              </select>
              <input
                type="hidden"
                name="spotId"
                value={spot._id}
                onChange={(event) => {
                  setSpotId(event.target.value);
                }}
              />
              <button type="submit">Confirm</button>
            </form> 
          )}
        </div>
      ))}
    </div>
  );
}

export default SpotPage;



