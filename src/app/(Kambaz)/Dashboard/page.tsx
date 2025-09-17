import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (5)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.webp"
              width={200}
              height={150}
              alt="reactimg"
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1200" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.webp"
              width={200}
              height={150}
              alt="reactimg"
            />
            <div>
              <h5> CS1200 CSS </h5>
              <p className="wd-dashboard-course-title">Complete guide to CSS</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link href="/Courses/5000" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.webp"
              width={200}
              height={150}
              alt="reactimg"
            />
            <div>
              <h5> CS5000 Node JS </h5>
              <p className="wd-dashboard-course-title">NodeJS for beginners</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link href="/Courses/2000" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.webp"
              width={200}
              height={150}
              alt="reactimg"
            />
            <div>
              <h5> CS2000 STATS </h5>
              <p className="wd-dashboard-course-title">Stats for AI</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link href="/Courses/6000" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.webp"
              width={200}
              height={150}
              alt="reactimg"
            />
            <div>
              <h5> CS6000 DBMS</h5>
              <p className="wd-dashboard-course-title">
                Database management Course
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link href="/Courses/5011" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.webp"
              width={200}
              height={150}
              alt="reactimg"
            />
            <div>
              <h5> CS5011 PDP Recitation</h5>
              <p className="wd-dashboard-course-title">
                Lab for Programming Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          {" "}
          <Link href="/Courses/5010" className="wd-dashboard-course-link">
            <Image
              src="/images/reactjs.webp"
              width={200}
              height={150}
              alt="reactimg"
            />
            <div>
              <h5> CS5010 PDP</h5>
              <p className="wd-dashboard-course-title">
                Programming Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
