import React from "react";
import Navbar from "../components/navbar";
import '../App.css';

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <div>
        <h1 className="text-5xl text-center mt-20">Welcome to my coding notes</h1>
        <p className="text-center mt-10">This is a collection of my notes on various coding topics.</p>
      </div>
    </div>
  );
}