import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/auth.service";
import { Card, Form, Button } from 'react-bootstrap';


//const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    const requestBody = {email, password, name}
    authService.signup(requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  return (
    <Card className="w-50 p-4 mx-auto mt-5">
      <h1 className="text-center mb-4">Signup</h1>

      <Form onSubmit={handleSignupSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmail}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>

        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleName}
          />
        </Form.Group>
        <hr />
        <Button variant="primary" type="submit" block>
          Confirm
        </Button>
      </Form>

      {errorMessage && <p className="error-message mt-3">{errorMessage}</p>}

      <p className="text-center mt-3">If you already have an account please</p>
      <Link to={"/login"} className="d-block text-center">Login here</Link>
    </Card>
  );
}

export default SignupPage;
