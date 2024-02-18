import { Container } from "react-bootstrap";

export default function Loan() {
  const form = (
    <Container className="cont">
      <div className="main">
        <h1>Apply For a Loan</h1>
        <br />
        <a className="link" href="">
          Terms & Conditions
        </a>
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
          <label className="labels" htmlFor="last">
            Enter Bank Name:
          </label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Enter Bank Name:"
            required
          />
          <label className="labels" htmlFor="last">
            Account No.
          </label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Enter your Account No."
            required
          />
          <label className="labels" htmlFor="last">
            Account Holder Name:
          </label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Enter Account Holder Name"
            required
          />
          <label className="labels" htmlFor="last">
            Branch Name:
          </label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Enter Branch"
            required
          />
          <label className="labels" htmlFor="last">
            Loan Amount:
          </label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Enter Bank Name:"
            required
          />
          <label className="labels" htmlFor="last">
            Confirm Loan Amount:
          </label>
          <input
            type="text"
            id="last"
            name="last"
            placeholder="Confirm Loan Amount"
            required
          />
          <label className="labels" htmlFor="image">
            Upload Id Proof:
          </label>
          <input id="image" name="image" type="file" />
          <div className="wrap">
            <button className="buttons" type="submit">
              Apply
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
  return form;
}
