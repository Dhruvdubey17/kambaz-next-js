"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button, Alert } from "react-bootstrap";
import { setCurrentUser } from "../reducer";
import type { AppDispatch } from "../../store";
import * as client from "../client";
import type { Credentials } from "../client";
import { AxiosError } from "axios";

export default function Signin() {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const signin = async () => {
    if (!credentials.username || !credentials.password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      const user = await client.signin(credentials);
      if (!user) {
        setError("Invalid username or password.");
        return;
      }
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        setError(
          error.response.data.message || "Sign in failed. Please try again."
        );
      } else {
        setError("An error occurred during sign in. Please try again.");
      }
    }
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
