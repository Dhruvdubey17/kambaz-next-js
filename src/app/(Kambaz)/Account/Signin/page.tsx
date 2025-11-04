// import Link from "next/link";
// import { Button } from "react-bootstrap";
// import { Col, Form, FormControl, Row } from "react-bootstrap";
// export default function Signin() {
//   return (
//     <div id="wd-signin-screen">
//       <h3>Sign In</h3>
//       <Form>
//         <Row className="mb-3" controlId="formHorizontalEmail">
//           <Col sm={10}>
//             <FormControl type="email" placeholder="Email" />{" "}
//           </Col>
//         </Row>
//         <Row className="mb-3" controlId="formHorizontalPassword">
//           <Col sm={10}>
//             <FormControl type="password" placeholder="Password" />{" "}
//           </Col>
//         </Row>
//       </Form>
//       <Link href="/Dashboard" id="wd-signin-btn">
//         {" "}
//         <Button className="button">Sign In</Button>
//       </Link>{" "}
//       <Link href="Signup" id="wd-signup-link">
//         {" "}
//         <Button>Sign Up</Button>
//       </Link>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button, Alert } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import type { AppDispatch } from "../../store";
import * as db from "../../Database";

interface Credentials {
  username: string;
  password: string;
}

interface User {
  _id: string;
  username: string;
  password: string;
  [key: string]: unknown;
}

export default function Signin() {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const signin = () => {
    if (!credentials.username || !credentials.password) {
      setError("Please enter both username and password.");
      return;
    }

    const users: User[] = Array.isArray((db as { users?: User[] }).users)
      ? (db.users as User[])
      : [];

    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (!user) {
      setError("Invalid username or password.");
      return;
    }

    dispatch(setCurrentUser(user));
    router.push("/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="p-4">
      <h1>Sign In</h1>

      <FormControl
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-2"
        placeholder="Username"
        id="wd-username"
      />

      <FormControl
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-2"
        placeholder="Password"
        type="password"
        id="wd-password"
      />

      {error && <Alert variant="danger">{error}</Alert>}

      <Button
        onClick={signin}
        id="wd-signin-btn"
        className="w-100 mb-3"
        variant="primary"
      >
        Sign In
      </Button>
    </div>
  );
}
