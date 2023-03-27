import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import CalendarToolbar from '../../components/CalendarToolbar';
import IntlMessages from '../../helpers/IntlMessages';
import data from '../../data/events';

import { getDirection } from '../../helpers/Utils';

const localizer = momentLocalizer(moment);

const events = [
  {
    id: 0,
    title: 'Board meeting',
    start: new Date(2023, 0, 22, 9, 0, 0),
    end: new Date(2023, 0, 22, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: 'MS training',
    allDay: true,
    start: new Date(2023, 2, 22, 9, 0, 0),
    end: new Date(2023, 2, 23, 13, 0, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: 'Team lead meeting',
    start: new Date(2018, 0, 29, 8, 30, 0),
    end: new Date(2018, 0, 29, 12, 30, 0),
    resourceId: 3,
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2018, 0, 30, 7, 0, 0),
    end: new Date(2018, 0, 30, 10, 30, 0),
    resourceId: 4,
  },
]
const specialDays = ([
  {
    id: 0,
    title: '10% drink offer',
    start: new Date(2023, 2, 12, 9, 0, 0),
    end: new Date(2023, 2, 12, 10, 0, 0),
    resourceId: 1,
    day: "10% drink offer",
    status: 'Open',
    date: new Date('Fri Jan 01 2021'),
    campaign: 'Morning Shift',
  },
  {
    id: 0,
    title: '25% drink offe',
    start: new Date(2023, 2, 11, 9, 0, 0),
    end: new Date(2023, 2, 11, 13, 0, 0),
    resourceId: 1,
    day: "25% drink offer",
    status: 'Open',
    date: new Date('Fri Jan 01 2021'),
    campaign: 'Morning Shift',
  },
  {
    id: 0,
    title: '3 course dinner',
    start: new Date(2023, 2, 14, 9, 0, 0),
    end: new Date(2023, 2, 14, 13, 0, 0),
    resourceId: 1,
    day: "3 course dinner",
    status: 'Open',
    date: new Date('Fri Jan 01 2021'),
    campaign: 'Morning Shift',
  },
  {
    id: 0,
    title: '5 course dinner',
    start: new Date(2023, 2, 18, 9, 0, 0),
    end: new Date(2023, 2, 18, 13, 0, 0),
    resourceId: 1,
    day: "5 course dinner",
    status: 'Open',
    date: new Date('Fri Jan 01 2021'),
    campaign: 'Morning Shift',
  },
  {
    id: 0,
    title: '10 course dinner',
    start: new Date(2023, 2, 21, 9, 0, 0),
    end: new Date(2023, 2, 21, 13, 0, 0),
    resourceId: 1,
    day: "10 course dinner",
    status: 'Open',
    date: new Date('Fri Jan 01 2021'),
    campaign: 'Morning Shift',
  },
  {
    id: 0,
    title: '25% Signature dinner package',
    start: new Date(2023, 2, 23, 9, 0, 0),
    end: new Date(2023, 2, 23, 13, 0, 0),
    resourceId: 1,
    day: "25% Signature dinner package",
    status: 'Open',
    date: new Date('Fri Jan 01 2021'),
    campaign: 'Morning Shift',
  },
  {
    id: 0,
    title: 'Complimentary drinks',
    start: new Date(2023, 2, 26, 9, 0, 0),
    end: new Date(2023, 2, 26, 13, 0, 0),
    resourceId: 1,
    day: "Complimentary drinks",
    status: 'Open',
    date: new Date('Fri Jan 01 2021'),
    campaign: 'Morning Shift',
  },
  {
    id: 0,
    title: '2-4-1 Cocktail discounts',
    start: new Date(2023, 2, 28, 9, 0, 0),
    end: new Date(2023, 2, 28, 13, 0, 0),
    resourceId: 1,
    day: "2-4-1 Cocktail discounts",
    status: 'Open',
    date: new Date('Fri Jan 01 2021'),
    campaign: 'Morning Shift',
  },
])

const CalendarCard = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.calendar" />
        </CardTitle>
        <Calendar
          localizer={localizer}
          style={{ minHeight: '500px' }}
          events={specialDays}
          rtl={getDirection().isRtl}
          views={['month']}
          components={{
            toolbar: CalendarToolbar,
          }}
        />
      </CardBody>
    </Card>
  );
};
export default CalendarCard;
