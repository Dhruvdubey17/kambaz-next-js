// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useSelector } from "react-redux";
// import { RootState } from "../store";

// export default function CourseNavigation() {

//   const pathname = usePathname();

//   const links = [
//     { href: "/Account/Signin", label: "SignIn", id: "wd-sign-in-link" },
//     {
//       href: "/Account/Signup",
//       label: "SignUp",
//       id: "wd-sign-up-link",
//     },
//     {
//       href: "/Account/Profile",
//       label: "Profile",
//       id: "wd-profile-link",
//     },
//   ];

//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       {links.map((link) => {
//         const isActive = pathname === link.href;

//         return (
//           <Link
//             key={link.id}
//             href={link.href}
//             id={link.id}
//             className={`list-group-item border-0 ${
//               isActive ? "active" : "text-danger"
//             }`}
//           >
//             {link.label}
//           </Link>
//         );
//       })}
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const pathname = usePathname();

  // Show Signin/Signup if no user is logged in, show Profile if user is logged in
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const href = `/Account/${link}`;
        const isActive = pathname === href;
        return (
          <Link
            key={link}
            href={href}
            id={`wd-account-${link.toLowerCase()}-link`}
            className={`list-group-item border-0 ${
              isActive ? "active" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
