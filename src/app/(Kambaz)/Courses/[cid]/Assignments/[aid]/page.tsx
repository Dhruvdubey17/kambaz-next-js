import Link from "next/link";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <Form>
        <div className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control type="text" id="wd-name" defaultValue="A1" />
        </div>

        <div className="mb-3">
          <Form.Control
            as="textarea"
            rows={10}
            id="wd-description"
            defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

- Your full name and section
- Links to each of the lab assignments
- Link to the Kanbas application
- Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </div>

        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end">
            Points
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="number" id="wd-points" defaultValue={100} />
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end">
            Assignment Group
          </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZ">QUIZ</option>
              <option value="EXAM">EXAM</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end">
            Display Grade as
          </Form.Label>
          <Col sm={9}>
            <Form.Select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="POINTS">Points</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end">
            Submission Type
          </Form.Label>
          <Col sm={9}>
            <div className="border rounded p-3">
              <Form.Select id="wd-submission-type" className="mb-3">
                <option value="ONLINE">Online</option>
                <option value="OFFLINE">Offline</option>
              </Form.Select>

              <Form.Label className="fw-bold mb-2">
                Online Entry Options
              </Form.Label>

              <Form.Check
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
                className="mb-2"
                defaultChecked
              />
              <Form.Check
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                id="wd-file-uploads"
                label="File Uploads"
              />
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Form.Label column sm={3} className="text-end">
            Assign
          </Form.Label>
          <Col sm={9}>
            <div className="border rounded p-3">
              <Form.Label htmlFor="wd-assign-to" className="fw-bold">
                Assign to
              </Form.Label>
              <Form.Select id="wd-assign-to" className="mb-3">
                <option value="EVERYONE">Everyone</option>
                <option value="GREATERTHAN">Grade 3.5 or more</option>
                <option value="LESSTHAN">Grade 3.5 or less</option>
              </Form.Select>

              <Form.Label htmlFor="wd-due-date" className="fw-bold">
                Due
              </Form.Label>
              <Form.Control
                type="datetime-local"
                id="wd-due-date"
                defaultValue="2024-05-13T23:59"
                className="mb-3"
              />

              <Row>
                <Col>
                  <Form.Label htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-available-from"
                    defaultValue="2024-05-06T00:00"
                  />
                </Col>
                <Col>
                  <Form.Label htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </Form.Label>
                  <Form.Control
                    type="datetime-local"
                    id="wd-available-until"
                    defaultValue="2024-05-13T23:59"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end">
          <Link href="/Courses/1234/Assignments">
            <Button
              variant="secondary"
              className="me-2"
              id="wd-assignment-cancel-btn"
            >
              Cancel
            </Button>
          </Link>
          <Link href="/Courses/1234/Assignments">
            <Button variant="danger" id="wd-assignment-save-btn">
              Save
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
