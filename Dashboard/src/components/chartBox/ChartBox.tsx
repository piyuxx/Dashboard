import './chartBox.scss';

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


      </div>
    </div>
  );
};

export default ChartBox;
