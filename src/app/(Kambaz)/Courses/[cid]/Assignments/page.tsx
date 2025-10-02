"use client";

import Link from "next/link";
import { BsGripVertical, BsSearch, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Button, Form, InputGroup } from "react-bootstrap";
import { MdAssignmentAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between mb-3">
        <InputGroup style={{ width: "300px" }}>
          <InputGroup.Text className="bg-white">
            <BsSearch />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Search for Assignments"
            id="wd-search-assignment"
          />
        </InputGroup>
        <div>
          <Button
            variant="secondary"
            className="me-2"
            id="wd-add-assignment-group"
          >
            <BsPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <BsPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>
      <div className="border border-secondary p-3 mb-3 bg-light d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-4" />
          <strong>ASSIGNMENTS</strong>
        </div>
        <div className="d-flex align-items-center">
          <span className="text-muted border border-dark rounded-pill px-3 py-1 me-2">
            40% of Total
          </span>
          <FaPlus className="p-1 me-2 fs-4" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group">
        <li className="wd-assignment-list-item list-group-item p-3 border border-secondary">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <div className="me-3 text-success fs-3">
                <MdAssignmentAdd />
              </div>
              <div>
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-dark fw-bold text-decoration-none"
                >
                  A1
                </Link>
                <div className="text-danger small">Multiple Modules</div>
                <div className="small text-muted">
                  <strong>Not available until</strong> May 6 at 12:00am |
                </div>
                <div className="small text-muted">
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
            </div>
            <div>
              <FaCheckCircle className="text-success fs-4 me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item p-3 border border-secondary">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <div className="me-3 text-success fs-3">
                <MdAssignmentAdd />
              </div>
              <div>
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-dark fw-bold text-decoration-none"
                >
                  A2
                </Link>
                <div className="text-danger small">Multiple Modules</div>
                <div className="small text-muted">
                  <strong>Not available until</strong> May 13 at 12:00am |
                </div>
                <div className="small text-muted">
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
            </div>
            <div>
              <FaCheckCircle className="text-success fs-4 me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
        </li>

        <li className="wd-assignment-list-item list-group-item p-3 border border-secondary">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-4" />
              <div className="me-3 text-success fs-3">
                <MdAssignmentAdd />
              </div>
              <div>
                <Link
                  href="/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-dark fw-bold text-decoration-none"
                >
                  A3
                </Link>
                <div className="text-danger small">Multiple Modules</div>
                <div className="small text-muted">
                  <strong>Not available until</strong> May 20 at 12:00am |
                </div>
                <div className="small text-muted">
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success fs-4 me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
