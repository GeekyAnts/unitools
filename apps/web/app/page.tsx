"use client";
import Link from "@unitools/link";
import React from "react";
import useRouter from "@unitools/router";
import Image from "@unitools/image";
import Button from "../components/button";

const App = () => {
  const router = useRouter();
  const blurhash = "blur";
  return (
    <div>
      <Link asChild href="/Second">
        <button> Go to tabs</button>
      </Link>
      <Button />
      <Image
        source={require("@/assets/images/splash.png")}
        placeholder={blurhash}
        contentFit="cover"
        alt="dkfjndkb"
        height={200}
        width={200}
      />
    </div>
  );
};

export default App;
