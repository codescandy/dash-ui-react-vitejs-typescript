//import node module libraries
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AuthenticationLayout = () => {
  return (
    <section className="bg-light">
      <Container className="d-flex flex-column">
        <Outlet />

        <Link
          to="https://bit.ly/3YoCCRH"
          target="_blank"
          className="btn btn-dark btn-float-button m-5 fs-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-share"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M12.5 17h-6.5v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
            <path d="M16 22l5 -5" />
            <path d="M21 21.5v-4.5h-4.5" />
          </svg>{" "}
          Buy Now
        </Link>
      </Container>
    </section>
  );
};

export default AuthenticationLayout;
