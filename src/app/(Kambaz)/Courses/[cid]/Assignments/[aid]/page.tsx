import Link from "next/link";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assigment Name</h3>
      </label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your web application running on Netlify. The landing page should have
        the following, your full name and section link to all the lab assingment
        and link to Kanbas Application, Links to all relevant source code
        repositories. The kanbas application should have a link to return to the
        landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input type="number" id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-groups">
              <option value="ASSIGNMENT">Assignment</option>
              <option value="QUIZ">Quiz </option>
              <option value="EXAM">Exam</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="Points">Points </option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="Offline">Offline </option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <br />
          </td>
          <td>
            <label>Online Entry Options: </label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="check-genre"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-genre"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotations">Student Annotations</label>
            <br />
            <input type="checkbox" name="check-genre" id="wd-file-uploads" />
            <label htmlFor="wd-file-uploads">File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <br />
            <br />
          </td>
          <td>
            <label htmlFor="wd-assing-to">Assing Assignment to</label>
            <br />
            <select id="wd-assign-to">
              <option value="EVERYONE">Everyone</option>
              <option value="GREATERTHAN">Grade 3.5 or more</option>
              <option value="LESSTHAN">Grade 3.5 or less</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <br />
            <br />
          </td>
          <td>
            <label htmlFor="wd-due-date"> Due </label>
            <br />
            <input type="date" defaultValue="2025-05-13" id="wd-due-date" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>Available from</td>
          <td>Until</td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <input
              type="date"
              defaultValue="2025-05-06"
              id="wd-available-from"
            />
          </td>
          <td>
            <input
              type="date"
              defaultValue="2025-05-13"
              id="wd-available-till"
            />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <br />
          </td>
          <td>
            <Link id="wd-assignment-save-btn" href="/Courses/1234/Assignments/">
              <button>Save</button>
            </Link>
            <Link
              id="wd-assignment-cancel-btn"
              href="/Courses/1234/Assignments/"
            >
              <button>Cancel</button>
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
}
