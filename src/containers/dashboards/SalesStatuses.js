/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Card, CardBody, CardTitle, Progress } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import data from '../../data/salesStatuses';

const SalesStatuses = ({ cardClass = 'h-100' }) => {
  return (
    <Card className={cardClass}>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.sales-status" />
        </CardTitle>
        {data.map((s, index) => {
          return (
            <div key={index} className="mb-4">
              <p className="mb-2">
                {s.title}
                <span className="float-right text-muted">
                  {s.status}/{s.total}
                </span>
              </p>
              <Progress value={(s.status / s.total) * 100} />
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};
export default SalesStatuses;
