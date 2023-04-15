/* import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function SpotDetailsPage() {
    const { spotId } = useParams();
    const [spot, setSpot] = useState(null);

    const getSpotDetails = () => {
        axios
            .get(`${API_URL}/api/spots/${spotId}`)
            .then((response) => setSpot(response.data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getSpotDetails();
    }, []);

    return (
        <div className="SpotDetailsPage">
            <h1>{spot.title}</h1>
        </div>
    );

}

export default SpotDetailsPage; */