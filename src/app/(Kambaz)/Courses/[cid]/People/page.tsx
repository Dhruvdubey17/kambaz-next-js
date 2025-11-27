"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "./Table/page";
import * as client from "../../client";
import type { User } from "../../../Account/client";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const enrolledUsers = await client.findUsersForCourse(cid as string);
    setUsers(enrolledUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, [cid]);

  return (
    <div>
      <PeopleTable users={users} fetchUsers={fetchUsers} />
    </div>
  );
}
