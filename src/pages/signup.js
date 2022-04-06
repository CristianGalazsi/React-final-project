import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }


    return (
        <div className="Login">
            <Form onSubmit={handleLogin}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

async function handleLogin() {
    console.log('intra');
    const data = await fetch('http://localhost:3005/posts',
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ email: 'puya_1999@yahoo.com', password: 'parolaparola' }),
        }
    ).then((res) => res.json());
    console.log('salut');
    console.log(data);

    // if (!data.accessToken) {
    //   setServerError(data);
    //   return;
    // }

    // login(data);
}
