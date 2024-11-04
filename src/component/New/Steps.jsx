import React from 'react';
import { Steps } from 'antd';
import { CheckCircleOutlined, LoadingOutlined, ClockCircleOutlined } from '@ant-design/icons';
import './Steps.css';

const { Step } = Steps;

// Updated descriptions for the steps based on your project
const description1 = 'Completed the analysis of existing supply chain operations and identified key areas for improvement in logistics and resource allocation.';
const description2 = 'In progress of designing an optimal supply chain network, including the layout of manufacturing plants and warehouses across North India.';
const description3 = 'Awaiting the implementation phase after finalizing logistics strategies and securing necessary resources for operational launch.';

const Stp = () => (
  <div className="steps-container">
    <h2 className="categories-title">Timeline Report</h2>
    <Steps direction="vertical" current={1} className="custom-steps">
      <Step
        title="Analysis Completed"
        description={description1}
        icon={<CheckCircleOutlined className="finished-icon" />}
      />
      <Step
        title="Designing Network"
        description={description2}
        icon={<LoadingOutlined className="progress-icon" />}
      />
      <Step
        title="Awaiting Implementation"
        description={description3}
        icon={<ClockCircleOutlined className="waiting-icon" />}
      />
    </Steps>
  </div>
);

export default Stp;
