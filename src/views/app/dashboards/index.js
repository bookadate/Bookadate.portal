import React, { Suspense, useState } from 'react';
import { Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { injectIntl } from 'react-intl';

import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import IconCardsCarousel from '../../../containers/dashboards/IconCardsCarousel';

import RecentOrders from '../../../containers/dashboards/RecentOrders';
import ProductCategoriesDoughnut from '../../../containers/dashboards/ProductCategoriesDoughnut';

import BestProductLineSellers from '../../../containers/dashboards/BestProductLineSellers';

import SpecialDays from '../../../containers/email/SpecialDays';
import IntlMessages from '../../../helpers/IntlMessages';
import SpecialDayForm from '../../../containers/email/SpecialDayForm';
import SmallLineCharts from '../../../containers/dashboards/SmallLineCharts';
import TotalRevenue from './TotalRevenue';
import SalesStatuses from '../../../containers/dashboards/SalesStatuses';
import Logs from '../../../containers/dashboards/Logs';
import Tickets from '../../../containers/dashboards/Tickets';
import InboundReservations from '../../../containers/dashboards/InboundReservations';
import Customers from '../../../containers/dashboards/Customers';

const DefaultDashboard = ({ intl, match }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [specialDays, setSpecialDays] = useState([
    {
      day: "New Year's Day",
      status: 'Open',
      date: new Date('Fri Jan 01 2021'),
      campaign: 'Morning Shift',
    },
    {
      day: '2nd January (substitute day)',
      status: 'Open',
      date: new Date('Fri Jan 04 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Epiphany',
      status: 'Close',
      date: new Date('Fri Jan 06 2021'),
      campaign: 'No Shift',
    },
    {
      day: 'Orthodox Christmas Day',
      status: 'Open',
      date: new Date('Fri Jan 07 2021'),
      campaign: 'Afternoon Shift',
    },
    {
      day: 'Orthodox New Year',
      status: 'Open',
      date: new Date('Fri Jan 14 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Burns Night',
      status: 'Open',
      date: new Date('Fri Jan 25 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Tu B'Shevat (Arbor Day)",
      status: 'Open',
      date: new Date('Fri Jan 28 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Chinese New Year',
      status: 'Open',
      date: new Date('Fri Feb 12 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Valentine's Day",
      status: 'Open',
      date: new Date('Fri Feb 14 2021'),
      campaign: '3 Course Dinner discounts ',
    },
    {
      day: 'Carnival / Shrove Tuesday',
      status: 'Open',
      date: new Date('Fri Feb 16 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Carnival / Ash Wednesday',
      status: 'Open',
      date: new Date('Fri Feb 17 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Purim',
      status: 'Open',
      date: new Date('Fri Feb 26 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "St. David's Day",
      status: 'Open',
      date: new Date('Fri Mar 01 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Maha Shivaratri',
      status: 'Open',
      date: new Date('Fri Mar 11 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Isra and Mi'raj",
      status: 'Open',
      date: new Date('Fri Mar 11 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Mothering Sunday',
      status: 'Open',
      date: new Date('Fri Mar 14 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "St Patrick's Day",
      status: 'Open',
      date: new Date('Fri Mar 17 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'March Equinox',
      status: 'Open',
      date: new Date('Fri Mar 20 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Palm Sunday',
      status: 'Open',
      date: new Date('Fri Mar 28 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'First day of Passover',
      status: 'Open',
      date: new Date('Fri Mar 28 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Daylight Saving Time starts',
      status: 'Open',
      date: new Date('Fri Mar 29 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Holi',
      status: 'Open',
      date: new Date('Fri Mar 29 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Maundy Thursday',
      status: 'Open',
      date: new Date('Fri Apr 01 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Good Friday',
      status: 'Open',
      date: new Date('Fri Apr 02 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Holy Saturday',
      status: 'Open',
      date: new Date('Fri Apr 03 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Last day of Passover',
      status: 'Open',
      date: new Date('Fri Apr 04 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Easter Sunday',
      status: 'Open',
      date: new Date('Fri Apr 04 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Easter Monday',
      status: 'Open',
      date: new Date('Fri Apr 05 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Yom HaShoah',
      status: 'Open',
      date: new Date('Fri Apr 08 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Ramadan Start',
      status: 'Open',
      date: new Date('Fri Apr 13 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Yom HaAtzmaut',
      status: 'Open',
      date: new Date('Fri Apr 15 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Stephen Lawrence Day',
      status: 'Open',
      date: new Date('Fri Apr 22 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "St. George's Day",
      status: 'Open',
      date: new Date('Fri Apr 23 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Shakespeare Day',
      status: 'Open',
      date: new Date('Fri Apr 23 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Lag B'Omer",
      status: 'Open',
      date: new Date('Fri Apr 30 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Orthodox Good Friday',
      status: 'Open',
      date: new Date('Fri Apr 30 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Orthodox Holy Saturday',
      status: 'Open',
      date: new Date('Fri May 01 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Orthodox Easter',
      status: 'Open',
      date: new Date('Fri May 02 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Orthodox Easter Monday',
      status: 'Open',
      date: new Date('Fri May 03 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Early May Bank Holiday',
      status: 'Open',
      date: new Date('Fri May 03 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Laylatul Qadr (Night of Power)',
      status: 'Open',
      date: new Date('Fri May 08 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Ascension Day',
      status: 'Open',
      date: new Date('Fri May 13 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Eid ul Fitr',
      status: 'Open',
      date: new Date('Fri May 13 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Shavuot',
      status: 'Open',
      date: new Date('Fri May 17 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Pentecost',
      status: 'Open',
      date: new Date('Fri May 23 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Whit Monday',
      status: 'Open',
      date: new Date('Fri May 24 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Trinity Sunday',
      status: 'Open',
      date: new Date('Fri May 30 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Spring Bank Holiday',
      status: 'Open',
      date: new Date('Fri May 31 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Corpus Christi',
      status: 'Open',
      date: new Date('Fri Jun 03 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Queen's Birthday",
      status: 'Open',
      date: new Date('Fri Jun 12 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Father's Day",
      status: 'Open',
      date: new Date('Fri Jun 20 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'June Solstice',
      status: 'Open',
      date: new Date('Fri Jun 21 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Windrush Day',
      status: 'Open',
      date: new Date('Fri Jun 22 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Battle of the Boyne',
      status: 'Open',
      date: new Date('Fri Jul 12 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: "Tisha B'Av",
      status: 'Open',
      date: new Date('Fri Jul 18 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Eid ul Adha',
      status: 'Open',
      date: new Date('Fri Jul 20 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Summer Bank Holiday',
      status: 'Open',
      date: new Date('Fri Aug 02 2021'),
      campaign: '-241 Cocktail discounts ',
    },
    {
      day: 'Muharram/Islamic New Year',
      status: 'Open',
      date: new Date('Fri Aug 10 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Assumption of Mary',
      status: 'Open',
      date: new Date('Fri Aug 15 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Ashura (Tentative Date)',
      status: 'Open',
      date: new Date('Fri Aug 19 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Raksha Bandhan',
      status: 'Open',
      date: new Date('Fri Aug 22 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Janmashtami',
      status: 'Open',
      date: new Date('Fri Aug 30 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Summer Bank Holiday',
      status: 'Open',
      date: new Date('Fri Aug 30 2021'),
      campaign: '-241 Cocktail discounts ',
    },
    {
      day: 'Rosh Hashana',
      status: 'Open',
      date: new Date('Fri Sep 07 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Ganesh Chaturthi',
      status: 'Open',
      date: new Date('Fri Sep 10 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Yom Kippur',
      status: 'Open',
      date: new Date('Fri Sep 16 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'First day of Sukkot',
      status: 'Open',
      date: new Date('Fri Sep 21 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'September Equinox',
      status: 'Open',
      date: new Date('Fri Sep 22 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Hoshana Rabbah',
      status: 'Open',
      date: new Date('Fri Sep 27 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Shemini Atzeret',
      status: 'Open',
      date: new Date('Fri Sep 28 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Simchat Torah',
      status: 'Open',
      date: new Date('Fri Sep 29 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Feast of St Francis of Assisi)',
      status: 'Open',
      date: new Date('Fri Oct 04 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Navaratri)',
      status: 'Open',
      date: new Date('Fri Oct 07 2021'),
      campaign: 'Evening Shift',
    },
    {
      day: 'Dussehra)',
      status: 'Open',
      date: new Date('Fri Oct 14 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Milad un Nabi (Mawlid)',
      status: 'Open',
      date: new Date('Fri Oct 19 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Halloween',
      status: 'Open',
      date: new Date('Fri Oct 31 2021'),
      campaign: '-25% Discount Signature dinner package',
    },

    {
      day: 'Daylight Saving Time ends',
      status: 'Open',
      date: new Date('Fri Oct 31 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: "All Saints' Day",
      status: 'Open',
      date: new Date('Fri Nov 01 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Diwali/Deepavali',
      status: 'Open',
      date: new Date('Fri Nov 04 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Guy Fawkes Day',
      status: 'Open',
      date: new Date('Fri Nov 05 2021'),
      campaign: 'Complimentary Champagne',
    },

    {
      day: 'Remembrance Sunday',
      status: 'Open',
      date: new Date('Fri Nov 14 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'First Sunday of Advent',
      status: 'Open',
      date: new Date('Fri Nov 28 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'First Day of Hanukkah',
      status: 'Open',
      date: new Date('Fri Nov 29 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: "St Andrew's Day",
      status: 'Open',
      date: new Date('Fri Nov 30 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Last day of Hanukkah',
      status: 'Open',
      date: new Date('Fri Dec 06 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Feast of the Immaculate Conception',
      status: 'Open',
      date: new Date('Fri Dec 08 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'December Solstice',
      status: 'Open',
      date: new Date('Fri Dec 21 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Christmas Eve',
      status: 'Open',
      date: new Date('Fri Dec 24 2021'),
      campaign: '25% Discount Signature dinner package',
    },
    {
      day: 'Christmas Day',
      status: 'Open',
      date: new Date('Fri Dec 25 2021'),
      campaign: '25% Discount Signature dinner package',
    },

    {
      day: 'Boxing Day',
      status: 'Open',
      date: new Date('Fri Dec 26 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Substitute Bank Holiday for Christmas Day',
      status: 'Open',
      date: new Date('Fri Dec 27 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: 'Substitute Bank Holiday for Boxing Day',
      status: 'Open',
      date: new Date('Fri Dec 28 2021'),
      campaign: 'Evening Shift',
    },

    {
      day: "New Year's Eve",
      status: 'Open',
      date: new Date('Fri Dec 31 2021'),
      campaign: 'Ultimate Package',
    },
  ]);

  const [specialDaysNew, setSpecialDaysNew] = useState([
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
      title: '25% drink offer',
      start: new Date(2023, 2, 11, 9, 0, 0),
      end: new Date(2023, 2, 11, 13, 0, 0),
      resourceId: 1,
      day: "25% drink offer",
      status: 'Open',
      date: new Date('Fri Jan 04 2021'),
      campaign: 'Evening Shift',
    },
    {
      id: 0,
      title: '3 course dinner',
      start: new Date(2023, 2, 14, 9, 0, 0),
      end: new Date(2023, 2, 14, 13, 0, 0),
      resourceId: 1,
      day: "3 course dinner",
      status: 'Close',
      date: new Date('Fri Jan 06 2021'),
      campaign: 'No Shift',
    },
    {
      id: 0,
      title: '5 course dinner',
      start: new Date(2023, 2, 18, 9, 0, 0),
      end: new Date(2023, 2, 18, 13, 0, 0),
      resourceId: 1,
      day: "5 course dinner",
      status: 'Open',
      date: new Date('Fri Jan 07 2021'),
      campaign: 'Afternoon Shift',
    },
    {
      id: 0,
      title: '10 course dinner',
      start: new Date(2023, 2, 21, 9, 0, 0),
      end: new Date(2023, 2, 21, 13, 0, 0),
      resourceId: 1,
      day: "10 course dinner",
      status: 'Open',
      date: new Date('Fri Jan 14 2021'),
      campaign: 'Evening Shift',
    },
    {
      id: 0,
      title: '25% Signature dinner package',
      start: new Date(2023, 2, 23, 9, 0, 0),
      end: new Date(2023, 2, 23, 13, 0, 0),
      resourceId: 1,
      day: "25% Signature dinner package",
      status: 'Open',
      date: new Date('Fri Jan 25 2021'),
      campaign: 'Evening Shift',
    },
    {
      id: 0,
      title: 'Complimentary drinks',
      start: new Date(2023, 2, 26, 9, 0, 0),
      end: new Date(2023, 2, 26, 13, 0, 0),
      resourceId: 1,
      day: "Complimentary drinks",
      status: 'Open',
      date: new Date('Fri Jan 28 2021'),
      campaign: 'Evening Shift',
    },
    {
      id: 0,
      title: '2-4-1 Cocktail discounts',
      start: new Date(2023, 2, 28, 9, 0, 0),
      end: new Date(2023, 2, 28, 13, 0, 0),
      resourceId: 1,
      day: "2-4-1 Cocktail discounts",
      status: 'Open',
      date: new Date('Fri Feb 12 2021'),
      campaign: 'Evening Shift',
    },
  ])

  const [specialDaysNeww, setSpecialDaysNeww] = useState([
    { id: 0, title: "New Year's Day", date: '2023-01-01' },
    { id: 1, title: "New Year's Day observed", date: '2023-01-02' },
    { id: 2, title: '2nd January (substitute day)', date: '2023-01-03' },
    { id: 3, title: 'Twelfth Night', date: '2023-01-05' },
    { id: 4, title: 'Epiphany', date: '2023-01-06' },
    { id: 5, title: 'Orthodox Christmas Day', date: '2023-01-07' },
    { id: 6, title: 'Orthodox New Year', date: '2023-01-14' },
    { id: 7, title: 'Lunar New Year', date: '2023-01-22' },
    { id: 8, title: 'Burns Night', date: '2023-01-25' },
    { id: 9, title: "Tu B'Shevat (Arbor Day)", date: '2023-02-06' },
    { id: 10, title: "Valentine's Day", date: '2023-02-14' },
    { id: 11, title: 'Maha Shivaratri', date: '2023-02-18' },
    { id: 12, title: "Isra and Mi'raj", date: '2023-02-18' },
    {
      id: 13,
      title: 'Carnival / Shrove Tuesday / Pancake Day',
      date: '2023-02-21'
    },
    { id: 14, title: 'Carnival / Ash Wednesday', date: '2023-02-22' },
    { id: 15, title: "St. David's Day", date: '2023-03-01' },
    { id: 16, title: 'Purim', date: '2023-03-07' },
    { id: 17, title: "St Patrick's Day", date: '2023-03-17' },
    { id: 18, title: "Mother's Day", date: '2023-03-19' },
    { id: 19, title: 'March Equinox', date: '2023-03-20T21:24:20+00:00' },
    { id: 20, title: 'Ramadan Start', date: '2023-03-23' },
    {
      id: 21,
      title: 'Daylight Saving Time starts',
      date: '2023-03-26T01:00:00+00:00'
    },
    { id: 22, title: 'Palm Sunday', date: '2023-04-02' },
    { id: 23, title: 'Maundy Thursday', date: '2023-04-06' },
    { id: 24, title: 'First day of Passover', date: '2023-04-06' },
    { id: 25, title: 'Good Friday', date: '2023-04-07' },
    { id: 26, title: 'Holy Saturday', date: '2023-04-08' },
    { id: 27, title: 'Easter Sunday', date: '2023-04-09' },
    { id: 28, title: 'Easter Monday', date: '2023-04-10' },
    { id: 29, title: 'Easter Monday', date: '2023-04-10' },
    { id: 30, title: 'Last day of Passover', date: '2023-04-13' },
    { id: 31, title: 'Orthodox Good Friday', date: '2023-04-14' },
    { id: 32, title: 'Orthodox Holy Saturday', date: '2023-04-15' },
    { id: 33, title: 'Orthodox Easter', date: '2023-04-16' },
    {
      id: 34,
      title: 'Laylatul Qadr (Night of Power)',
      date: '2023-04-17'
    },
    { id: 35, title: 'Orthodox Easter Monday', date: '2023-04-17' },
    { id: 36, title: 'Yom HaShoah', date: '2023-04-18' },
    { id: 37, title: 'Eid ul Fitr', date: '2023-04-22' },
    { id: 38, title: 'Stephen Lawrence Day', date: '2023-04-22' },
    { id: 39, title: "St. George's Day", date: '2023-04-23' },
    { id: 40, title: "St. George's Day", date: '2023-04-23' },
    { id: 41, title: 'Shakespeare Day', date: '2023-04-23' },
    { id: 42, title: 'Yom HaAtzmaut', date: '2023-04-26' },
    { id: 43, title: 'Early May Bank Holiday', date: '2023-05-01' },
    {
      id: 44,
      title: 'The Coronation of King Charles III',
      date: '2023-05-06'
    },
    {
      id: 45,
      title: 'Bank Holiday for the Coronation of King Charles III',
      date: '2023-05-08'
    },
    { id: 46, title: "Lag B'Omer", date: '2023-05-09' },
    { id: 47, title: 'Ascension Day', date: '2023-05-18' },
    { id: 48, title: 'Shavuot', date: '2023-05-26' },
    { id: 49, title: 'Pentecost', date: '2023-05-28' },
    { id: 50, title: 'Whit Monday', date: '2023-05-29' },
    { id: 51, title: 'Spring Bank Holiday', date: '2023-05-29' },
    { id: 52, title: 'Trinity Sunday', date: '2023-06-04' },
    { id: 53, title: 'Corpus Christi', date: '2023-06-08' },
    { id: 54, title: "King's Birthday", date: '2023-06-17' },
    { id: 55, title: "Father's Day", date: '2023-06-18' },
    { id: 56, title: 'June Solstice', date: '2023-06-21T15:57:49+01:00' },
    { id: 57, title: 'Windrush Day', date: '2023-06-22' },
    { id: 58, title: 'Eid al-Adha', date: '2023-06-29' },
    { id: 59, title: 'Battle of the Boyne', date: '2023-07-12' },
    { id: 60, title: 'Muharram/Islamic New Year', date: '2023-07-19' },
    { id: 61, title: "Tisha B'Av", date: '2023-07-27' },
    { id: 62, title: 'Ashura', date: '2023-07-28' },
    { id: 63, title: 'Summer Bank Holiday', date: '2023-08-07' },
    { id: 64, title: 'Assumption of Mary', date: '2023-08-15' },
    { id: 65, title: 'Summer Bank Holiday', date: '2023-08-28' },
    { id: 66, title: 'Janmashtami (Smarta)', date: '2023-09-06' },
    { id: 67, title: 'Janmashtami', date: '2023-09-07' },
    { id: 68, title: 'Rosh Hashana', date: '2023-09-16' },
    {
      id: 69,
      title: 'September Equinox',
      date: '2023-09-23T07:50:01+01:00'
    },
    { id: 70, title: 'Yom Kippur', date: '2023-09-25' },
    { id: 71, title: 'Milad un Nabi (Mawlid)', date: '2023-09-27' },
    { id: 72, title: 'First day of Sukkot', date: '2023-09-30' },
    {
      id: 73,
      title: 'Feast of St Francis of Assisi',
      date: '2023-10-04'
    },
    { id: 74, title: 'Hoshana Rabbah', date: '2023-10-06' },
    { id: 75, title: 'Shemini Atzeret', date: '2023-10-07' },
    { id: 76, title: 'Simchat Torah', date: '2023-10-08' },
    {
      id: 77,
      title: 'Daylight Saving Time ends',
      date: '2023-10-29T02:00:00+01:00'
    },
    { id: 78, title: 'Halloween', date: '2023-10-31' },
    { id: 79, title: "All Saints' Day", date: '2023-11-01' },
    { id: 80, title: "All Souls' Day", date: '2023-11-02' },
    { id: 81, title: 'Guy Fawkes Day', date: '2023-11-05' },
    { id: 82, title: 'Diwali/Deepavali', date: '2023-11-12' },
    { id: 83, title: 'Remembrance Sunday', date: '2023-11-12' },
    { id: 84, title: "St Andrew's Day", date: '2023-11-30' },
    { id: 85, title: 'First Sunday of Advent', date: '2023-12-03' },
    {
      id: 86,
      title: 'Feast of the Immaculate Conception',
      date: '2023-12-08'
    },
    { id: 87, title: 'First Day of Hanukkah', date: '2023-12-08' },
    { id: 88, title: 'Last day of Hanukkah', date: '2023-12-15' },
    {
      id: 89,
      title: 'December Solstice',
      date: '2023-12-22T03:27:21+00:00'
    },
    { id: 90, title: 'Christmas Eve', date: '2023-12-24' },
    { id: 91, title: 'Christmas Day', date: '2023-12-25' },
    { id: 92, title: 'Boxing Day', date: '2023-12-26' },
    { id: 93, title: "New Year's Eve", date: '2023-12-31' }
  ])
  const handleAddSpecialDay = () => {
    setModalBasic(true);
  };
  const onSpecialDaySubmit = (values) => {
    console.log(values);
    setSpecialDays((state) => {
      return [...state, values];
    });
    setSpecialDaysNew((state) => {
      return [...state, values];
    });
  };
  const closeModal = () => {
    setModalBasic(false);
  };
  return (
    <>
      {/* <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.dashboards" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row> */}
      <Row className="mb-4">
        <Colxx xl="6" lg="12" className="d-block">
          {/* <BestSellers /> */}
          <BestProductLineSellers />
        </Colxx>
        <Colxx lg="6" xl="6">
          <RecentOrders />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <IconCardsCarousel />
        </Colxx>
      </Row>

      <SmallLineCharts />


      <Row>
        <Colxx lg="6" md="12" className="mb-4">
          {/* <ProductCategoriesPolarArea chartClass="dashboard-donut-chart" /> */}
          <ProductCategoriesDoughnut />
        </Colxx>
        <Colxx md="6" className="mb-4">
          <TotalRevenue />
        </Colxx>
      </Row>

      <Row>
        <Colxx sm="12" lg="4" md="4" className="mb-4">
          <SalesStatuses />
        </Colxx>
        <Colxx lg="4" md="4" className="mb-4">
          <Logs />
        </Colxx>
        <Colxx lg="4" md="4" className="mb-4">
          <Tickets />
        </Colxx>
      </Row>

      {/* <Row> */}
      {/* <Colxx xl="6" lg="12" className="mb-4"> */}
      {/*  <Calendar /> */}
      {/* </Colxx> */}
      {/* <Colxx md="6" className="mb-4"> */}
      {/*  <SalesChartCard /> */}
      {/* </Colxx> */}
      {/* </Row> */}

      {/* <Row> */}
      {/*  <Colxx md="12" className="mb-4"> */}
      {/*    <Card style={{ height: 500 }} className="mb-4"> */}
      {/*      <CardBody> */}
      {/*        <h3> Total Reservations</h3> */}
      {/*        <BarChart shadow data={starterWeeklyBilling} /> */}
      {/*      </CardBody> */}
      {/*    </Card> */}
      {/*    <div className="mt-5"> */}
      {/*      <SmallLineCharts itemClass="dashboard-small-chart-analytics" /> */}
      {/*    </div> */}
      {/*  </Colxx> */}
      {/* </Row> */}
      <Row>
        
        {/* <Colxx md="6" lg="4" className="mb-4">
          <GradientCardContainer />
        </Colxx> */}
        {/* <Colxx sm="12" lg="4" className="mb-4">
          <ProfileStatuses />
        </Colxx> */}
        {/* <Colxx md="6" lg="4" className="mb-4">
          <GradientCardContainer />
        </Colxx> */}
        {/* <Colxx md="6" lg="4" className="mb-4">
          <ProductListed />
        </Colxx> */}
      </Row>
      {/* <SortableStaticticsRow messages={messages} /> */}
      {/* <Row> */}
      {/*  <Colxx sm="12" md="6" className="mb-4"> */}
      {/*    <WebsiteVisitsChartCard /> */}
      {/*  </Colxx> */}
      {/*  <Colxx sm="12" md="6" className="mb-4"> */}
      {/*    <ConversionRatesChartCard /> */}
      {/*  </Colxx> */}
      {/* </Row> */}
      {/* <Row> */}
      {/* <Colxx lg="12" md="6" xl="4"> */}
      {/* <Row> */}
      {/*  <Colxx lg="4" xl="12" className="mb-4"> */}
      {/*    <GradientWithRadialProgressCard */}
      {/*      icon="iconsminds-clock" */}
      {/*      title={`5 ${messages['dashboards.files']}`} */}
      {/*      detail={messages['dashboards.pending-for-print']} */}
      {/*      percent={(5 * 100) / 12} */}
      {/*      progressText="5/12" */}
      {/*    /> */}
      {/*  </Colxx> */}
      {/*  <Colxx lg="4" xl="12" className="mb-4"> */}
      {/*    <GradientWithRadialProgressCard */}
      {/*      icon="iconsminds-male" */}
      {/*      title={`4 ${messages['dashboards.orders']}`} */}
      {/*      detail={messages['dashboards.on-approval-process']} */}
      {/*      percent={(4 * 100) / 6} */}
      {/*      progressText="4/6" */}
      {/*    /> */}
      {/*  </Colxx> */}
      {/*  <Colxx lg="4" xl="12" className="mb-4"> */}
      {/*    <GradientWithRadialProgressCard */}
      {/*      icon="iconsminds-bell" */}
      {/*      title={`8 ${messages['dashboards.alerts']}`} */}
      {/*      detail={messages['dashboards.waiting-for-notice']} */}
      {/*      percent={(8 * 100) / 10} */}
      {/*      progressText="8/10" */}
      {/*    /> */}
      {/*  </Colxx> */}
      {/* </Row> */}
      {/* </Colxx> */}
      {/* <Colxx lg="6" md="6" xl="4" sm="12" className="mb-4"> */}
      {/*  <AdvancedSearch messages={messages} /> */}
      {/* </Colxx> */}
      {/* <Colxx lg="6" xl="6" className="mb-4"> */}
      {/*  <SmallLineCharts /> */}
      {/* </Colxx> */}
      {/* <Colxx lg="6" xl="6" className="mb-4"> */}
      {/*  <TopRatedItems /> */}
      {/* </Colxx> */}
      {/* </Row> */}

      {/*  Analytics part */}
      {/* <Row> */}
      {/*  <Colxx sm="12" md="6" className="mb-4"> */}
      {/*    <WebsiteVisitsChartCard /> */}
      {/*  </Colxx> */}
      {/*  <Colxx sm="12" md="6" className="mb-4"> */}
      {/*    <ConversionRatesChartCard /> */}
      {/*  </Colxx> */}
      {/* </Row> */}

      {/* <Row> */}
      {/* <Colxx xl="4" lg="6" md="12" className="mb-4"> */}
      {/*  <ProductCategoriesDoughnut /> */}
      {/* </Colxx> */}
      {/* <Colxx xl="4" lg="6" md="12" className="mb-4"> */}
      {/*  <ProfileStatuses cardClass="dashboard-progress" /> */}
      {/* </Colxx> */}
      {/*  <Colxx xl="12" xxs="12" lg="6" className="mb-4"> */}
      {/*    <OrderStockRadarChart /> */}
      {/*  </Colxx> */}
      {/* </Row> */}

      {/* <SortableStaticticsRow messages={messages} /> */}

      <Row>
        {/* <Colxx xxs="12" lg="6" className="mb-4"> */}
        {/*  <ProductCategoriesPolarArea /> */}
        {/* </Colxx> */}
        <Colxx>
          <SpecialDays
            // data={specialDays}
            data={specialDaysNeww}
            handleAddSpecialDay={handleAddSpecialDay}
          />
        </Colxx>
      </Row>
      {/* <Row> */}
      {/*  <Colxx xxs="12" className="mb-4"> */}
      {/*    <SalesChartCard /> */}
      {/*  </Colxx> */}
      {/* </Row> */}
      <Modal isOpen={modalBasic} toggle={() => setModalBasic(!modalBasic)}>
        <ModalHeader>
          <IntlMessages id="modal.add-special-day" />
        </ModalHeader>
        <ModalBody>
          <SpecialDayForm
            onSubmit={onSpecialDaySubmit}
            closeModal={closeModal}
          />
        </ModalBody>
      </Modal>
    </>
  );
};
export default injectIntl(DefaultDashboard);
