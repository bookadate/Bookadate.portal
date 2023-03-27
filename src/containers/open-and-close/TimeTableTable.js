import React from 'react';
import { Card, CardBody, CardTitle, Row, Table } from 'reactstrap';
import Select from 'react-select';
import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import CustomSelectInput from '../../components/common/CustomSelectInput';

const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const munites = [0, 15, 30, 45];

const TimeTableTable = () => {
  return (
    <Colxx>
      <Card className="mb-4">
        <CardBody>
          <CardTitle>
            <IntlMessages id="open-close-hour.time-table" />
          </CardTitle>
          <Table bordered>
            <thead>
              <tr>
                <th>Annual Special Days</th>
                <th>Start Time</th>
                <th>End Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">10% drink offer</th>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">25% drink offer</th>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">3 course dinner</th>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">5 course dinner</th>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">10 course dinner</th>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">25% Signature dinner package</th>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
              </tr>
              <tr>
                <th scope="row">Complimentary drinks</th>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
                <td>
                  <Row lg="12">
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={hours.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                    <Colxx>
                      <Select
                        components={{ Input: CustomSelectInput }}
                        className="react-select"
                        classNamePrefix="react-select"
                        name="form-field-name"
                        defaultValue="0"
                        options={munites.map((x, i) => {
                          return { label: x, value: x, key: i };
                        })}
                      />
                    </Colxx>
                  </Row>
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default TimeTableTable;
