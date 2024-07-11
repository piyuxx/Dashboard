import { Link } from 'react-router-dom';
import './chartBox.scss';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

const ChartBox = (props: Props) => {
  return (
    <div className="chartBoxx">
      <div className="boxInfo">
        <div className="title">
          <span>{props.title}</span>
        </div>
        <div className="progressBar">
          <div
            className="progress"
            style={{ width: `${props.percentage}%`, backgroundColor: props.color }}
          ></div>
        </div>

        <h1>{props.number}</h1>

        {/* Custom progress bar */}

        {/* Chart component */}
        {/* <ResponsiveContainer height="100%"> */}
        {/* Render your chart component here */}
        {/* </ResponsiveContainer> */}
      </div>
    </div>
  );
};

export default ChartBox;
