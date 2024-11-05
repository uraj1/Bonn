import React from 'react';
import { Steps } from 'antd';
import { CheckCircleOutlined, LoadingOutlined, ClockCircleOutlined } from '@ant-design/icons';
import './Steps.css';

const { Step } = Steps;

const description1 = 'Data collection and preparation: Loaded demand data for various products across North India, ensuring accuracy by removing irrelevant columns and renaming fields.';
const description2 = 'Demand aggregation: Aggregated monthly demand by sub-district, analyzing the distribution to identify areas with the highest needs.';
const description3 = 'Preliminary analysis: Analyzed the demand to gain insights into regional requirements and prioritize high-demand locations.';
const description4 = 'Clustering and facility location: Applied clustering to segment regions and identify optimal locations for manufacturing plants and warehouses.';
const description5 = 'Optimization modeling: Built an optimization model to determine the ideal number and location of plants, taking into account capacity and demand needs.';
const description6 = 'Network design and visualization: Designed a supply chain network layout using geospatial tools to visualize potential locations and routes.';
const description7 = 'Finalized strategy and awaiting implementation: Reviewed logistics strategies and are in the process of securing resources for the operational launch phase.';

const Stp = () => (
  <div className="steps-container">
    <h2 className="categories-title">Project Timeline</h2>
    <Steps direction="vertical" current={6} className="custom-steps">
      <Step
        title="Data Collection and Preparation"
        description={description1}
        icon={<CheckCircleOutlined className="finished-icon" />}
      />
      <Step
        title="Demand Aggregation"
        description={description2}
        icon={<CheckCircleOutlined className="finished-icon" />}
      />
      <Step
        title="Preliminary Analysis"
        description={description3}
        icon={<CheckCircleOutlined className="finished-icon" />}
      />
      <Step
        title="Clustering and Facility Location"
        description={description4}
        icon={<LoadingOutlined className="progress-icon" />}
      />
      <Step
        title="Optimization Modeling"
        description={description5}
        icon={<LoadingOutlined className="progress-icon" />}
      />
      <Step
        title="Network Design and Visualization"
        description={description6}
        icon={<LoadingOutlined className="progress-icon" />}
      />
      <Step
        title="Finalized Strategy and Awaiting Implementation"
        description={description7}
        icon={<ClockCircleOutlined className="waiting-icon" />}
      />
    </Steps>
  </div>
);

export default Stp;
