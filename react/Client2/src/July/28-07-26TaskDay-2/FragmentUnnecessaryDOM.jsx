import React from "react";

function Header() {
  return (
    <>
      <h1>My Website</h1>
      <p>Welcome to my website!</p>
    </>
  );
}

function Footer() {
  return (
    <React.Fragment>
      <p>© 2026 My Website</p>
      <p>All rights reserved.</p>
    </React.Fragment>
  );
}

function FragmentUnnecessaryDOM() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default FragmentUnnecessaryDOM