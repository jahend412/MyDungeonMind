"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center p-12 bg-gray-900">
      <h1 className="text-warmgray-100 text-4xl p-8">
        {" "}
        Welcome to My Dungeon Mind
      </h1>
      <p className="text-emerald-600 text-xl">
        Please sign up or log in to get started!
      </p>
      <div className="space-x-8 text-xl p-8 text-stone-600 ">
        <Link href="login" className=" hover:text-emerald-600">
          Login
        </Link>
        <Link href="signup" className=" hover:text-emerald-600">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
