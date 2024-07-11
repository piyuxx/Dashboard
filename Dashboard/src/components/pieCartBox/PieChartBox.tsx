import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

import './pieChartBox.scss';

const DATA = [
  {
    name: 'Budget Left',
    value: 12,
    color: '#6B12D9',
  },
  {
    name: 'Budget Delievered',
    value: 17,
    color: '#E0D0F6',
  },

];

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <div className="chart">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={DATA}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80} // Adjust outerRadius to control the size of the pie
              fill="#8884d8"
              paddingAngle={0}
              label
            >
              {DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default PieChartBox;
