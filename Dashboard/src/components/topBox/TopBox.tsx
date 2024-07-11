import { Button } from '@mui/material';
import './topBox.scss';

const TopBox = () => {
  return (
    <div className="topBox">
      <div className="topBoxHeader">
        <div className="topBoxTitle">
          <h1>Name Of Campaign</h1>
        </div>
        <div className="topBoxDateRange">
          <span>Month Day, Year</span> to <span>Month Day, Year</span>
          <span>(-XX days)</span>
        </div>
      </div>
      <div className="topBoxDetails">
        <p>Objective: Brief Description of Campaign</p>
      </div>

      {/* Additional boxes section */}
      <div className="additionalBoxes">
        <div className="additionalBox" style={{ marginRight: '10px' }}>

          Seller:email@bighappy.co
        </div>
        <div className="additionalBox" style={{ marginRight: '10px' }}>
          Programmatic
        </div>
        <div className="additionalBox" style={{ marginRight: '10px' }}>
          Billing addition
        </div>
        <div className="additionalBox">
          Seat Id:xxxxx
        </div>
      </div>
      <div className="SecondBox" style={{ marginRight: '10px' }}>
        <span>Primary Key</span>
        <span>Secondary Key</span>
        <span>Attribution</span>
      </div>
      <Button className='Button'>Export Job</Button>
    </div>
  );
};

export default TopBox;
