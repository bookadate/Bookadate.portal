import { ThemeColors } from '../helpers/ThemeColors';

const colors = ThemeColors();

export const lineChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [516, 903, 591, 739, 1580, 1580, 1580],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 6,
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      fill: false,
    },
  ],
};

export const polarAreaChartData = {
  labels: ['Product Category 1', 'Product Category 2', 'Product Category 3'],
  datasets: [
    {
      data: [80, 90, 70],
      borderWidth: 2,
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
      ],
    },
  ],
};

export const areaChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [54, 63, 60, 65, 60, 68, 60],
      borderColor: colors.themeColor1,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 4,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      fill: true,
      borderWidth: 2,
      backgroundColor: colors.themeColor1_10,
    },
  ],
};

export const scatterChartData = {
  datasets: [
    {
      borderWidth: 2,
      showLine: false,
      label: 'Cakes',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [
        { x: 62, y: -78 },
        { x: -0, y: 74 },
        { x: -67, y: 45 },
        { x: -26, y: -43 },
        { x: -15, y: -30 },
        { x: 65, y: -68 },
        { x: -28, y: -61 },
      ],
    },
    {
      borderWidth: 2,
      showLine: false,
      label: 'Desserts',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [
        { x: 79, y: 62 },
        { x: 62, y: 0 },
        { x: -76, y: -81 },
        { x: -51, y: 41 },
        { x: -9, y: 9 },
        { x: 72, y: -37 },
        { x: 62, y: -26 },
      ],
    },
  ],
};

export const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Cakes',
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [456, 479, 324, 569, 702, 600],
      borderWidth: 2,
    },
    {
      label: 'Desserts',
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [364, 504, 605, 400, 345, 320],
      borderWidth: 2,
    },
  ],
};

export const radarChartData = {
  datasets: [
    {
      label: 'Drinks',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor1,
      borderColor: colors.themeColor1,
      backgroundColor: colors.themeColor1_10,
      data: [180, 190, 170, 187],
    },
    {
      label: 'Starter',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor2,
      borderColor: colors.themeColor2,
      backgroundColor: colors.themeColor2_10,
      data: [168, 180, 195, 169],
    },
    {
      label: 'Mains',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor6,
      borderColor: colors.themeColor6,
      backgroundColor: colors.themeColor6_10,
      data: [168, 190, 175, 195],
    },
    {
      label: 'Desserts',
      borderWidth: 2,
      pointBackgroundColor: colors.themeColor3,
      borderColor: colors.themeColor3,
      backgroundColor: colors.themeColor3_10,
      data: [175, 178, 195, 192],
    },
  ],
  labels: ['Drinks', 'Starter', 'Mains', 'Desserts'],
};

export const pieChartData = {
  labels: ['Cakes', 'Cupcakes', 'Desserts'],
  datasets: [
    {
      label: '',
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3],
      backgroundColor: [
        colors.themeColor1_10,
        colors.themeColor2_10,
        colors.themeColor3_10,
      ],
      borderWidth: 2,
      data: [15, 25, 20],
    },
  ],
};

export const doughnutChartData = {
  labels: ['Drinks', 'Dining', 'Tickets', 'Regular'],
  datasets: [
    {
      label: '',
      borderColor: [
        colors.themeColor3,
        colors.themeColor2,
        colors.themeColor1,
        colors.themeColor4,
      ],
      backgroundColor: [
        colors.themeColor3_10,
        colors.themeColor2_10,
        colors.themeColor1_10,
        colors.themeColor4_10,
      ],
      borderWidth: 2,
      data: [20, 30, 0, 11],
    },
  ],
};
export const doughnutChartDataCompleted = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      borderColor: [
        colors.themeColor3,
        colors.themeColor2,
        colors.themeColor1,
        colors.themeColor4,
        colors.themeColor5,
        colors.themeColor6,
        colors.themeColor7,
      ],
      backgroundColor: [
        colors.themeColor3_10,
        colors.themeColor2_10,
        colors.themeColor1_10,
        colors.themeColor4_10,
        colors.themeColor5_10,
        colors.themeColor6_10,
        colors.themeColor4_10,
      ],
      borderWidth: 2,
      data: [2, 2, 3, 3,10,10,10],
    },
  ],
};
export const doughnutChartDataPending = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      borderColor: [
        colors.themeColor3,
        colors.themeColor2,
        colors.themeColor1,
        colors.themeColor4,
        colors.themeColor5,
        colors.themeColor6,
        colors.themeColor7,
      ],
      backgroundColor: [
        colors.themeColor3_10,
        colors.themeColor2_10,
        colors.themeColor1_10,
        colors.themeColor4_10,
        colors.themeColor5_10,
        colors.themeColor6_10,
        colors.themeColor4_10,
      ],
      borderWidth: 2,
      data: [2, 2, 1, 2,8,3,3],
    },
  ],
};

export const polarAreaChartPendingOrderData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [2, 2, 1, 2, 8, 3, 3],
      borderWidth: 2,
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3, colors.themeColor4, colors.themeColor5, colors.themeColor6, colors.themeColor4],
      backgroundColor: [
        colors.themeColor3_10,
        colors.themeColor2_10,
        colors.themeColor1_10,
        colors.themeColor4_10,
        colors.themeColor5_10,
        colors.themeColor6_10,
        colors.themeColor4_10,
      ],
    },
  ],
};
export const polarAreaChartCompletedOrderData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [2, 2, 3, 3,10,10,10],
      borderWidth: 2,
      borderColor: [colors.themeColor1, colors.themeColor2, colors.themeColor3, colors.themeColor4, colors.themeColor5, colors.themeColor6, colors.themeColor4],
      backgroundColor: [
        colors.themeColor3_10,
        colors.themeColor2_10,
        colors.themeColor1_10,
        colors.themeColor4_10,
        colors.themeColor5_10,
        colors.themeColor6_10,
        colors.themeColor4_10,
      ],
    },
  ],
};

export const smallChartData1 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Total Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [258, 258, 443, 443, 1580, 1580, 1580],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const smallChartData2 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Pending Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [258, 258, 1478, 296, 1264, 474, 474],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const smallChartData3 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Total Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [350, 452, 762, 952, 630, 85, 158],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const smallChartData4 = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Total Orders',
      borderColor: colors.themeColor1,
      pointBorderColor: colors.themeColor1,
      pointHoverBackgroundColor: colors.themeColor1,
      pointHoverBorderColor: colors.themeColor1,
      pointRadius: 2,
      pointBorderWidth: 3,
      pointHoverRadius: 2,
      fill: false,
      borderWidth: 2,
      data: [200, 452, 250, 630, 125, 85, 20],
      datalabels: {
        align: 'end',
        anchor: 'end',
      },
    },
  ],
};

export const conversionChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: '',
      data: [65, 60, 68, 60, 58, 63, 60],
      borderColor: colors.themeColor2,
      pointBackgroundColor: colors.foregroundColor,
      pointBorderColor: colors.themeColor2,
      pointHoverBackgroundColor: colors.themeColor2,
      pointHoverBorderColor: colors.foregroundColor,
      pointRadius: 4,
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      fill: true,
      borderWidth: 2,
      backgroundColor: colors.themeColor2_10,
    },
  ],
};
