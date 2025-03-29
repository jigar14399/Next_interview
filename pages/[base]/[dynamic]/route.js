import React from "react";
import Link from "next/link";

export default () => {
  return (
    <>
      <h1>Route</h1>
      <Link href={"/"}>
        <a>Main (No server hit)</a>
      </Link>
    </>
  );
};
