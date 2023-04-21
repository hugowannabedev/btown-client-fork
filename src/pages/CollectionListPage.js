/* import axios from "axios";
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
    <div className="container">
      {isLoggedIn && (
        <div className="row">
          <div className="col-md-8">
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
          </div>
          <div className="col-md-4">
            <AllCollections />
          </div>
        </div>
      )}
    </div>
    
  )

}

export default CollectionList;
 */

import axios from "axios";
import CreateCollection from "../components/CreateCollection";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import AllCollections from "../components/AllCollections"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="container">
      {isLoggedIn && (
        <main>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
            
                <CreateCollection refreshCollections={getMyCollections} />
              </div>
            </div>
            <div className="album py-5 bg-light">
            <h1 className="fw-light">My Collections</h1>
            <hr />
              <div className="container">
                <div className="row">
                  {collection.map((collection) => (
                    <div key={collection._id} className="col-md-4">
                      <div className="card mb-4 shadow-sm">
                        <img src={collection.imageUrl} alt={collection.name} />
                        <div className="card-body">
                          <p className="card-text">{collection.description}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <Link to={`/collection/${collection._id}`} className="btn btn-sm btn-outline-secondary">
                                View Collection
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="py-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="fw-light col-md-4 mx-auto">
                  
                  <AllCollections />
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  )
}

export default CollectionList;