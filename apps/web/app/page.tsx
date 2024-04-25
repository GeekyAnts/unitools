"use client";
import Link from "@unitools/link";
import React from "react";
import useRouter from "@unitools/router";

const App = () => {
  const router = useRouter();

  return (
    <div>
      <Link asChild href="/Second">
        <button> Go to tabs</button>
      </Link>
      <button
        onClick={() => {
          router.push("/Second");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
