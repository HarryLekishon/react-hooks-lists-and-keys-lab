import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linklist = links.map((elem) => (
    <a key={elem} href={"#"+ elem}>{elem}</a>
  ))
  return <nav>
    {linklist}
  </nav>;
}


export default NavBar;
