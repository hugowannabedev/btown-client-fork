import axios from "axios";
import CreateCollection from "../components/CreateCollection";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import AllCollections from "../components/AllCollections"
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function CollectionList() {
  const [collection, setCollection] = useState([]);
  const { isLoggedIn } = useContext(AuthContext)

  const storedToken = localStorage.getItem('authToken');

  useEffect(() => {
    getMyCollections();
  }, []);

  const getMyCollections = () => {
    axios.get(`${API_URL}/collection/mycollection`, { headers: { Authorization: `Bearer ${storedToken}` }})
      .then((response) => setCollection(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>

      {isLoggedIn && (
        <>
          <h1>My Collections</h1>
          <CreateCollection refreshCollections={getMyCollections} />

          {collection.map((collection) => (
            <div key={collection._id}>
              <br />
              <h2>{collection.name}</h2>
              <p>{collection.description}</p>
              <Link to={`/collection/${collection._id}`}>
                <button>View Collection</button>
              </Link>
            </div>
          ))}
          <AllCollections />
        </>
      )}
        
    </div>
    
  )

}

export default CollectionList;
