// import { useEffect, useState } from "react";
import "./home.css";
// import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post("http://localhost:3000/auth");
  //       setData(response.data);
  //       console.log(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className="home" style={{ width: "100dvw" }}>
      <div className="row" style={{ width: "100%", height: "100%" }}>
        <div className="col left">
          <img
            className="icon"
            style={{ width: "100%" }}
            src="/images/leaf.png"
            alt=""
          />
          <h1>Sophotheque </h1>
        </div>
        <div className="col right">
          <div className="nav">
            <button className="storage">
              <Link
                className="ner"
                style={{ textDecoration: "None", color: "white" }}
                to="/storage"
              >
                {"To Storage Conditions >"}
              </Link>
            </button>
            <button className="Market">
              <Link
                className="ner"
                style={{ textDecoration: "None", color: "white" }}
                to="/market"
              >
                {"Market Info"}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
