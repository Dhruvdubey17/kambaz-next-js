import Link from "next/link";
export default function Lab2() {
  return (
    <div id="wd-landing-page">
      <div id="wd-name-header">
        <h1>Landing Page</h1>
        <h2>Assignment 1</h2>
        <h3>Dhruv Dubey</h3>
        <h3>Section 5</h3>
      </div>

      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics{" "}
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals{" "}
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz{" "}
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/Dhruvdubey17/kambaz-next-js"
            id="wd-github-link"
          >
            Github{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
