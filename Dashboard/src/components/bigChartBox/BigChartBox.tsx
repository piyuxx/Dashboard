
import "./bigChartBox.scss";



const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <div className="chartBox">
        <div className="boxInfo">
          <div className="title">
            <span>Impreesions Estimated</span>
          </div>
          <div className="progressBar">
            <div
              className="progress"
              style={{ width: `${106}%`, backgroundColor: 'green' }}
            ></div>
          </div>

          <h1>106 %</h1>


        </div>
      </div>
      <div className="chartBox">
        <div className="boxInfo">
          <div className="title">
            <span>Time in Flight</span>
          </div>
          <div className="progressBar">
            <div
              className="progress"
              style={{ width: `${68}%`, backgroundColor: 'blue' }}
            ></div>
          </div>

          <h1>106 %</h1>


        </div>
      </div>
      <div className="chartBox">
        <div className="boxInfo">
          <div className="title">
            <span>Overall Projected</span>
          </div>
          <div className="progressBar">
            <div
              className="progress"
              style={{ width: `${92}%`, backgroundColor: 'green' }}
            ></div>
          </div>

          <h1>92 %</h1>


        </div>
      </div>
    </div>
  );
};

export default BigChartBox;
