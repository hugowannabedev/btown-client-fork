import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
            <div className="CreateCollection">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <br/>
            <div className="CreateCollection">
                <label htmlFor="description">Description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                ></textarea>
            </div>
            <br/>
            
            <br />
            <button type="submit">Create a Collection</button>
            {/* <Link to="/collection">{" "}<button type="submit">Cancel</button></Link> */}
        </form>
    )
}

export default CreateCollection


