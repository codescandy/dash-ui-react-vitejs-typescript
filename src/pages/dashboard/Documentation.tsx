// import node module libraries
import { Card, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <Container fluid className="p-6">
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="border-bottom pb-4 mb-4 d-md-flex justify-content-between align-items-center">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-0 h2 fw-bold">
                Dash UI React With Vite and TypeScript
              </h1>
              <p className="mb-0">
                Welcome to the Dash UI React JS version of the original Dash UI
                theme.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={7} md={12} sm={12}>
          <Card>
            <Card.Body>
              <h2 className="fw-bold">Getting Started</h2>
              <p className="lead">
                A professional Dash UI React Kit built with Vite, ReactJS, and
                TypeScript, offering a comprehensive set of ready-to-use
                components to help you create stunning web applications. The
                Dash UI Kit is designed with ReactJS and utilizes Vite as the
                modern build tool for faster development and optimized
                performance. This documentation will guide you through the
                structure of the Dash UI Kit, provide an overview of
                customization options, and explain how to compile the source
                code if you need to extend or modify the theme
              </p>

              <p>
                Dash UI Kit is built with the most popular front-end framework{" "}
                <Link
                  to="https://react-bootstrap.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ReactJS Bootstrap
                </Link>{" "}
                with react-scripts.
              </p>
              <p>
                Here’s the updated version of that sentence for React, Vite, and
                TypeScript: This documentation will help you understand how the
                Dash UI React Kit is organized, the basics of customizing it,
                and how to compile it from the source code if you wish to extend
                or modify the theme.
              </p>

              <hr className="mb-5 mt-5" />

              <h2 className="mb-0 fw-bold">Running in Local environment</h2>
              <p>This project is scaffolded using npm create vite@latest.</p>

              <ol>
                <li>
                  <h4 className="mb-0 fw-bold">Requirements Node.js</h4>
                  <p>
                    Before proceeding you&apos;ll need to have the latest stable{" "}
                    <Link
                      to="https://nodejs.org/en/download/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      nodejs.
                    </Link>{" "}
                    Install <code>Node.js</code> or already have it installed on
                    your machine move to next step.
                  </p>
                </li>
                <li>
                  {" "}
                  <h4 className="mb-0 fw-bold">Install Dash UI ReactJS</h4>
                  <p>
                    Open the <span>dash-ui-react-vitejs-typescript </span>
                    directory with your cmd or terminal. Open the project folder
                    and install its dependencies.{" "}
                  </p>
                  <pre className="prism-code language-jsx mb-2 bg-dark text-white fs-5">
                    cd dash-ui-react-vitejs-typescript{" "}
                  </pre>
                  <pre className="prism-code language-jsx mb-2  bg-dark text-white fs-5">
                    npm install{" "}
                  </pre>
                  <p>
                    This command will download all the necessary dependencies
                    for dash UI in the node_modules directory.
                  </p>
                </li>
                <li>
                  <h4 className="mb-0 fw-bold">Start</h4>
                  <p>
                    Run <code>npm run dev</code> or <code>yarn run dev</code> or{" "}
                    <code>pnpm run dev</code> to start the development server on
                    http://localhost:5173
                  </p>
                  <p>
                    Visit{" "}
                    <code>
                      <Link
                        to="http://localhost:5173"
                        target="_blank"
                        rel="noreferrer"
                      >
                        http://localhost:5173{" "}
                      </Link>
                    </code>{" "}
                    to view your application
                  </p>
                  <p>
                    Edit <code>src/main.tsx</code> and see the updated result in
                    your browser
                  </p>
                  <pre className="prism-code language-jsx  bg-dark text-white fs-5">
                    npm run dev
                  </pre>
                </li>
              </ol>
              <hr className="mb-5 mt-5" />
              <h2 className="mb-0 fw-bold">Creating a Production Build.</h2>
              <p>Production build of your app.</p>
              <ol>
                <li>
                  <div className="mb-4">
                    <p>
                      Run <code>npm run build</code> command in your project
                      directory to make the Production build app.
                    </p>
                    <pre className="prism-code language-jsx mb-2 bg-dark text-white fs-5">
                      npm run build
                    </pre>
                  </div>
                </li>
                <li>
                  <div className="">
                    <p>
                      {" "}
                      This output is generated inside the <code>
                        .dist
                      </code>{" "}
                      folder:
                    </p>
                    <pre className="prism-code language-jsx  bg-dark text-white fs-5 mb-2">
                      npm run preview
                    </pre>
                    <p>
                      Once you execute above command, the production build run
                      locally at <code>http://localhost:4173</code>.
                    </p>
                  </div>
                </li>
              </ol>

              <hr className="mb-5 mt-5" />
              <h2 className="mb-0 fw-bold">API Demo:</h2>
              <p>
                Here is an API demo using fetch ,{" "}
                <Link to="/pages/api-demo">
                  {" "}
                  <code>click here</code>
                </Link>
              </p>

              <hr className="mb-5 mt-5" />
              <h2 className="mb-0 fw-bold">File Structure:</h2>
              <p>
                Inside the zip-file you&apos;ll find the following directories
                and files. Both compiled and minified distrubution files, as
                well as the source files are included in the package.
              </p>

              <code>
                <pre>
                  {`
theme/
├── .eslintrc.json
├── .gitignore
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.json
├── tsconfig.node.json
├── package-lock.json
├── package.json
├── vite.config.ts
├── README.md
├── src/
  ├── data/
  ├── assets/
  ├── bootstrap-components/
  ├── components/
  ├── hooks/
  ├── layouts/
  ├── pages/
  ├── public/
  │   ├── fonts
  │   ├── images
  │   └── favicon.ico
  ├── routes/
  ├── styles/
  ├── sub-components/
  └── widgets/
`}
                </pre>
              </code>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Documentation;
