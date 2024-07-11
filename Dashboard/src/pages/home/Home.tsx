import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import Users from "../users/Users";
import {
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,

} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="first">
        <div className="box box1">
          <TopBox />
        </div>

        <div className="box box2">
          <PieChartBox />
        </div>
      </div>
      <div className="chartBox">
        <div className="box box3 box4">
          <ChartBox {...chartBoxProduct} />

        </div>

        <div className="box box3 box4">
          <ChartBox {...chartBoxConversion} />
        </div>
        <div className="box box3 box4">
          <ChartBox {...chartBoxRevenue} />
        </div>
        <div className="box box3 box4">
          <ChartBox {...chartBoxRevenue} />
        </div>
      </div>
      <div className="bars">
        <div className="box box3">
          <BigChartBox />
        </div>
        <div></div>
      </div>
      <div className="box box3">
        <Users />
      </div>

    </div>
  );
};

export default Home;
