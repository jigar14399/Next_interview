import React from "react";
import Link from "next/link";

export default () => {
  return (
    <>
      <h1>Main App</h1>
      <Link href={"/base/dynamic/route"}>
        <a>Dynamic Route (Server hit..)</a>
      </Link>
      <br />
      <Link href={"/[base]/[dynamic]/route"} as="/base/dynamic/route">
        <a>Dynamic Route (No server hit)</a>
      </Link>
    </>
  );
};
