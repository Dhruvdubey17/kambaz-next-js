"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl, Button, Alert } from "react-bootstrap";
import * as client from "../client";
import type { AppDispatch } from "../../store";
import { AxiosError } from "axios";

interface SignupUser {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  dob?: string;
  loginId?: string;
  section?: string;
  lastActivity?: string;
  totalActivity?: string;
}

export default function Signup() {
  const [user, setUser] = useState<SignupUser>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "STUDENT",
    dob: "",
    loginId: "",
    section: "",
  });
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const signup = async () => {
    if (!user.username || !user.password) {
      setError("Username and password are required.");
      return;
    }

    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Account/Profile");
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        setError(
          error.response.data.message || "Signup failed. Please try again."
        );
      } else {
        setError("An error occurred during signup. Please try again.");
      }
    }
  };

  return (
    <div className="wd-signup-screen p-4">
      <h1>Sign up</h1>

      <FormControl
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username mb-2"
        placeholder="username"
        id="wd-username"
      />

      <FormControl
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
      />

      <FormControl
        value={user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        className="wd-firstname mb-2"
        placeholder="First Name"
        id="wd-firstname"
      />

      <FormControl
        value={user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        className="wd-lastname mb-2"
        placeholder="Last Name"
        id="wd-lastname"
      />

      <FormControl
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="wd-email mb-2"
        placeholder="Email"
        type="email"
        id="wd-email"
      />

      {error && <Alert variant="danger">{error}</Alert>}

      <Button
        onClick={signup}
        className="wd-signup-btn btn btn-primary mb-2 w-100"
        id="wd-signup-btn"
      >
        Sign up
      </Button>
      <br />
      <Link href="/Account/Signin" className="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
