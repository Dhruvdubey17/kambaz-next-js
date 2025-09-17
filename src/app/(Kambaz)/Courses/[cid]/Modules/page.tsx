export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
                <li className="wd-content-item">Set up your environment</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Fullstack Developer - Chapter 1 - Introduction
                </li>
                <li className="wd-content-item">
                  Fullstack Developer - Chapter 2 - Getting environment ready
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Intro to Web Development</li>
                <li className="wd-content-item">
                  Creating a server with Node.js and Express
                </li>
                <li className="wd-content-item">
                  Creating a react application
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">HTML for beginners</li>
                <li className="wd-content-item">
                  Learn how to create user interfaces with HTML
                </li>
                <li className="wd-content-item">Deploy app on netlify</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Intro to HTML and DOM</li>
                <li className="wd-content-item">
                  Formatting web content with headings, paragraphs, lists
                </li>
                <li className="wd-content-item">
                  Adding forms to your web pages
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">CSS Fundamentals</li>
                <li className="wd-content-item">
                  Designing user interfaces with CSS
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Cascading Style Sheets Introduction
                </li>
                <li className="wd-content-item">
                  Adding style to your web pages
                </li>
                <li className="wd-content-item">Using tailwind CSS</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
