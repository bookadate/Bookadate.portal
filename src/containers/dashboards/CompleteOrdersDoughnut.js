import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import { DoughnutChart, PolarAreaChart } from '../../components/charts';

import { doughnutChartData, doughnutChartDataCompleted, doughnutChartDataPending, polarAreaChartCompletedOrderData, polarAreaChartData, polarAreaChartPendingOrderData } from '../../data/charts';

const CompleteOrdersDoughnut = () => {
  return (

    <Card className="h-40">
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.completed-orders" />
        </CardTitle>

        {/* <div className="dashboard-donut-chart">
          <DoughnutChart shadow data={doughnutChartDataCompleted} />
        </div> */}
        <div className="chart-container">
          <PolarAreaChart shadow data={polarAreaChartCompletedOrderData} />
        </div>
      </CardBody>
    </Card>

  );
};
export const PendingOrdersDoughnut = () => {
  return (

    <Card className="h-40">
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.pending-orders" />
        </CardTitle>

        {/* <div className="dashboard-donut-chart">
          <DoughnutChart shadow data={doughnutChartDataPending} />
        </div> */}
        <div className="chart-container">
          <PolarAreaChart shadow data={polarAreaChartPendingOrderData} />
        </div>
      </CardBody>
    </Card>

  );
};

export default CompleteOrdersDoughnut;
