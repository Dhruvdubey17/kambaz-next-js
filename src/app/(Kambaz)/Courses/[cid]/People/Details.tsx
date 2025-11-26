"use client";

import { useEffect, useState } from "react";
import { FaUserCircle, FaCheck } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { FormControl } from "react-bootstrap";
import * as client from "../../../Account/client";
import type { User } from "../../../Account/client";

interface PeopleDetailsProps {
  uid: string | null;
  onClose: () => void;
}

export default function PeopleDetails({ uid, onClose }: PeopleDetailsProps) {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);

  const fetchUser = async () => {
    if (!uid) return;
    const fetchedUser = await client.findUserById(uid);
    setUser(fetchedUser);
    setName(`${fetchedUser.firstName} ${fetchedUser.lastName}`);
    setEmail(fetchedUser.email || "");
    setRole(fetchedUser.role);
  };

  const deleteUser = async (userId: string) => {
    await client.deleteUser(userId);
    onClose();
  };

  const saveUser = async () => {
    if (!user) return;
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";
    const updatedUser = { ...user, firstName, lastName, email, role };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    onClose();
  };

  useEffect(() => {
    if (uid) {
      fetchUser();
    }
  }, [uid]);

  if (!uid || !user) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button
        onClick={onClose}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      <div className="text-danger fs-4">
        {!editing && (
          <FaPencil
            onClick={() => setEditing(true)}
            className="float-end fs-5 mt-2 wd-edit"
            style={{ cursor: "pointer" }}
          />
        )}
        {editing && (
          <FaCheck
            onClick={saveUser}
            className="float-end fs-5 mt-2 me-2 wd-save"
            style={{ cursor: "pointer" }}
          />
        )}
        {!editing && (
          <div
            className="wd-name"
            onClick={() => setEditing(true)}
            style={{ cursor: "pointer" }}
          >
            {user.firstName} {user.lastName}
          </div>
        )}
        {editing && (
          <FormControl
            className="w-75 wd-edit-name mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>
      {editing && (
        <>
          <div className="mb-2">
            <label className="form-label">
              <b>Email:</b>
            </label>
            <FormControl
              type="email"
              className="wd-edit-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">
              <b>Role:</b>
            </label>
            <select
              className="form-select wd-edit-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="STUDENT">Student</option>
              <option value="FACULTY">Faculty</option>
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </select>
          </div>
        </>
      )}
      {!editing && (
        <>
          <b>Email:</b> <span className="wd-email">{user.email}</span>
          <br />
          <b>Roles:</b> <span className="wd-roles">{user.role}</span>
          <br />
          <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span>
          <br />
          <b>Section:</b> <span className="wd-section">{user.section}</span>
          <br />
          <b>Total Activity:</b>{" "}
          <span className="wd-total-activity">{user.totalActivity}</span>
        </>
      )}
      <hr />
      <button
        onClick={() => deleteUser(uid)}
        className="btn btn-danger float-end wd-delete"
      >
        Delete
      </button>
      <button
        onClick={onClose}
        className="btn btn-secondary float-end me-2 wd-cancel"
      >
        Cancel
      </button>
    </div>
  );
}
