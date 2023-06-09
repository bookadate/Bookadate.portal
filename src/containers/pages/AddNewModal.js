import React, { useEffect, useState } from 'react';
import {
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Row,
} from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select';
import { DropzoneComponent } from 'react-dropzone-component';
import CustomSelectInput from '../../components/common/CustomSelectInput';
import IntlMessages from '../../helpers/IntlMessages';
import 'dropzone/dist/min/dropzone.min.css';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Colxx } from '../../components/common/CustomBootstrap';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
const ReactDOMServer = require('react-dom/server');

const dropzoneComponentConfig = {
  postUrl: 'https://httpbin.org/post',
};
const dropzoneConfig = {
  thumbnailHeight: 160,
  maxFilesize: 2,
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <div className="dz-preview dz-file-preview mb-3">
      <div className="d-flex flex-row ">
        <div className="p-0 w-30 position-relative">
          <div className="dz-error-mark">
            <span>
              <i />{' '}
            </span>
          </div>
          <div className="dz-success-mark">
            <span>
              <i />
            </span>
          </div>
          <div className="preview-container">
            {/*  eslint-disable-next-line jsx-a11y/alt-text */}
            <img data-dz-thumbnail className="img-thumbnail border-0" />
            <i className="simple-icon-doc preview-icon" />
          </div>
        </div>
        <div className="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative">
          <div>
            {' '}
            <span data-dz-name />{' '}
          </div>
          <div className="text-primary text-extra-small" data-dz-size />
          <div className="dz-progress">
            <span className="dz-upload" data-dz-uploadprogress />
          </div>
          <div className="dz-error-message">
            <span data-dz-errormessage />
          </div>
        </div>
      </div>
      <a href="#/" className="remove" data-dz-remove>
        {' '}
        <i className="glyph-icon simple-icon-trash" />{' '}
      </a>
    </div>
  ),
  headers: { 'My-Awesome-Header': 'header value' },
};
const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const munites = [0, 15, 30, 45];
const AddNewModal = ({ isEdit, product, modalOpen, toggleModal }) => {
  let myDropzone;
  const clear = () => {
    myDropzone.removeAllFiles(true);
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [oldDate, setOldDate] = useState(new Date());
  const [newDate, setNewDate] = useState(new Date());
  const [oldTime, setOldTime] = useState(new Date());
  const [newTime, setNewTime] = useState(new Date());

  useEffect(() => {
    if (isEdit) {
      setStartDate(new Date(product.advertiseStart));
      setEndDate(new Date(product.advertiseEnd));
    }
  }, [isEdit, product]);
  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
        {isEdit ? (
          <IntlMessages id="pages.update-product" />
        ) : (
          <IntlMessages id="pages.add-new-modal-title" />
        )}
      </ModalHeader>
      <ModalBody>
        <Label>
          <IntlMessages id="pages.product-name" />
        </Label>
        <Input defaultValue={isEdit ? product.title : ''} />
        {/* <Label className="mt-4"> */}
        {/*  <IntlMessages id="pages.category" /> */}
        {/* </Label> */}
        {/* <Select */}
        {/*  components={{ Input: CustomSelectInput }} */}
        {/*  className="react-select" */}
        {/*  classNamePrefix="react-select" */}
        {/*  name="form-field-name" */}
        {/*  options={categories} */}
        {/* /> */}
        <Label className="mt-4">
          <IntlMessages id="pages.campaign" />
        </Label>
        <Input
          defaultValue={isEdit ? product.description : ''}
          type="textarea"
          name="text"
          id="exampleText"
        />
        <Label className="mt-4">
          <IntlMessages id="pages.price" />
        </Label>
        <Input defaultValue={isEdit ? product.price : null} type="number" />
        <Label className="mt-4">
          <IntlMessages id="pages.start-day" />
        </Label>
        <br />
        {/* <DateTimePicker
          calendarIcon={null}
          clearIcon={null}
          onChange={setStartDate}
          format={"y-MM-dd"}
          value={startDate}
        /> */}

        <Row>
          <Colxx className="d-inline-flex justify-content-around" xxs={12}>
            <div>
              <h3>Date</h3>
              <div>
                <div>
                  <h3>Old Date</h3>
                  <DatePicker
                    selected={oldDate}
                    onChange={(date) => setOldDate(date)}
                  />
                </div>
                <div className="mt-2">
                  <h3>New Date</h3>
                  <DatePicker
                    selected={newDate}
                    onChange={(date) => setNewDate(date)}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3>Time</h3>
              <div>
                <div style={{ marginBottom: 15 }}>
                  <h3>Old Time</h3>
                  <TimePicker
                    defaultValue={moment(new Date(oldTime))}
                  />
                </div>
                <div className="mt-3">
                  <h3>New Time</h3>
                  <TimePicker
                    onChange={(time) => setNewTime(time)}
                    defaultValue={moment()}
                  />
                </div>
              </div>
            </div>
          </Colxx>
        </Row>

        <br />
        <Label className="mt-4">
          <IntlMessages id="pages.end-day" />
        </Label>
        <br />
        {/* <DateTimePicker
          calendarIcon={false}
          onChange={setEndDate}
          value={endDate}
        /> */}

<Row>
          <Colxx className="d-inline-flex justify-content-around" xxs={12}>
            <div>
              <h3>Date</h3>
              <div>
                <div>
                  <h3>Old Date</h3>
                  <DatePicker
                    selected={oldDate}
                    onChange={(date) => setOldDate(date)}
                  />
                </div>
                <div className="mt-2">
                  <h3>New Date</h3>
                  <DatePicker
                    selected={newDate}
                    onChange={(date) => setNewDate(date)}
                  />
                </div>
              </div>
            </div>
            <div>
              <h3>Time</h3>
              <div>
                <div style={{ marginBottom: 15 }}>
                  <h3>Old Time</h3>
                  <TimePicker
                    defaultValue={moment(new Date(oldTime))}
                  />
                </div>
                <div className="mt-3">
                  <h3>New Time</h3>
                  <TimePicker
                    onChange={(time) => setNewTime(time)}
                    defaultValue={moment()}
                  />
                </div>
              </div>
            </div>
          </Colxx>
        </Row>
        <br />
        <Label className="mt-4">
          <IntlMessages id="pages.stock_quantity" />
        </Label>
        <Input defaultValue={isEdit ? product.stock : null} type="number" />
        {/* <Label className="mt-4"> */}
        {/*  <IntlMessages id="pages.status" /> */}
        {/* </Label> */}
        {/* <CustomInput */}
        {/*  type="radio" */}
        {/*  id="exCustomRadio" */}
        {/*  name="customRadio" */}
        {/*  label="ON HOLD" */}
        {/* /> */}
        {/* <CustomInput */}
        {/*  type="radio" */}
        {/*  id="exCustomRadio2" */}
        {/*  name="customRadio" */}
        {/*  label="PROCESSED" */}
        {/* /> */}
        <Label className="mt-4">
          <IntlMessages id="pages.photo" />
        </Label>
        <DropzoneComponent
          config={dropzoneComponentConfig}
          djsConfig={dropzoneConfig}
          eventHandlers={{
            init: (dropzone) => {
              myDropzone = dropzone;
            },
          }}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          <IntlMessages id="pages.cancel" />
        </Button>
        <Button color="primary" onClick={toggleModal}>
          <IntlMessages id="pages.submit" />
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

export default AddNewModal;
