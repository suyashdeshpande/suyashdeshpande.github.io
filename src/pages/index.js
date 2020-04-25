import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} ·{/* {config.phone} · */}
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Learn new technologies and grow every day.
            <br />
            <strong>Hire Me,</strong> we will grow together!!
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a target="__blank" key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineering Intern</h3>
              <div className="subheading mb-3">ServiceNow</div>
              <p>
                <ul>
                  <li>Worked on universal ticket management system.</li>
                  <li>
                    Integrated the ML model shipped by ML team into the current
                    product.
                  </li>
                  <li>Designed & developed UI using Angular.</li>
                  <li>
                    Reduced human efforts by writing automation tests in JUnit
                    framework.
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Jan 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineering Intern</h3>
              <div className="subheading mb-3">Appointy</div>
              <p>
                <ul>
                  <li>
                    Worked on the company’s ongoing Enterprise Deal with Google
                    (Google REWS Scheduling Software).
                  </li>
                  <li>
                    Improved code efficiency and maintainability by at least 20%
                    by developing a JS package for form to prevent redundant
                    HTML, CSS, JS.
                  </li>
                  <li>
                    Introduced and integrated the web accessibility. Made the
                    software AA accessible.
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2018 - Feb 2019</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
          </ul>

          <div className="subheading">Experienced</div>
          <ul className="fa-ul mb-3">
            <li>
              <i className="fa-li fa fa-check"></i>
              C++, Javascript
            </li>
          </ul>
          <div className="subheading">Intermediate</div>
          <ul className="fa-ul mb-3">
            <li>
              <i className="fa-li fa fa-check"></i>
              ReactJS, Angular 6+, HTML, CSS, Git
            </li>
          </ul>
          <div className="subheading">Familiar</div>
          <ul className="fa-ul mb-3">
            <li>
              <i className="fa-li fa fa-check"></i>
              Java, SQL, Flutter
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="projects"
      >
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Blogging Website</h3>
              <p>
                <ul>
                  <li>
                    Created a blogging website with functionality of CRUD opera-
                    tions on blogs.
                  </li>
                  <li>
                    Designed &amp; developed route based components in ReactJS.
                  </li>
                  <li>Used Redux to maintain a centralized state..</li>
                  <li>
                    <strong>Technologies Used:</strong> ReactJS, Redux,
                    Typescript, HTML, CSS, Java, SpringBoot
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">ngx-forms</h3>
              <p>
                <ul>
                  <li>
                    Created a library for forms for angular applications..
                  </li>
                  <li>
                    Implemented all validations that can be injected from above
                    to prevent invalid data entry.
                  </li>
                  <li>
                    <strong>Technologies Used:</strong> Angular 6, Typescript
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">GPA Calculator</h3>
              <p>
                <ul>
                  <li>
                    Developed a GPA calculator to verify target the required GPA
                    and verify if it achievable or not.
                  </li>
                  <li>
                    Added validations on form to prevent invalid data entry.
                  </li>
                  <li>
                    <strong>Link:</strong>https://knowyourgpa.netlify.com
                  </li>
                  <li>
                    <strong>Technologies Used:</strong> Angular 8, Typescript
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Sorting Visualizer</h3>
              <p>
                <ul>
                  <li>Developed a website to visualize sorting algorithms.</li>
                  <li>Implemented Merge Sort algorithm.</li>
                  <li>
                    <strong>Link:</strong>{' '}
                    https://sorting-visualizer.netlify.com
                  </li>
                  <li>
                    <strong>Technologies Used:</strong> ReactJS
                  </li>
                </ul>
              </p>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">ngx-upload</h3>
              <p>
                <ul>
                  <li>Developed an image uploader & cropper.</li>
                  <li>
                    Integrated the functionality of multiple cropping of image.
                  </li>
                  <li>
                    Converted the image to base64 format to reduce the size of
                    image.
                  </li>
                  <li>
                    <strong>Technologies Used:</strong> Angular 6, Typescript
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">NIT Bhopal</h3>
              <div className="subheading mb-3">Bachelor of Technology</div>
              <div>Computer Science & Engineering</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2016 - 20</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
