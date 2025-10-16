// import { Table } from "react-bootstrap";
// import { FaUserCircle } from "react-icons/fa";
// export default function PeopleTable() {
//   return (
//     <div id="wd-people-table">
//       <Table striped>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Login ID</th>
//             <th>Section</th>
//             <th>Role</th>
//             <th>Last Activity</th>
//             <th>Total Activity</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Tony</span>{" "}
//               <span className="wd-last-name">Stark</span>
//             </td>
//             <td className="wd-login-id">001234561S</td>
//             <td className="wd-section">S101</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-01</td>
//             <td className="wd-total-activity">10:21:32</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Harry</span>{" "}
//               <span className="wd-last-name">Potter</span>
//             </td>
//             <td className="wd-login-id">001234566S</td>
//             <td className="wd-section">S106</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-21</td>
//             <td className="wd-total-activity">11:21:32</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Bruce</span>{" "}
//               <span className="wd-last-name">Wayne</span>
//             </td>
//             <td className="wd-login-id">001234562S</td>
//             <td className="wd-section">S121</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-01</td>
//             <td className="wd-total-activity">10:21:32</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Michael</span>{" "}
//               <span className="wd-last-name">Jordan</span>
//             </td>
//             <td className="wd-login-id">0012345618</td>
//             <td className="wd-section">S118</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-05</td>
//             <td className="wd-total-activity">10:41:32</td>
//           </tr>
//           <tr>
//             <td className="wd-full-name text-nowrap">
//               <FaUserCircle className="me-2 fs-1 text-secondary" />
//               <span className="wd-first-name">Steve</span>{" "}
//               <span className="wd-last-name">Rogers</span>
//             </td>
//             <td className="wd-login-id">001234564S</td>
//             <td className="wd-section">S131</td>
//             <td className="wd-role">STUDENT</td>
//             <td className="wd-last-activity">2020-10-18</td>
//             <td className="wd-total-activity">10:27:32</td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// }

"use client";
import { useParams } from "next/navigation";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../Database";

export default function PeopleTable() {
  const { cid } = useParams();
  const users = db.users;
  const enrollments = db.enrollments;

  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr: any) =>
              enrollments.some(
                (enrollment: any) =>
                  enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
