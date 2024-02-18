import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { formatMonth } from "./graph";
import data from "../assets/data/data.json";

export default function CalendarComp() {
  const [value, onChange] = useState<any>(new Date());
  const str: String =
    "" +
    value.getDate() +
    " " +
    formatMonth(value.getMonth()) +
    " " +
    (value.getYear() - 100);
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <Calendar onChange={onChange} value={value} />
          </Col>
          <Col>
            <div className="panel">
              <div className="panelhead pt-2 pb-1 px-4">
                <h5>
                  Date : {value.getDate()}
                  {"  "}
                  {formatMonth(value.getMonth())}
                  {"  "}
                  {value.getYear() - 100}
                </h5>
                <hr />
              </div>
              <div className="panelbody">
                {data.map((event, index) => (
                  <div key={index}>
                    {event.date == str ? (
                      <ul>
                        {event.events.map((eventName, i) => (
                          <li key={i}>{eventName}</li>
                        ))}
                      </ul>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
