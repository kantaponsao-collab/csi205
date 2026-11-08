"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto mt-5 flex max-w-5xl gap-4 rounded border border-gray-300 p-3">
      <div className="w-64 shrink-0 rounded border border-gray-300">
        <Image
          src="/home/Me.png"
          alt="Profile Image"
          width={256}
          height={256}
          className="h-auto w-full rounded"
        />
        <div className="p-3 text-sm">
          <b>Kantapon Samosorn</b>, 19 years old
          <br />
          Student ID: <b>68020048</b>
          <br />
          <b>Major:</b> Computer Science and Software Development
          <br />
          Sripatum University (<b>SPU</b>)
        </div>
      </div>
      <div className="text-justify">
        <p>
          <b>About Me</b> I am a Computer Science and Software Development student at Sripatum University. I am passionate about learning web development and constantly improving my coding skills through hands-on projects. Here are my basic skills and experiences:
        </p>

        <ul className="my-3 list-disc space-y-2 pl-6">
          <li>
            <b>Web Development Basics:</b> I have fundamental knowledge of building web pages using HTML, CSS, and JavaScript.
          </li>
          <li>
            <b>Modern Front-End Stack:</b> I am comfortable working with React,
            TypeScript, Tailwind CSS, Node.js and Next.js.
          </li>
          <li>
            <b>Frontend Exploration:</b> I am currently learning modern frontend tools such as React, Next.js, and Tailwind CSS to build cleaner user interfaces.
          </li>
          <li>
            <b>Music & Hobbies:</b> Outside of programming, I enjoy playing the game and listening to music to relax.
          </li>
        </ul>

        <p>
          <b>Thank you for visiting my page!</b>
        </p>
      </div>
    </div>
  );
}
