import Link from "next/link";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormSelect,
  Row,
} from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-3">
      <h3>Profile</h3>
      <Form>
        <Row className="mb-3">
          <Col sm={10}>
            <FormControl
              type="text"
              defaultValue="alice"
              placeholder="username"
              className="wd-username"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={10}>
            <FormControl
              type="password"
              defaultValue="123"
              placeholder="password"
              className="wd-password"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={10}>
            <FormControl
              type="text"
              defaultValue="Alice"
              placeholder="First Name"
              id="wd-firstname"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={10}>
            <FormControl
              type="text"
              defaultValue="Wonderland"
              placeholder="Last Name"
              id="wd-lastname"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={10}>
            <FormControl type="date" defaultValue="2000-01-01" id="wd-dob" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={10}>
            <FormControl
              type="email"
              defaultValue="alice@wonderland"
              id="wd-email"
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col sm={10}>
            <FormSelect defaultValue="FACULTY" id="wd-role">
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </FormSelect>
          </Col>
        </Row>
      </Form>

      <Link href="/Account/Signin">
        <Button variant="danger">Sign out</Button>
      </Link>
    </div>
  );
}
