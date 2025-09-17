import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <button id="wd-add-assignment-quiz">+ Quiz</button>
      <button id="wd-add-assignment-exam">+ Exam</button>
      <button id="wd-add-assignment-project">+ Project</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>{" "}
          <p>
            Multiple Modules | <b>Not Available Until</b> May 6 at 12:00AM |
            <br />
            <b>Due </b>May 13 at 11:59 PM | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A2 - CSS + Bootstrap
          </Link>{" "}
          <p>
            Multiple Modules | <b>Not Available Until</b> May 13 at 12:00AM |
            <br />
            <b>Due </b>May 20 at 11:59 PM | 100 pts
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A3 - JS + React
          </Link>{" "}
          <p>
            Multiple Modules | <b>Not Available Until</b> May 20 at 12:00AM |
            <br />
            <b>Due </b>May 27 at 11:59 PM | 100 pts
          </p>
        </li>
      </ul>
    </div>
  );
}
