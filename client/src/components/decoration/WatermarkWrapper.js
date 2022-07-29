import React from 'react';
import Hider from '../layout/Hider';

const WatermarkWrapper = ({ className }) => (
  <div className={className}>
    <Hider hideOnMobile>
    </Hider>
  </div>
);

export default WatermarkWrapper;
