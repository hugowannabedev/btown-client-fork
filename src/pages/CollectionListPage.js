import axios from "axios";
import CreateCollection from "../components/CreateCollection";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";



const API_URL = "http://localhost:5005";

function CollectionList() {
  const [collection, setCollection] = useState([]);

  const { isLoggedIn, user } = useContext(AuthContext)

  useEffect(() => {
    getMyCollections();
  }, []);

  const getMyCollections = () => {
    axios.get(`${API_URL}/collection`)
    //axios.get(`${API_URL}/collection?userId=${user._id}`)
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
              <h2>{collection.name}</h2>
              <p>{collection.description}</p>
            </div>
          ))}
        </>
      )}
        

    </div>
    
  )


}

export default CollectionList;
