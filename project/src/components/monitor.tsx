import axios from "axios";
import { useEffect, useState } from "react";

export default function Monitor() {
  const [value, setValue] = useState(200);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((_prevValue) => Math.floor(Math.random() * (230 - 220)) + 220);
    }, 1000); // 500 milliseconds = 0.5 seconds

    return () => clearInterval(interval);
  }, []);

  const [_result, setResult] = useState(null);
  const fruitname = "Apple";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/match-data",
          { fruitname }
        );
        console.log(response);
        setResult(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="notification">
        <span className="lnr lnr-thumbs-up"></span> Settings applied!
      </div>

      <div className="container">
        <h1 className="Title">Monitor</h1>

        <div className="ConditionsGroup">
          <div className="Conditions">
            <h2 className="Conditions-locationTitle">
              <span className="lnr lnr-apartment"></span> Storage 1
            </h2>
            <div className="Conditions-container">
              <div className="Conditions-value">
                <label>Temprature</label>
                <div className="number">24&deg;</div>
              </div>

              <div className="Conditions-value">
                <label>Humidity</label>
                <div className="number">
                  35<sup>%</sup>
                </div>
              </div>
            </div>
          </div>

          <div className="Conditions Conditions--region">
            <h2 className="Conditions-locationTitle">
              <span className="lnr lnr-earth"></span> Storage 2
            </h2>
            <div className="Conditions-container">
              <div className="Conditions-value">
                <label>Temprature</label>
                <div className="number">28&deg;</div>
              </div>

              <div className="Conditions-value">
                <label>Humidity</label>
                <div className="number">
                  58<sup>%</sup>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="CardGroup">
          <h2 className="CardGroup-title">
            <span className="lnr lnr-cog"></span> Ethylene monitoring
          </h2>
          <div className="Card">
            <h3>
              <span>
                Ethylene levels :
                <span
                  className={
                    "Card-status " +
                    (value < 240 ? "text-success" : "text-danger")
                  }
                >
                  455 ppm
                </span>
              </span>
            </h3>
          </div>
          {/* <div className="Card">
            <span>
              Days until Ripening
              <span className="Card-status">24-01-24</span>
            </span>
          </div> */}
        </div>

        <div className="Presets">
          <h2 className="Presets-title">
            <span className="lnr lnr-database"></span> Cooler status
          </h2>
          <div className="PresetCard">
            Cooler 1<span className="lnr lnr-sun text-success">28&deg;C</span>
          </div>
          <div className="PresetCard">
            Fan 1<span className="lnr lnr-drop text-success">1x</span>
          </div>
          <div className="PresetCard">
            Cooler 2
            <span className="lnr lnr-file-empty text-success">29&deg;C</span>
          </div>
          <div className="PresetCard">
            Fan 2<span className="lnr lnr-file-empty text-danger">4x</span>
          </div>
        </div>

        {/* <div className="Testing">
          <h2 className="Presets-title">
            <span className="lnr lnr-chart-bars"></span> Testing
          </h2>
          <button className="Button togglenotify">Show notification</button>
          <button className="Button">Does nothing</button>
        </div> */}

        <div className="MessageLog">
          <h2 className="MessageLog-title">
            <span className="lnr lnr-bubble"></span> Notification Log
          </h2>
          <ul>
            <li>[ 19-02-24 12:30 pm ] high methelyne levels in container 1</li>
            <li>[ 20-02-24 1:30 pm ] high methelyne levels in container 4</li>
            <li>[ 12-02-24 7:30 am ] high methelyne levels in container 2</li>
            <li>[ 02-02-24 9:30 pm ] high methelyne levels in container 1</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
