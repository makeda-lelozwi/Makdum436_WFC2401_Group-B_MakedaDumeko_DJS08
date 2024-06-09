//import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>You get the travel plans, we got the travel vans.</h1>
      <p>Add adventures to your life by joining the #vanlife movement.  Rent the perfect van to make your perfect road trip.</p>
      <Link to="vans">Find you van</Link>
    </div>
  )
}