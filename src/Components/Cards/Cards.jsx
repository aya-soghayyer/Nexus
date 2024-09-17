import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import discover from "../../assets/discover.jpg";
import style from "../Cards/Cards.module.css";

const Cards = () => {
  const [json, setJson] = useState([]);

  useEffect(() => {
    axios
      .get("/json.json")
      .then((res) => {
        setJson(res.data);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, []);

  return (
    <>
      <div className="container ">
        <div className="card " style={{ height: "36rem", width: "18rem" }}>
          <img
            className="card-img-top"
            src={discover}
            alt="Card image cap"
            style={{ height: "14rem", width: "18rem" }}
          />
          <div className="card-body ">
            <h5 className="card-title">Event title</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Date: 1/1/2024</li>
              <li className="list-group-item">Time: 10:00 - 11:00 AM</li>
              <li className="list-group-item">Place: Hebron - Ain sarah</li>
              <li className="list-group-item">
                <p className="card-text ">
                  Discription: Some quick example text to build on the card
                  title and make up the bulk of the card's content.
                </p>
              </li>
            </ul>
          </div>

          <div className="card-body ">
            <a href="#" className="card-link">
              Register link
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
