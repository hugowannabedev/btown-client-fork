/* import {  useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const API_URL = "http://localhost:5005";
 
function CollectionDetailsPage(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [spots, setSpots] = useState([]);
  
  const location = useLocation()
  const collectionId = location.pathname.split('/')[2];
  const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();  
 
  useEffect(() => {
    axios
      .get(`${API_URL}/collection/${collectionId}`, { headers: { Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        const collection = response.data;
        setName(collection.name);
        setDescription(collection.description);
        setSpots(collection.spots);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    
  }, [collectionId]);
  
  const handleFormSubmit = (e) => {                     // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { name, description };
 
    // Make a PUT request to update the project
    axios
      .put(`${API_URL}/collection/${collectionId}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/collection`)
      });
  };

  const deleteCollection = () =>{
 
    axios
    .delete(`${API_URL}/collection/${collectionId}`, { headers: { Authorization: `Bearer ${storedToken}`}})
    .then(() => {
        navigate(`/collection`)
    })

};
  
  return (
    <div className="CollectionDetailsPage">
      <h3>Edit the Collection</h3>
 
      <form onSubmit={handleFormSubmit}>     
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Update Collection</button>
        <button onClick={deleteCollection}>Delete</button>
      </form>
      
      { spots.map(spot => (
        <div>
          <br />
          <div className="spot">{spot.name}</div>
          <div className="spot">{spot.description}</div>
          <div className="spot">{spot.category}</div>
          <br />
        </div>
      ))}
    </div>
  );
}
 
export default CollectionDetailsPage; */


import {  useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button, Card } from "react-bootstrap";



const API_URL = "http://localhost:5005";
 
function CollectionDetailsPage(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [spots, setSpots] = useState([]);
  
  const location = useLocation()
  const collectionId = location.pathname.split('/')[2];
  const storedToken = localStorage.getItem('authToken');
  const navigate = useNavigate();  
 
  useEffect(() => {
    axios
      .get(`${API_URL}/collection/${collectionId}`, { headers: { Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        const collection = response.data;
        setName(collection.name);
        setDescription(collection.description);
        setSpots(collection.spots);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
    
  }, [collectionId]);
  
  const handleFormSubmit = (e) => {                     // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { name, description };
 
    // Make a PUT request to update the project
    axios
      .put(`${API_URL}/collection/${collectionId}`, requestBody, { headers: { Authorization: `Bearer ${storedToken}`}})
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/collection`)
      });
  };

  const deleteCollection = () =>{
 
    axios
    .delete(`${API_URL}/collection/${collectionId}`, { headers: { Authorization: `Bearer ${storedToken}`}})
    .then(() => {
        navigate(`/collection`)
    })

};
  
return (
  <div className="CollectionDetailsPage">
    <h3 className="fw-light">Edit the Collection</h3>
    <Card style={{ width: '28rem', margin: '0 auto' }}>
      <Card.Body>
        <Form onSubmit={handleFormSubmit}>     
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <hr />
          </Form.Group>
          <div className="btn-group" role="group" aria-label="Basic example">
          <Button type="submit" className="btn btn-primary">Update Collection</Button>{' '}
          <Button type="button" className="btn btn-primary active" onClick={deleteCollection} variant="danger">Delete</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
    <br />
    <div className="container album py-5 bg-light" style={{ padding: '20px' }}>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {spots.map((spot) => (
          <div className="col-md-4" key={spot.id}>
            <div className="card">
              <img
                src={spot.image_url}
                className="card-img-top"
                alt={spot.name}
              />
              <div className="card-body">
                <p className="card-text">{spot.description}</p>
                <p className="card-text">
                  <small className="text-muted">{spot.category}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
 
export default CollectionDetailsPage;