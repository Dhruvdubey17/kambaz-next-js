import Modules from "../Modules/page";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div id="wd-home">
      <table>
        <tbody>
          <tr>
            <td>
              <button>Collapse All</button>
              <button>View Progress</button>
              <select id="wd-select-one-genre">
                <option value="ALL">Publish All</option>
                <option value="LATEST">Publish Current</option>
              </select>
              <button>Module</button>
            </td>
          </tr>
          <tr>
            <td valign="top" width="70%">
              {" "}
              <Modules />{" "}
            </td>
            <td valign="top">
              {" "}
              <CourseStatus />{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
