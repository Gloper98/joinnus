const SEATS = [
    {
      id: 'As-1',
      code: '4363',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'Ad-2',
      code: '9568',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 80,
      zone: 'VIP'
    },
    {
      id: 'A2-3',
      code: '8456',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 60,
      zone: 'platinium'
    },
    {
      id: 'Av-4',
      code: '0598',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AY-5',
      code: '7358',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 70,
      zone: 'VIP'
    },
    {
      id: 'Bd-1',
      code: '9308',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'BN-2',
      code: '9503',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'A9-1',
      code: '4333',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'A8-2',
      code: '9268',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 80,
      zone: 'VIP'
    },
    {
      id: 'A-3',
      code: '8356',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 60,
      zone: 'platinium'
    },
    {
      id: 'AOO-4',
      code: '0298',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AO-5',
      code: '7358',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 70,
      zone: 'VIP'
    },
    {
      id: 'OB-1',
      code: '5308',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'BS-2',
      code: '5403',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'AT-1',
      code: '5363',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AS-2',
      code: '9558',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 80,
      zone: 'VIP'
    },
    {
      id: 'AT-3',
      code: '8356',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 60,
      zone: 'platinium'
    },
    {
      id: 'AB-4',
      code: '0518',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AB-5',
      code: '7118',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 70,
      zone: 'VIP'
    },
    {
      id: 'BB-1',
      code: '9118',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'BC-2',
      code: '9501',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'AC-1',
      code: '1363',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AH-2',
      code: '9518',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 80,
      zone: 'VIP'
    },
    {
      id: 'AG-3',
      code: '8156',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 60,
      zone: 'platinium'
    },
    {
      id: 'AF-4',
      code: '0518',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AF-5',
      code: '7318',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 70,
      zone: 'VIP'
    },
    {
      id: 'BD-1',
      code: '1308',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'BD-2',
      code: '9203',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'AR-1',
      code: '2363',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AZ-2',
      code: '9522',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 80,
      zone: 'VIP'
    },
    {
      id: 'AD-3',
      code: '2256',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 60,
      zone: 'platinium'
    },
    {
      id: 'AK-4',
      code: '0228',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AJ-5',
      code: '7222',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 70,
      zone: 'VIP'
    },
    {
      id: 'BY-1',
      code: '2228',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'BU-2',
      code: '9663',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'A5-1',
      code: '4663',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AD-2',
      code: '9566',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 80,
      zone: 'VIP'
    },
    {
      id: 'AB-3',
      code: '8466',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 60,
      zone: 'platinium'
    },
    {
      id: 'AB-4',
      code: '6698',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'TA-5',
      code: '7658',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 70,
      zone: 'VIP'
    },
    {
      id: 'BE-1',
      code: '9306',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'BG-2',
      code: '9507',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'AF-1',
      code: '4773',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AF-2',
      code: '7768',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 80,
      zone: 'VIP'
    },
    {
      id: 'AJ-3',
      code: '8776',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 60,
      zone: 'platinium'
    },
    {
      id: 'AH-4',
      code: '7598',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'A6-5',
      code: '7777',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 70,
      zone: 'VIP'
    },
    {
      id: 'BE-1',
      code: '9307',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'B5-2',
      code: '9703',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'AT-1',
      code: '4373',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AH-2',
      code: '7568',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 80,
      zone: 'VIP'
    },
    {
      id: 'AJ-3',
      code: '8886',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 60,
      zone: 'platinium'
    },
    {
      id: 'AJ-4',
      code: '0898',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AC-5',
      code: '7388',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 70,
      zone: 'VIP'
    },
    {
      id: 'BH-1',
      code: '8308',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'BY-2',
      code: '9583',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'ARs-1',
      code: '4863',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AB-2',
      code: '9888',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 80,
      zone: 'VIP'
    },
    {
      id: 'AsT-3',
      code: '9956',
      selection: false,
      color: 'grey',
      category: 'adults',
      price: 60,
      zone: 'platinium'
    },
    {
      id: 'AR-4',
      code: '0998',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 50,
      zone: 'general'
    },
    {
      id: 'AD-5',
      code: '7998',
      selection: false,
      color: 'grey',
      category: 'kids',
      price: 70,
      zone: 'VIP'
    },
    {
      id: 'BD-1',
      code: '22308',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    },
    {
      id: 'BF-2',
      code: '9443',
      selection: false,
      color: 'grey',
      category: 'elderly',
      price: 70,
      zone: 'general'
    }
  ];

  const INIT_STATE = {
    seats: SEATS,
  };

  export default INIT_STATE;