import { Container } from "react-bootstrap";
import "./land.css";

export default function Land() {
  const form = (
    <Container className="cont">
      <div className="main">
        <h1>Rent Your Land</h1>
        <form action="">
          <label className="labels" htmlFor="first">
            First Name:
          </label>
          <input
            type="text"
            id="first"
            name="first"
            placeholder="Enter your first name"
            required
          />
          <label className="labels" htmlFor="last">
            Last Name:
          </label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Enter your last name"
            required
          />
          <label className="labels" htmlFor="address">
            Address:
          </label>
          <textarea
            style={{ width: "100%" }}
            id="address"
            rows={5}
            name="address"
            placeholder="Enter your address"
            required
          />

          <span id="pass"></span>
          <label className="labels" htmlFor="mobile">
            Contact:
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            placeholder="Enter your Mobile Number"
            required
            maxLength={10}
          />
          <label className="labels" htmlFor="date">
            Date Availability Slot:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Enter Date available "
            required
          />
          <label className="labels" htmlFor="image">
            Upload Image:
          </label>
          <input id="image" name="image" type="file" />
          <div className="wrap">
            <button className="buttons" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
  return form;
}
