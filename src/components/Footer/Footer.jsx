import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-lg-left  navbar-fixed-bottom ">
      <div className="text-center p-3" style={{ backgroundColor: "#2596be" }}>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a
          className="text-dark"
          href="https://github.com/Abdullah97sh/travel-react"
        >
          Travel Advisor
        </a>
      </div>
    </MDBFooter>
  );
}
