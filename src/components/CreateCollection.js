import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Form, Button, Card } from "react-bootstrap";


const API_URL = "http://localhost:5005";

function CreateCollection({ refreshCollections }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    //const [isPrivate, setisPrivate] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestBody = { name, description };

        const storedToken = localStorage.getItem('authToken');

        axios
            .post(`${API_URL}/collection`,
                requestBody,
                { headers: { Authorization: `Bearer ${storedToken}` } }    
            )
            .then((response) => {
                const createdCollection = response.data

                setName("");
                setDescription("");
                refreshCollections();
                return createdCollection
            })
            .catch((error) => console.log(error))
    };

    return (
        <>
        <h3 className="fw-light">Create the Collection</h3>
    <Card style={{ width: '28rem', margin: '0 auto' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>     
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
          <Button type="submit" className="btn btn-primary">Create Collection</Button>{' '}
          </div>
        </Form>
      </Card.Body>
    </Card>
    </>
    )
}

export default CreateCollection


