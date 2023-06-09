/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Card, CardBody, CardTitle, Badge } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import data from '../../data/products';

const RecentOrders = () => {
  return (
    <Card>
      <div className="position-absolute card-top-buttons">
        <button type="button" className="btn btn-header-light icon-button">
          <i className="simple-icon-refresh" />
        </button>
      </div>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.recent-orders" />
        </CardTitle>
        <div className="scroll dashboard-list-with-thumbs">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {data.slice(0, 6).map((order, index) => {
              return (
                <div key={index} className="d-flex flex-row mb-3">
                  <div
                    // to={`/app/products/details/${order.id}`}
                    className="d-block position-relative"
                    style={{ minWidth: 150 }}
                  >
                    <img
                      style={{ minWidth: 150 }}
                      src={order.img}
                      alt={order.title}
                      className="list-thumbnail border-0"
                    />
                    {/*<Badge*/}
                    {/*  key={index}*/}
                    {/*  className="position-absolute badge-top-left"*/}
                    {/*  color={order.statusColor}*/}
                    {/*  pill*/}
                    {/*  style={{ left: 0 }}*/}
                    {/*>*/}
                    {/*  {order.status}*/}
                    {/*</Badge>*/}
                  </div>

                  <div className="pl-3 pt-2 pr-2 pb-2">
                    <div>
                      <p
                        style={{ marginBottom: 2 }}
                        className="list-item-heading"
                      >
                        {order.title}
                      </p>
                      <div className="pr-4">
                        <span
                          style={{ color: 'black !important' }}
                          className="normal-text mb-1"
                        >
                          {order.status}
                        </span>
                        <p className="text-muted mb-1 text-small">
                          {order.description}
                        </p>
                      </div>
                      <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                        {order.createDate}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
};
export default RecentOrders;
