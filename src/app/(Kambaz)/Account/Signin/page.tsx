import Link from "next/link";
import { Button } from "react-bootstrap";
import { Col, Form, FormControl, Row } from "react-bootstrap";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign In</h3>
      <Form>
        <Row className="mb-3" controlId="formHorizontalEmail">
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />{" "}
          </Col>
        </Row>
        <Row className="mb-3" controlId="formHorizontalPassword">
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />{" "}
          </Col>
        </Row>
      </Form>
      <Link href="/Dashboard" id="wd-signin-btn">
        {" "}
        <Button className="button">Sign In</Button>
      </Link>{" "}
      <Link href="Signup" id="wd-signup-link">
        {" "}
        <Button>Sign Up</Button>
      </Link>
    </div>
  );
}
