import React from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';
import '../../node_modules/anychart/dist/geodata/countries/australia/australia.js';

const circles = [
  {
    id: 'A-36',
    row: 'A',
    column: 36,
    code: '43676767663',
    selection: false,
    color: 'grey',
    category: 'kids',
    value: 50,
    zone: 'general',
    cx: 1403.1,
    cy: 335.6
  },
  {
    id: 'A-37',
    row: 'A',
    column: 37,
    code: '97788777568',
    selection: false,
    color: 'grey',
    category: 'adults',
    value: 80,
    zone: 'general',
    cx: 1375.5,
    cy: 355.5
  },
  {
    id: 'A-38',
    row: 'A',
    column: 38,
    code: '8456',
    selection: true,
    color: 'red',
    category: 'adults',
    value: 60,
    zone: 'general',
    cx: 1350.9,
    cy: 374.4
  },
  {
    id: 'B-37',
    row: 'B',
    column: 37,
    code: '0598',
    selection: false,
    color: 'dodgerblue',
    category: 'kids',
    value: 50,
    zone: 'general',
    cx: 1453.1,
    cy: 339.9
  },
  {
    id: 'B-38',
    row: 'B',
    column: 38,
    code: '0598',
    selection: false,
    color: 'dodgerblue',
    category: 'kids',
    valuee: 50,
    zone: 'general',
    cx: 1427.7,
    cy: 359.4
  },
  {
    id: 'B-39',
    row: 'B',
    column: 39,
    code: '0598',
    selection: false,
    color: 'dodgerblue',
    category: 'kids',
    value: 50,
    zone: 'general',
    cx: 1400.9,
    cy: 378.8
  },
  {
    id: 'B-40',
    row: 'B',
    column: 40,
    code: '0598',
    selection: false,
    color: 'dodgerblue',
    category: 'kids',
    value: 50,
    zone: 'general',
    cx: 1374,
    cy: 399.5
  },
  {
    id: 'C-29',
    row: 'C',
    column: 29,
    code: '099999',
    selection: false,
    color: 'dodgerblue',
    category: 'eldery',
    value: 50,
    zone: 'general',
    cx: 1478.7,
    cy: 361.8
  },
  {
    id: 'C-30',
    row: 'C',
    column: 30,
    code: '00008',
    selection: true,
    color: 'grey',
    category: 'adults',
    value: 50,
    zone: 'general',
    cx: 1451.9,
    cy: 382.6
  },
  {
    id: 'C-31',
    row: 'C',
    column: 31,
    code: '050008',
    selection: false,
    color: 'dodgerblue',
    category: 'adults',
    value: 50,
    zone: 'general',
    cx: 1422.5,
    cy: 405.1
  },
  {
    id: 'C-32',
    row: 'C',
    column: 32,
    code: '0598',
    selection: false,
    color: 'dodgerblue',
    category: 'adults',
    value: 50,
    zone: 'general',
    cx: 1395.6,
    cy: 425.8
  },
  {
    id: 'D-27',
    row: 'D',
    column: 27,
    code: '059998',
    selection: false,
    color: 'dodgerblue',
    category: 'adults',
    value: 50,
    zone: 'general',
    cx: 1490.5,
    cy: 395.9
  },
  {
    id: 'D-28',
    row: 'D',
    column: 28,
    code: '0598',
    selection: false,
    color: 'dodgerblue',
    category: 'adults',
    value: 50,
    zone: 'general',
    cx: 1465.7,
    cy: 416.3
  },
  {
    id: 'D-29',
    row: 'D',
    column: 29,
    code: '05909878',
    selection: false,
    color: 'dodgerblue',
    category: 'adults',
    value: 50,
    zone: 'general',
    cx: 1437.9,
    cy: 435.8
  },
  {
    id: 'D-30',
    row: 'D',
    column: 30,
    code: '37260598',
    selection: false,
    color: 'dodgerblue',
    category: 'adults',
    value: 50,
    zone: 'general',
    cx: 1413,
    cy: 454.4
  },
  {
    id: 'E-28',
    row: 'E',
    column: 28,
    code: '0598',
    selection: false,
    color: 'dodgerblue',
    category: 'adults',
    value: 50,
    zone: 'general',
    cx: 1490.2,
    cy: 440.5
  },
  {
    id: 'E-29',
    row: 'E',
    column: 29,
    code: '0598',
    selection: false,
    color: 'dodgerblue',
    category: 'kids',
    value: 50,
    zone: 'general',
    cx: 1463.1,
    cy: 459.5
  },
  {
    id: 'E-30',
    row: 'E',
    column: 30,
    code: '0536398',
    selection: true,
    color: 'grey',
    category: 'kids',
    value: 50,
    zone: 'general',
    cx: 1435.8,
    cy: 479.9
  }
];




const BuyTickets = ({seats, color, selected}) => {
  let stadium=``;

 stadium =  `<svg version="1.1" id="stadium" x="0px" y="0px"
 viewBox="0 0 1920 1080">
 <rect x="566.6" y="674.5" className="st0" width="160" height="122"/>
 <rect x="1138.4" y="545.1" className="st0" width="292" height="244.9"/>
 <polygon className="st1" points="674.5,962.3 675.5,938.3 1230.2,933.1 1230.2,953.6 1198.5,1010.6 1065.3,1046.3 854.3,1047.3 
 725.5,1010.6 "/>
 <polygon className="st1" points="531.8,839.4 434.8,719.2 454.8,634.8 651.8,762.2 741.8,772.1 746.8,948 "/>
 <polygon className="st1" points="1464.3,628 1286,764.5 1183.2,770.9 1193.8,942.7 1431,807.6 1497.4,698.4 "/>
 <rect x="682.4" y="767.1" className="st0" width="539.4" height="198"/>
 <polygon className="st2" points="420.6,554.5 438.6,458.7 659.9,645.6 600,747.2 460,645.6 "/>
 <polygon className="st1" points="677.5,625.7 1269.6,625.7 1323.6,710.1 1262.3,770.1 670.3,771.1 613.4,710.1 "/>
 <polygon className="st0" points="1486.7,471.1 1264,621.1 1328.4,719.8 1468.6,627.6 1512,545.8 "/>
 <polygon className="st1" points="538.7,286.8 611.4,383 504.8,527 423.4,461.8 455.9,330.5 "/>
 <polygon className="st1" points="665,412.3 663,644.3 507,517.9 611.3,374.8 "/>
 <rect x="661.5" y="406.2" className="st0" width="612" height="238.1"/>
 <polygon className="st3" points="1508.4,314.7 1422.3,273 1304.4,370.9 1431.1,533 1533.9,464.9 "/>
 <rect x="669.2" y="15.8" className="st0" width="591" height="139.3"/>
 <polygon className="st1" points="1362.7,317.9 1290.6,160.2 1193.6,82.5 1061.2,83.3 1110.6,249.1 1088.2,413.3 1268.1,417.4 "/>
 <polygon className="st0" points="813.3,254.9 862.9,75.4 1057.9,75.4 1111.3,245.5 1090.2,413.8 838.4,418.4 "/>
 <polygon className="st0" points="744.3,81.1 864.6,84.6 819.1,265.2 847,421.4 694.9,421.4 615.8,393.2 556.6,316.9 629.6,163.8 "/>
 <rect id="stage" x="689" y="24.2" transform="matrix(1 -3.260140e-03 3.260140e-03 1 -0.1538 3.1463)" className="st4" width="552" height="49"/>
 <line className="st5" x1="497.9" y1="300.4" x2="497.9" y2="300.4"/>
 <path className="st6" d="M497.9,300.4"/>
 <path className="st6" d="M702.4-5.3"/>
 <path className="st6" d="M1422.6,354.9"/>
 <path className="st6" d="M894.6,198.2"/>
 <path className="st7" d="M894.6,198.2"/>
 <g >
 <circle id="A-33" className="st4" cx="901.5" cy="104.7" r="14"/>
 <circle id="A-32" className="st4" cx="934.5" cy="102.6" r="14"/>
 <circle id="A-31" className="st4" cx="965.5" cy="102.5" r="14"/>
 <circle id="A-30" className="st4" cx="996.5" cy="102.4" r="14"/>
 <circle id="A-29" className="st4" cx="1026.5" cy="102.3" r="14"/>
 
  <ellipse id="B-33" transform="matrix(0.1537 -0.9881 0.9881 0.1537 613.4661 991.6874)" className="st4" cx="885.6" cy="137.7" rx="14" ry="14"/>
 <circle id="B-31" className="st4" cx="948.6" cy="136.5" r="14"/>
 <circle id="B-30" className="st4" cx="979.6" cy="137.4" r="14"/>
 
  <ellipse id="B-29" transform="matrix(0.1537 -0.9881 0.9881 0.1537 719.6783 1114.8429)" className="st4" cx="1010.6" cy="137.3" rx="14" ry="14"/>
 
  <ellipse id="B-28" transform="matrix(0.1537 -0.9881 0.9881 0.1537 745.1654 1144.4037)" className="st4" cx="1040.6" cy="137.2" rx="14" ry="14"/>
 <circle id="C-24" className="st4" cx="877.7" cy="168.8" r="14"/>
 <circle id="C-23" className="st4" cx="909.7" cy="168.7" r="14"/>
 <circle id="C-22" className="st4" cx="943.7" cy="168.5" r="14"/>
 <circle id="C-21" className="st4" cx="976.7" cy="168.4" r="14"/>
 <circle id="C-20" className="st4" cx="1010.8" cy="169.3" r="14"/>
 <circle id="C-19" className="st4" cx="1044.8" cy="169.3" r="14"/>
 <circle id="B-32" className="st4" cx="916.6" cy="137.6" r="14"/>
 <circle id="E-22" className="st4" cx="870" cy="237.8" r="14"/>
 <circle id="E-21" className="st4" cx="907" cy="237.7" r="14"/>
 <circle id="E-20" className="st4" cx="943" cy="237.5" r="14"/>
 <circle id="E-19" className="st4" cx="982" cy="237.4" r="14"/>
 <circle id="E-18" className="st4" cx="1017" cy="237.4" r="14"/>
 <circle id="E-17" className="st4" cx="1054" cy="237.2" r="14"/>
 <circle id="F-19" className="st4" cx="867.1" cy="273.8" r="14"/>
 <circle id="F-18" className="st4" cx="904.1" cy="273.7" r="14"/>
 <circle id="F-17" className="st4" cx="940.1" cy="273.6" r="14"/>
 <circle id="F-16" className="st4" cx="979.1" cy="273.4" r="14"/>
 <circle id="F-15" className="st4" cx="1014.1" cy="273.3" r="14"/>
 <circle id="F-14" className="st4" cx="1051.1" cy="273.2" r="14"/>
 <circle id="D-21" className="st4" cx="870.9" cy="201.8" r="14"/>
 <circle id="D-20" className="st4" cx="907.9" cy="201.7" r="14"/>
 <circle id="D-19" className="st4" cx="943.9" cy="201.5" r="14"/>
 <circle id="D-18" className="st4" cx="982.9" cy="201.4" r="14"/>
 <circle id="D-17" className="st4" cx="1017.9" cy="201.4" r="14"/>
 <circle id="D-16" className="st4" cx="1054.9" cy="201.2" r="14"/>
 <circle id="G-12" className="st4" cx="868.2" cy="309.8" r="14"/>
 <circle id="G-11" className="st4" cx="905.2" cy="309.7" r="14"/>
 <circle id="G-10" className="st4" cx="941.2" cy="309.6" r="14"/>
 <circle id="G-9" className="st4" cx="980.2" cy="309.4" r="14"/>
 <circle id="G-8" className="st4" cx="1015.2" cy="309.4" r="14"/>
 <circle id="G-7" className="st4" cx="1052.2" cy="309.2" r="14"/>
 <circle id="H-12" className="st4" cx="869.3" cy="344.8" r="14"/>
 <circle id="H-11" className="st4" cx="906.3" cy="344.7" r="14"/>
 <circle id="H-10" className="st4" cx="942.3" cy="344.6" r="14"/>
 <circle id="H-9" className="st4" cx="981.3" cy="344.4" r="14"/>
 <circle id="H-8" className="st4" cx="1016.3" cy="344.4" r="14"/>
 <circle id="H-7" className="st4" cx="1053.3" cy="344.2" r="14"/>
 <circle id="I-10" className="st4" cx="885.4" cy="377.7" r="14"/>
 <circle id="I-8" className="st4" cx="948.4" cy="376.5" r="14"/>
 <circle id="I-7" className="st4" cx="979.4" cy="377.4" r="14"/>
 <circle id="I-6" className="st4" cx="1010.4" cy="377.3" r="14"/>
 <circle id="I-5" className="st4" cx="1040.4" cy="377.2" r="14"/>
 <circle id="I-9" className="st4" cx="916.4" cy="377.6" r="14"/>
 <line className="st4" x1="877.5" y1="83.8" x2="1044.5" y2="82.3"/>
 <line className="st4" x1="848.5" y1="395.9" x2="1075.5" y2="395.2"/>
 <line className="st4" x1="877.5" y1="83.8" x2="830.1" y2="246.9"/>
 <line className="st4" x1="1044.5" y1="82.3" x2="1091.1" y2="244.1"/>
 <line className="st4" x1="830.1" y1="246.9" x2="848.5" y2="395.9"/>
 <line className="st4" x1="1091.1" y1="244.1" x2="1075.5" y2="395.2"/>
 </g>
 <g >
 <g >
  <path className="st4" d="M761.7,89.7"/>
  <path className="st4" d="M767.8,88"/>
  <path className="st4" d="M768.3,87.5"/>
  <line className="st4" x1="589.1" y1="312.1" x2="657.6" y2="166.8"/>
  <line className="st4" x1="657.6" y1="166.8" x2="768.3" y2="87.5"/>
  <circle id="F-22" className="st4" cx="708.9" cy="263.7" r="14"/>
  <circle id="F-20" className="st4" cx="782" cy="285.5" r="14"/>
  <circle id="H-17" className="st4" cx="648.1" cy="322.9" r="14"/>
  <circle id="G-13" className="st4" cx="772.1" cy="321.5" r="14"/>
  <circle id="F-21" className="st4" cx="746" cy="276.6" r="14"/>
  <circle id="H-18" className="st4" cx="618.1" cy="311" r="14"/>
  <circle id="H-15" className="st4" cx="717.2" cy="343.6" r="14"/>
  <circle id="F-24" className="st4" cx="647.8" cy="241.9" r="14"/>
  <circle id="H-14" className="st4" cx="751.2" cy="351.5" r="14"/>
  <circle id="G-17" className="st4" cx="632" cy="277" r="14"/>
  <circle id="H-16" className="st4" cx="682.1" cy="329.8" r="14"/>
  <circle id="F-23" className="st4" cx="677.9" cy="254.8" r="14"/>
  <circle id="H-13" className="st4" cx="787.2" cy="357.5" r="14"/>
  <circle id="G-16" className="st4" cx="663.9" cy="290.9" r="14"/>
  <circle id="I-14" className="st4" cx="662.2" cy="357.9" r="14"/>
  <circle id="G-15" className="st4" cx="700" cy="300.8" r="14"/>
  <circle id="G-14" className="st4" cx="732.1" cy="310.6" r="14"/>
  <circle id="I-13" className="st4" cx="696.3" cy="371.8" r="14"/>
  <circle id="B-36" className="st4" cx="750.5" cy="128.6" r="14"/>
  <circle id="A-34" className="st4" cx="825.3" cy="107.3" r="14"/>
  <circle id="A-35" className="st4" cx="789.4" cy="105.5" r="14"/>
  <circle id="B-34" className="st4" cx="821.5" cy="141.4" r="14"/>
  <circle id="B-35" className="st4" cx="785.5" cy="139.5" r="14"/>
  <circle id="C-28" className="st4" cx="716.5" cy="148.8" r="14"/>
  <circle id="C-26" className="st4" cx="779.7" cy="175.5" r="14"/>
  <circle id="C-27" className="st4" cx="746.6" cy="166.7" r="14"/>
  <circle id="C-25" className="st4" cx="813.6" cy="180.4" r="14"/>
  <circle id="D-23" className="st4" cx="764.8" cy="208.6" r="14"/>
  <circle id="D-24" className="st4" cx="734.8" cy="201.7" r="14"/>
  <circle id="D-22" className="st4" cx="797.8" cy="215.4" r="14"/>
  <circle id="D-26" className="st4" cx="677.7" cy="171.9" r="14"/>
  <circle id="D-25" className="st4" cx="705.8" cy="187.8" r="14"/>
  <circle id="E-24" className="st4" cx="752.9" cy="242.6" r="14"/>
  <circle id="E-25" className="st4" cx="722.9" cy="235.7" r="14"/>
  <circle id="E-23" className="st4" cx="785.9" cy="249.5" r="14"/>
  <circle id="E-26" className="st4" cx="693.8" cy="221.8" r="14"/>
  <circle id="E-27" className="st4" cx="661.8" cy="205.9" r="14"/>
  <circle id="I-12" className="st4" cx="725.3" cy="382.7" r="14"/>
  <circle id="I-11" className="st4" cx="760.3" cy="384.6" r="14"/>
  <line className="st4" x1="768.3" y1="87.5" x2="863.3" y2="89.2"/>
  <line className="st4" x1="863.3" y1="89.2" x2="811.8" y2="256.4"/>
  <line className="st4" x1="811.8" y1="256.4" x2="836.4" y2="399.3"/>
  <line className="st4" x1="635.2" y1="364" x2="719.4" y2="400.6"/>
  <line className="st4" x1="836.4" y1="399.3" x2="719.4" y2="400.6"/>
 </g>
 <line className="st4" x1="589.1" y1="312.1" x2="635.2" y2="364"/>
 </g>
 <g >
 <g >
  <path className="st4" d="M1161.8,85.8"/>
  <path className="st4" d="M1161.3,86.3"/>
  <path className="st4" d="M1161.9,88.8"/>
  <path className="st4" d="M1066.8,87.1"/>
  <path className="st4" d="M1114.4,244"/>
  <path className="st4" d="M1066.8,87.1"/>
  <path className="st4" d="M1269.1,165.5"/>
  <path className="st4" d="M1305.5,293.3"/>
  <line className="st4" x1="1161.8" y1="85.8" x2="1269.1" y2="165.5"/>
  <line className="st4" x1="1339.6" y1="306.2" x2="1269.1" y2="165.5"/>
  <circle id="A-28" className="st4" cx="1119.2" cy="105.9" r="14"/>
  <circle id="A-27" className="st4" cx="1154.2" cy="105.9" r="14"/>
  
    <ellipse id="B-26" transform="matrix(0.1537 -0.9881 0.9881 0.1537 828.5322 1247.1289)" className="st4" cx="1142.3" cy="139.9" rx="14" ry="14"/>
  <circle id="B-25" className="st4" cx="1180.3" cy="132.8" r="14"/>
  <circle id="B-27" className="st4" cx="1105.2" cy="143" r="14"/>
  <circle id="C-15" className="st4" cx="1217.3" cy="153.7" r="14"/>
  <circle id="C-17" className="st4" cx="1150.3" cy="175.9" r="14"/>
  <circle id="C-16" className="st4" cx="1185.4" cy="165.8" r="14"/>
  <circle id="C-18" className="st4" cx="1116.4" cy="182.1" r="14"/>
  <circle id="D-12" className="st4" cx="1249.1" cy="177.4" r="14"/>
  <circle id="D-14" className="st4" cx="1184.5" cy="202.8" r="14"/>
  <circle id="D-13" className="st4" cx="1218.3" cy="192.2" r="14"/>
  <circle id="D-15" className="st4" cx="1150.5" cy="212.9" r="14"/>
  <circle id="E-12" className="st4" cx="1265.3" cy="210.4" r="14"/>
  <circle id="E-14" className="st4" cx="1200.5" cy="235.7" r="14"/>
  <circle id="E-13" className="st4" cx="1234.5" cy="225.1" r="14"/>
  <circle id="E-15" className="st4" cx="1166.6" cy="245.8" r="14"/>
  <circle id="F-9" className="st4" cx="1282.4" cy="241.3" r="14"/>
  <circle id="F-11" className="st4" cx="1217.6" cy="266.7" r="14"/>
  <circle id="F-10" className="st4" cx="1251.6" cy="256.1" r="14"/>
  <circle id="F-12" className="st4" cx="1183.7" cy="276.8" r="14"/>
  <circle id="G-1" className="st4" cx="1295.5" cy="273.3" r="14"/>
  <circle id="G-3" className="st4" cx="1230.7" cy="298.6" r="14"/>
  <circle id="G-2" className="st4" cx="1264.7" cy="288" r="14"/>
  <circle id="G-4" className="st4" cx="1196.8" cy="308.7" r="14"/>
  <circle id="H-1" className="st4" cx="1310.6" cy="305.2" r="14"/>
  <circle id="H-3" className="st4" cx="1245.9" cy="330.6" r="14"/>
  <circle id="H-2" className="st4" cx="1279.8" cy="320" r="14"/>
  <circle id="H-4" className="st4" cx="1211.9" cy="340.7" r="14"/>
  <circle id="F-13" className="st4" cx="1147.7" cy="280" r="14"/>
  <circle id="G-5" className="st4" cx="1161.8" cy="312.9" r="14"/>
  <circle id="H-5" className="st4" cx="1177.9" cy="344.9" r="14"/>
  <circle id="I-2" className="st4" cx="1191.1" cy="375.9" r="14"/>
  <circle id="G-6" className="st4" cx="1125.8" cy="314" r="14"/>
  <circle id="H-6" className="st4" cx="1142.9" cy="345" r="14"/>
  <circle id="I-3" className="st4" cx="1156.1" cy="376.9" r="14"/>
  <circle id="I-4" className="st4" cx="1120.1" cy="377" r="14"/>
  <circle id="I-1" className="st4" cx="1226" cy="370.6" r="14"/>
  <circle id="E-16" className="st4" cx="1133.6" cy="250" r="14"/>
  <path className="st4" d="M1090.9,398"/>
  <path className="st4" d="M1066.8,87.1"/>
  <line className="st4" x1="1161.8" y1="85.8" x2="1066.8" y2="87.1"/>
  <line className="st4" x1="1066.8" y1="87.1" x2="1114.4" y2="244"/>
  <line className="st4" x1="1114.4" y1="244" x2="1090.9" y2="398"/>
 </g>
 <line className="st4" x1="1090.9" y1="398" x2="1250.9" y2="397.5"/>
 <line className="st4" x1="1339.6" y1="306.2" x2="1250.9" y2="397.5"/>
 </g>
 <g >
 <path className="st8" d="M498.1,335.1"/>
 <g>
  <path className="st8" d="M437,460.3c-0.3-91.7,35.4-141,103.9-161.8"/>
  <line className="st8" x1="601.2" y1="377.3" x2="506.7" y2="513.6"/>
  <line className="st8" x1="541" y1="298.5" x2="601.2" y2="377.3"/>
  <circle id="A-52" className="st8" cx="570.3" cy="377.3" r="14"/>
  <circle id="B-65" className="st8" cx="517.2" cy="381.6" r="14"/>
  <circle id="B-64" className="st8" cx="545.4" cy="401.5" r="14"/>
  <circle id="C-54" className="st8" cx="472.3" cy="386.8" r="14"/>
  <circle id="C-53" className="st8" cx="499.8" cy="406.7" r="14"/>
  <circle id="C-52" className="st8" cx="526.4" cy="426.6" r="14"/>
  <circle id="A-53" className="st8" cx="543.5" cy="358" r="14"/>
  <circle id="B-66" className="st8" cx="492.2" cy="356.6" r="14"/>
  <circle id="D-51" className="st8" cx="486.2" cy="440.6" r="14"/>
  <circle id="D-50" className="st8" cx="515" cy="456.6" r="14"/>
  <circle id="D-52" className="st8" cx="457.8" cy="423.7" r="14"/>
  <circle id="E-52" className="st8" cx="496.6" cy="481.7" r="14"/>
  <circle id="E-53" className="st8" cx="465.6" cy="462.8" r="14"/>
  <circle id="A-54" className="st8" cx="521.1" cy="334.5" r="14"/>
 </g>
 <line className="st8" x1="436.5" y1="459.8" x2="506.7" y2="513.6"/>
 </g>
 <g >
 <g >
  <line className="st4" x1="661.8" y1="415.9" x2="662.4" y2="624.9"/>
  <line className="st4" x1="661.8" y1="415.9" x2="616.7" y2="385.1"/>
  <circle id="B-63" className="st4" cx="605.2" cy="435.7" r="14"/>
  <circle id="B-62" className="st4" cx="633.5" cy="452.6" r="14"/>
  <circle id="C-51" className="st4" cx="586.3" cy="461.5" r="14"/>
  <circle id="C-50" className="st4" cx="613.8" cy="478" r="14"/>
  <circle id="D-49" className="st4" cx="567.6" cy="488.9" r="14"/>
  <circle id="D-48" className="st4" cx="596.3" cy="507.2" r="14"/>
  <circle id="E-51" className="st4" cx="551.2" cy="516.4" r="14"/>
  <circle id="E-50" className="st4" cx="579.8" cy="534.7" r="14"/>
  <circle id="D-47" className="st4" cx="622.5" cy="526.9" r="14"/>
  <circle id="C-49" className="st4" cx="639.4" cy="498.5" r="14"/>
  <circle id="E-49" className="st4" cx="604.8" cy="554.7" r="14"/>
  <circle id="E-48" className="st4" cx="631.2" cy="575" r="14"/>
  <circle id="A-51" className="st4" cx="621.7" cy="409.2" r="14"/>
 </g>
 <line className="st4" x1="616.7" y1="385.1" x2="522" y2="514.5"/>
 <line className="st4" x1="662.4" y1="624.9" x2="522" y2="514.5"/>
 </g>
 <g >
 <g >
  <path className="st4" d="M1208.3,435.2"/>
  <line className="st4" x1="679.8" y1="617.9" x2="1256.8" y2="616"/>
  <line className="st4" x1="1256.8" y1="616" x2="1256.2" y2="407"/>
  <line className="st4" x1="1256.2" y1="407" x2="1162.2" y2="407.4"/>
  <circle id="A-49" className="st4" cx="774.2" cy="432.6" r="14"/>
  <circle id="A-48" className="st4" cx="807.2" cy="431.5" r="14"/>
  <circle id="B-60" className="st4" cx="739.3" cy="465.7" r="14"/>
  <circle id="B-59" className="st4" cx="772.3" cy="464.6" r="14"/>
  <circle id="B-58" className="st4" cx="804.3" cy="463.5" r="14"/>
  <circle id="C-48" className="st4" cx="700.5" cy="497.9" r="14"/>
  <circle id="C-47" className="st4" cx="734.5" cy="497.8" r="14"/>
  <circle id="C-46" className="st4" cx="771.5" cy="497.6" r="14"/>
  <circle id="C-45" className="st4" cx="805.5" cy="497.5" r="14"/>
  <circle id="D-46" className="st4" cx="701.6" cy="529.9" r="14"/>
  <circle id="D-45" className="st4" cx="735.6" cy="529.8" r="14"/>
  <circle id="D-44" className="st4" cx="772.6" cy="529.6" r="14"/>
  <circle id="D-43" className="st4" cx="806.6" cy="529.5" r="14"/>
  <circle id="E-47" className="st4" cx="700.7" cy="564.9" r="14"/>
  <circle id="E-46" className="st4" cx="734.7" cy="564.8" r="14"/>
  <circle id="E-45" className="st4" cx="771.7" cy="564.6" r="14"/>
  <circle id="E-44" className="st4" cx="805.7" cy="564.5" r="14"/>
  <circle id="F-38" className="st4" cx="701.8" cy="596.9" r="14"/>
  <circle id="F-37" className="st4" cx="735.8" cy="596.8" r="14"/>
  <circle id="F-36" className="st4" cx="772.8" cy="596.6" r="14"/>
  <circle id="F-35" className="st4" cx="806.8" cy="596.5" r="14"/>
  <circle id="A-41" className="st4" cx="1155.2" cy="428.4" r="14"/>
  <circle id="A-40" className="st4" cx="1189.2" cy="429.3" r="14"/>
  <circle id="B-51" className="st4" cx="1127.3" cy="462.5" r="14"/>
  <circle id="B-50" className="st4" cx="1161.3" cy="462.4" r="14"/>
  <circle id="B-49" className="st4" cx="1194.3" cy="463.2" r="14"/>
  <circle id="C-38" className="st4" cx="1128.5" cy="496.5" r="14"/>
  <circle id="C-37" className="st4" cx="1162.5" cy="496.4" r="14"/>
  <circle id="C-36" className="st4" cx="1199.5" cy="496.2" r="14"/>
  <circle id="C-35" className="st4" cx="1233.5" cy="496.1" r="14"/>
  <circle id="D-36" className="st4" cx="1129.6" cy="528.5" r="14"/>
  <circle id="D-35" className="st4" cx="1163.6" cy="528.3" r="14"/>
  <circle id="D-34" className="st4" cx="1200.6" cy="528.2" r="14"/>
  <circle id="D-33" className="st4" cx="1234.6" cy="528.1" r="14"/>
  <circle id="E-37" className="st4" cx="1128.7" cy="563.5" r="14"/>
  <circle id="E-36" className="st4" cx="1162.7" cy="563.4" r="14"/>
  <circle id="E-35" className="st4" cx="1199.7" cy="563.2" r="14"/>
  <circle id="E-34" className="st4" cx="1233.7" cy="563.1" r="14"/>
  <circle id="F-28" className="st4" cx="1129.8" cy="595.5" r="14"/>
  <circle id="F-27" className="st4" cx="1163.8" cy="595.3" r="14"/>
  <circle id="F-26" className="st4" cx="1200.8" cy="595.2" r="14"/>
  <circle id="F-25" className="st4" cx="1234.8" cy="595.1" r="14"/>
  <circle id="A-57" className="st4" cx="898.3" cy="429.2" r="14"/>
  <circle id="A-56" className="st4" cx="934.2" cy="430.1" r="14"/>
  <circle id="A-55" className="st4" cx="968.2" cy="432" r="14"/>
  <circle id="B-57" className="st4" cx="879.3" cy="461.3" r="14"/>
  <circle id="B-56" className="st4" cx="913.3" cy="461.2" r="14"/>
  <circle id="B-55" className="st4" cx="950.3" cy="461.1" r="14"/>
  <circle id="B-54" className="st4" cx="984.3" cy="460.9" r="14"/>
  <circle id="C-44" className="st4" cx="880.4" cy="495.3" r="14"/>
  <circle id="C-43" className="st4" cx="914.4" cy="495.2" r="14"/>
  <circle id="C-42" className="st4" cx="951.4" cy="495" r="14"/>
  <circle id="C-41" className="st4" cx="985.4" cy="494.9" r="14"/>
  <circle id="D-42" className="st4" cx="881.6" cy="527.3" r="14"/>
  <circle id="D-41" className="st4" cx="915.6" cy="527.2" r="14"/>
  <circle id="D-40" className="st4" cx="952.6" cy="527" r="14"/>
  <circle id="D-39" className="st4" cx="986.6" cy="526.9" r="14"/>
  <circle id="E-43" className="st4" cx="880.7" cy="562.3" r="14"/>
  <circle id="E-42" className="st4" cx="914.7" cy="562.2" r="14"/>
  <circle id="E-41" className="st4" cx="951.7" cy="562" r="14"/>
  <circle id="E-40" className="st4" cx="985.7" cy="561.9" r="14"/>
  <circle id="F-34" className="st4" cx="881.8" cy="594.3" r="14"/>
  <circle id="F-33" className="st4" cx="915.8" cy="594.2" r="14"/>
  <circle id="F-32" className="st4" cx="952.8" cy="594" r="14"/>
  <circle id="F-31" className="st4" cx="986.8" cy="593.9" r="14"/>
  <circle id="A-44" className="st4" cx="1003.2" cy="431.9" r="14"/>
  <circle id="A-43" className="st4" cx="1039.2" cy="431.8" r="14"/>
  <circle id="B-53" className="st4" cx="1019.3" cy="461.8" r="14"/>
  <circle id="B-52" className="st4" cx="1053.3" cy="461.7" r="14"/>
  <circle id="C-40" className="st4" cx="1020.4" cy="495.8" r="14"/>
  <circle id="C-39" className="st4" cx="1054.4" cy="495.7" r="14"/>
  <circle id="D-38" className="st4" cx="1021.6" cy="527.8" r="14"/>
  <circle id="D-37" className="st4" cx="1055.6" cy="527.7" r="14"/>
  <circle id="E-39" className="st4" cx="1020.7" cy="562.8" r="14"/>
  <circle id="E-38" className="st4" cx="1054.7" cy="562.7" r="14"/>
  <circle id="F-30" className="st4" cx="1021.8" cy="594.8" r="14"/>
  <circle id="F-29" className="st4" cx="1055.8" cy="594.7" r="14"/>
  <circle id="A-42" className="st4" cx="1124.2" cy="428.5" r="14"/>
  <circle id="B-48" className="st4" cx="1226.3" cy="463.1" r="14"/>
  <circle id="A-50" className="st4" cx="741.2" cy="432.7" r="14"/>
  <circle id="B-61" className="st4" cx="708.4" cy="467.8" r="14"/>
  <path className="st4" d="M838.2,408.4"/>
 </g>
 <line className="st4" x1="679.8" y1="617.9" x2="679.2" y2="408.9"/>
 <line className="st4" x1="1162.2" y1="407.4" x2="679.2" y2="408.9"/>
 </g>
 <g >
 <g >
  <path className="st9" d="M1423.1,290c56-7.2,99.3,74,99.5,170.6"/>
  <line className="st9" x1="1326.4" y1="373.4" x2="1423.1" y2="290"/>
  <path className="st9" d="M1421.7,328.7"/>                                                                 
  ${  circles.map((seat)=>{
    if(seat.selection){
     return `<circle id="${seat.id}" class="gainsboro" cx="${seat.cx}" cy="${seat.cy}" r="14"/>`
    }
    return `<circle id="${seat.id}" style="fill:{${seat.color}}" cx="${seat.cx}" cy="${seat.cy}" r="14"/>`
  }) 
}
  
 </g>
 <line className="st9" x1="1320.8" y1="376.6" x2="1430.3" y2="520.3"/>
 <line className="st9" x1="1517.1" y1="464" x2="1430.3" y2="520.3"/>
 </g>
 <g >
 <g >
  <line className="st4" x1="1268.2" y1="628.1" x2="1325.5" y2="716.9"/>
  <circle id="A-61" className="st4" cx="1296" cy="631.8" r="14"/>
  <circle id="A-60" className="st4" cx="1324.4" cy="613.1" r="14"/>
  <circle id="A-59" className="st4" cx="1355.3" cy="592.8" r="14"/>
  <circle id="A-58" className="st4" cx="1383.7" cy="574.1" r="14"/>
  <circle id="B-72" className="st4" cx="1314.4" cy="658" r="14"/>
  <circle id="B-71" className="st4" cx="1342.8" cy="639.3" r="14"/>
  <circle id="B-70" className="st4" cx="1373.7" cy="619" r="14"/>
  <circle id="B-69" className="st4" cx="1402.2" cy="600.3" r="14"/>
  <circle id="C-58" className="st4" cx="1335.6" cy="688.3" r="14"/>
  <circle id="C-57" className="st4" cx="1363.9" cy="669.6" r="14"/>
  <circle id="C-56" className="st4" cx="1394.9" cy="649.3" r="14"/>
  <circle id="C-55" className="st4" cx="1423.3" cy="630.6" r="14"/>
  <circle id="A-56_1_" className="st4" cx="1440.8" cy="531.4" r="14"/>
  <circle id="A-55_1_" className="st4" cx="1468.7" cy="511.9" r="14"/>
  <circle id="A-57_1_" className="st4" cx="1416" cy="550" r="14"/>
  <circle id="B-67" className="st4" cx="1461.9" cy="559.4" r="14"/>
  <circle id="B-68" className="st4" cx="1437" cy="577.8" r="14"/>
 </g>
 <line className="st4" x1="1268.2" y1="628.1" x2="1480.7" y2="483.4"/>
 <line className="st4" x1="1325.5" y1="716.9" x2="1455.2" y2="629.4"/>
 <line className="st4" x1="1480.7" y1="483.4" x2="1501.8" y2="545.2"/>
 <line className="st4" x1="1455.2" y1="629.4" x2="1501.8" y2="545.2"/>
 </g>
 <g >
 <g >
  <line className="st4" x1="678" y1="761.7" x2="1255" y2="759.7"/>
  <circle id="A-75" className="st4" cx="694.7" cy="667.5" r="14"/>
  <circle id="A-74" className="st4" cx="731.7" cy="667.4" r="14"/>
  <circle id="A-73" className="st4" cx="765.7" cy="667.3" r="14"/>
  <circle id="B-86" className="st4" cx="695.8" cy="699.5" r="14"/>
  <circle id="B-85" className="st4" cx="732.8" cy="699.4" r="14"/>
  <circle id="B-84" className="st4" cx="766.8" cy="699.4" r="14"/>
  <circle id="C-72" className="st4" cx="678" cy="731.7" r="14"/>
  <circle id="C-71" className="st4" cx="715" cy="731.5" r="14"/>
  <circle id="C-70" className="st4" cx="749" cy="731.4" r="14"/>
  <circle id="A-64" className="st4" cx="1170.7" cy="659" r="14"/>
  <circle id="A-63" className="st4" cx="1207.7" cy="658.9" r="14"/>
  <circle id="A-62" className="st4" cx="1241.7" cy="658.7" r="14"/>
  <circle id="B-75" className="st4" cx="1171.8" cy="691" r="14"/>
  <circle id="B-74" className="st4" cx="1208.8" cy="690.9" r="14"/>
  <circle id="B-73" className="st4" cx="1242.8" cy="690.7" r="14"/>
  <circle id="C-61" className="st4" cx="1192.9" cy="723" r="14"/>
  <circle id="C-60" className="st4" cx="1229.9" cy="722.8" r="14"/>
  <circle id="C-59" className="st4" cx="1263.9" cy="722.7" r="14"/>
  <circle id="A-72" className="st4" cx="821.7" cy="662.1" r="14"/>
  <circle id="A-71" className="st4" cx="855.7" cy="662" r="14"/>
  <circle id="A-70" className="st4" cx="892.7" cy="661.9" r="14"/>
  <circle id="A-69" className="st4" cx="926.7" cy="661.8" r="14"/>
  <circle id="B-83" className="st4" cx="822.8" cy="694.1" r="14"/>
  <circle id="B-82" className="st4" cx="856.8" cy="694.1" r="14"/>
  <circle id="B-81" className="st4" cx="893.8" cy="693.9" r="14"/>
  <circle id="B-80" className="st4" cx="927.8" cy="693.8" r="14"/>
  <circle id="A-68" className="st4" cx="1004.7" cy="661.5" r="14"/>
  <circle id="A-67" className="st4" cx="1038.7" cy="661.5" r="14"/>
  <circle id="A-66" className="st4" cx="1075.7" cy="661.3" r="14"/>
  <circle id="A-65" className="st4" cx="1109.7" cy="661.2" r="14"/>
  <circle id="B-79" className="st4" cx="1005.8" cy="693.5" r="14"/>
  <circle id="B-78" className="st4" cx="1039.8" cy="693.5" r="14"/>
  <circle id="B-77" className="st4" cx="1076.8" cy="693.3" r="14"/>
  <circle id="B-76" className="st4" cx="1110.8" cy="693.2" r="14"/>
  <circle id="C-69" className="st4" cx="823.9" cy="731.1" r="14"/>
  <circle id="C-68" className="st4" cx="858" cy="731.1" r="14"/>
  <circle id="C-67" className="st4" cx="895" cy="730.9" r="14"/>
  <circle id="C-66" className="st4" cx="929" cy="730.8" r="14"/>
  <circle id="C-65" className="st4" cx="1007" cy="730.6" r="14"/>
  <circle id="C-64" className="st4" cx="1041" cy="730.5" r="14"/>
  <circle id="C-63" className="st4" cx="1078" cy="730.3" r="14"/>
  <circle id="C-62" className="st4" cx="1112" cy="730.2" r="14"/>
 </g>
 <line className="st4" x1="1255" y1="759.7" x2="1313.8" y2="711.6"/>
 <line className="st4" x1="678" y1="761.7" x2="626.8" y2="708.8"/>
 <line className="st4" x1="1313.8" y1="711.6" x2="1260.6" y2="630.7"/>
 <line className="st4" x1="626.8" y1="708.8" x2="687.6" y2="632.6"/>
 <line className="st4" x1="1260.6" y1="630.7" x2="687.6" y2="632.6"/>
 </g>
 <g >
 <g >
  <line className="st4" x1="654.5" y1="645.6" x2="606.6" y2="738.2"/>
  <circle id="A-79" className="st4" cx="545.8" cy="580" r="14"/>
  <circle id="A-78" className="st4" cx="572.4" cy="601.2" r="14"/>
  <circle id="A-77" className="st4" cx="601.3" cy="624.3" r="14"/>
  <circle id="A-76" className="st4" cx="627.9" cy="645.5" r="14"/>
  <circle id="B-90" className="st4" cx="526.7" cy="605.7" r="14"/>
  <circle id="B-89" className="st4" cx="553.2" cy="626.9" r="14"/>
  <circle id="B-88" className="st4" cx="582.2" cy="650" r="14"/>
  <circle id="B-87" className="st4" cx="608.7" cy="671.2" r="14"/>
  <circle id="C-76" className="st4" cx="504.4" cy="635.2" r="14"/>
  <circle id="C-75" className="st4" cx="530.9" cy="656.4" r="14"/>
  <circle id="C-74" className="st4" cx="559.9" cy="679.5" r="14"/>
  <circle id="C-73" className="st4" cx="586.4" cy="700.7" r="14"/>
  <circle id="A-82" className="st4" cx="465.4" cy="516.5" r="14"/>
  <circle id="A-81" className="st4" cx="494.4" cy="539.5" r="14"/>
  <circle id="A-80" className="st4" cx="520.9" cy="560.7" r="14"/>
  <circle id="B-92" className="st4" cx="475.6" cy="564.9" r="14"/>
  <circle id="B-91" className="st4" cx="502.2" cy="586.1" r="14"/>
 </g>
 <line className="st4" x1="654.5" y1="645.6" x2="441.6" y2="475"/>
 <line className="st4" x1="606.6" y1="738.2" x2="469.6" y2="640.9"/>
 <line className="st4" x1="441.6" y1="475" x2="429.1" y2="556.6"/>
 <line className="st4" x1="469.6" y1="640.9" x2="429.1" y2="556.6"/>
 </g>
 <g >
 <g >
  <line className="st4" x1="766.4" y1="932.1" x2="1157.4" y2="928.8"/>
  <line className="st4" x1="1157.4" y1="928.8" x2="1164.9" y2="777.8"/>
  <circle id="A-18" className="st4" cx="786.9" cy="800.1" r="14"/>
  <circle id="A-17" className="st4" cx="820.9" cy="799.9" r="14"/>
  <circle id="A-16" className="st4" cx="857.9" cy="799.8" r="14"/>
  <circle id="A-15" className="st4" cx="891.9" cy="799.7" r="14"/>
  <circle id="B-17" className="st4" cx="788" cy="832.1" r="14"/>
  <circle id="B-16" className="st4" cx="822" cy="831.9" r="14"/>
  <circle id="B-15" className="st4" cx="859" cy="831.8" r="14"/>
  <circle id="B-14" className="st4" cx="893" cy="831.7" r="14"/>
  <circle id="A-14" className="st4" cx="926.9" cy="800.5" r="14"/>
  <circle id="B-13" className="st4" cx="928" cy="832.5" r="14"/>
  <circle id="A-13" className="st4" cx="992.9" cy="798.3" r="14"/>
  <circle id="A-12" className="st4" cx="1026.9" cy="798.3" r="14"/>
  <circle id="A-11" className="st4" cx="1063.9" cy="798.1" r="14"/>
  <circle id="A-10" className="st4" cx="1097.9" cy="798" r="14"/>
  <circle id="B-12" className="st4" cx="994" cy="830.3" r="14"/>
  <circle id="B-11" className="st4" cx="1028" cy="830.3" r="14"/>
  <circle id="B-10" className="st4" cx="1065" cy="830.1" r="14"/>
  <circle id="B-9" className="st4" cx="1099" cy="830" r="14"/>
  <circle id="A-9" className="st4" cx="1132.9" cy="798.9" r="14"/>
  <circle id="B-8" className="st4" cx="1134" cy="830.9" r="14"/>
  <circle id="C-12" className="st4" cx="785.2" cy="864" r="14"/>
  <circle id="C-11" className="st4" cx="819.2" cy="864" r="14"/>
  <circle id="C-10" className="st4" cx="856.2" cy="863.8" r="14"/>
  <circle id="C-9" className="st4" cx="890.2" cy="863.7" r="14"/>
  <circle id="C-8" className="st4" cx="925.2" cy="864.6" r="14"/>
  <circle id="C-7" className="st4" cx="999.1" cy="862.4" r="14"/>
  <circle id="C-6" className="st4" cx="1033.1" cy="862.2" r="14"/>
  <circle id="C-5" className="st4" cx="1070.1" cy="862.1" r="14"/>
  <circle id="C-4" className="st4" cx="1104.1" cy="862" r="14"/>
  <circle id="C-3" className="st4" cx="1139.2" cy="862.8" r="14"/>
  <circle id="D-11" className="st4" cx="789.4" cy="910.1" r="14"/>
  <circle id="D-10" className="st4" cx="823.4" cy="909.9" r="14"/>
  
    <ellipse id="D-9" transform="matrix(0.1537 -0.9881 0.9881 0.1537 -170.8258 1620.1195)" className="st4" cx="860.4" cy="909.8" rx="14" ry="14"/>
  
    <ellipse id="D-8" transform="matrix(0.1537 -0.9881 0.9881 0.1537 -141.9272 1653.6107)" className="st4" cx="894.4" cy="909.7" rx="14" ry="14"/>
  <circle id="D-7" className="st4" cx="929.4" cy="910.5" r="14"/>
  <circle id="D-6" className="st4" cx="966.4" cy="909.4" r="14"/>
  
    <ellipse id="D-5" transform="matrix(0.1537 -0.9881 0.9881 0.1537 -51.9192 1758.098)" className="st4" cx="1000.4" cy="909.4" rx="14" ry="14"/>
  
    <ellipse id="D-4" transform="matrix(0.1537 -0.9881 0.9881 0.1537 -20.4621 1794.5367)" className="st4" cx="1037.4" cy="909.2" rx="14" ry="14"/>
  <circle id="D-3" className="st4" cx="1071.4" cy="909.1" r="14"/>
  <circle id="D-2" className="st4" cx="1106.4" cy="910" r="14"/>
  <circle id="D-1" className="st4" cx="1139.4" cy="909.8" r="14"/>
 </g>
 <line className="st4" x1="766.4" y1="932.1" x2="750.8" y2="772.1"/>
 <line className="st4" x1="1164.9" y1="777.8" x2="750.8" y2="772.1"/>
 </g>
 <g >
 <g >
  <line className="st4" x1="540.3" y1="828.8" x2="737.7" y2="931.2"/>
  <line className="st4" x1="730.2" y1="778.2" x2="737.7" y2="931.2"/>
  <circle id="A-26" className="st4" cx="497.8" cy="715.7" r="14"/>
  <circle id="A-25" className="st4" cx="527.3" cy="732.6" r="14"/>
  <circle id="A-24" className="st4" cx="559.5" cy="750.8" r="14"/>
  <circle id="A-23" className="st4" cx="589" cy="767.6" r="14"/>
  <circle id="A-22" className="st4" cx="619" cy="785.8" r="14"/>
  <circle id="B-24" className="st4" cx="512.8" cy="759.6" r="14"/>
  <circle id="B-23" className="st4" cx="541.9" cy="777.3" r="14"/>
  <circle id="B-22" className="st4" cx="573.6" cy="796.3" r="14"/>
  <circle id="B-21" className="st4" cx="602.7" cy="813.9" r="14"/>
  <circle id="A-21" className="st4" cx="647.3" cy="800.5" r="14"/>
  <circle id="A-20" className="st4" cx="681.3" cy="800.3" r="14"/>
  <circle id="B-20" className="st4" cx="648.4" cy="832.5" r="14"/>
  <circle id="B-19" className="st4" cx="682.4" cy="832.3" r="14"/>
  <circle id="A-19" className="st4" cx="716.3" cy="801.2" r="14"/>
  <circle id="B-18" className="st4" cx="717.4" cy="833.2" r="14"/>
  <circle id="C-14" className="st4" cx="679.5" cy="864.3" r="14"/>
  <circle id="C-13" className="st4" cx="714.5" cy="865.2" r="14"/>
 </g>
 <path className="st4" d="M462.8,643.1"/>
 <path className="st4" d="M730.2,778.2"/>
 <line className="st4" x1="540.3" y1="828.8" x2="450" y2="711.1"/>
 <line className="st4" x1="462.8" y1="643.1" x2="450" y2="711.1"/>
 <line className="st4" x1="730.2" y1="778.2" x2="648.1" y2="769.5"/>
 <line className="st4" x1="462.8" y1="643.1" x2="648.1" y2="769.5"/>
 </g>
 <g >
 <g>
  <path className="st4" d="M1179.8,894.6"/>
  <path className="st4" d="M1406.6,811.8"/>
  <line className="st4" x1="1406.6" y1="811.8" x2="1180" y2="929.6"/>
  <circle id="A-8" className="st4" cx="1208.5" cy="801.5" r="14"/>
  <circle id="A-7" className="st4" cx="1242.5" cy="801.4" r="14"/>
  <circle id="B-7" className="st4" cx="1209.6" cy="833.5" r="14"/>
  <circle id="B-6" className="st4" cx="1243.6" cy="833.4" r="14"/>
  <circle id="A-6" className="st4" cx="1277.5" cy="802.3" r="14"/>
  <circle id="B-5" className="st4" cx="1278.6" cy="834.2" r="14"/>
  <circle id="C-1" className="st4" cx="1240.7" cy="865.4" r="14"/>
  <circle id="C-2" className="st4" cx="1207.8" cy="866.5" r="14"/>
  <circle id="A-5" className="st4" cx="1313.1" cy="782.3" r="14"/>
  <circle id="A-4" className="st4" cx="1342.8" cy="765.6" r="14"/>
  <circle id="A-3" className="st4" cx="1375.1" cy="747.5" r="14"/>
  <circle id="A-2" className="st4" cx="1404.7" cy="730.8" r="14"/>
  <circle id="A-1" className="st4" cx="1435.7" cy="714.6" r="14"/>
  <circle id="B-4" className="st4" cx="1323.3" cy="813.8" r="14"/>
  <circle id="B-3" className="st4" cx="1352.9" cy="797.1" r="14"/>
  <circle id="B-2" className="st4" cx="1385.2" cy="778.8" r="14"/>
  <circle id="B-1" className="st4" cx="1414.8" cy="762.1" r="14"/>
 </g>
 <line className="st4" x1="1180" y1="929.6" x2="1179.5" y2="776.6"/>
 <line className="st4" x1="1406.6" y1="811.8" x2="1478.2" y2="713.6"/>
 <line className="st4" x1="1179.5" y1="776.6" x2="1277.5" y2="776.3"/>
 <line className="st4" x1="1478.2" y1="713.6" x2="1459.1" y2="654.7"/>
 <line className="st4" x1="1277.5" y1="776.3" x2="1459.1" y2="654.7"/>
 </g>
 <g >
 <g >
  <path className="st4" d="M1229.1,951.6"/>
  <path className="st4" d="M744.1,955.1"/>
  <circle id="E11" className="st4" cx="768.2" cy="975.1" r="14"/>
  <circle id="E-10" className="st4" cx="802.2" cy="974.9" r="14"/>
  <circle id="E-9" className="st4" cx="839.2" cy="974.8" r="14"/>
  <circle id="E-8" className="st4" cx="873.2" cy="974.8" r="14"/>
  <circle id="E-7" className="st4" cx="908.2" cy="975.6" r="14"/>
  <circle id="E-6" className="st4" cx="945.2" cy="974.5" r="14"/>
  <circle id="E-5" className="st4" cx="979.2" cy="974.4" r="14"/>
  <circle id="E-4" className="st4" cx="1016.2" cy="974.2" r="14"/>
  <circle id="E-3" className="st4" cx="1050.2" cy="974.2" r="14"/>
  <circle id="E-2" className="st4" cx="1085.2" cy="975.1" r="14"/>
  <circle id="E-1" className="st4" cx="1118.2" cy="974.9" r="14"/>
  <circle id="F-8" className="st4" cx="874.3" cy="1007.8" r="14"/>
  <circle id="F-7" className="st4" cx="909.3" cy="1008.6" r="14"/>
  <circle id="F-6" className="st4" cx="946.3" cy="1007.5" r="14"/>
  <circle id="F-5" className="st4" cx="980.3" cy="1007.4" r="14"/>
  <circle id="F-4" className="st4" cx="1017.3" cy="1007.2" r="14"/>
 </g>
 <line className="st4" x1="679.2" y1="944.3" x2="679.2" y2="944.3"/>
 <line className="st4" x1="679.2" y1="944.3" x2="1224.1" y2="942.5"/>
 <line className="st4" x1="679.2" y1="944.3" x2="729.4" y2="1004.2"/>
 <line className="st4" x1="1224.1" y1="942.5" x2="1189.3" y2="1007.7"/>
 <line className="st4" x1="729.4" y1="1004.2" x2="860.4" y2="1035.7"/>
 <line className="st4" x1="1189.3" y1="1007.7" x2="1048.4" y2="1034.1"/>
 <line className="st4" x1="860.4" y1="1035.7" x2="1048.4" y2="1034.1"/>
 </g>
 <polygon className="st0" points="1291.8,624.7 1442.4,515.8 1310.4,344.3 1254.4,400.2 1270.4,597.3 "/>
 <g >
 <g >
  <line className="st4" x1="1277.4" y1="399.3" x2="1306.3" y2="368.2"/>
  <line className="st4" x1="1306.3" y1="368.2" x2="1414.8" y2="511.8"/>
  <circle id="C-34" className="st4" cx="1310.7" cy="481.2" r="14"/>
  <circle id="B-47" className="st4" cx="1307.7" cy="445.2" r="14"/>
  <circle id="D-32" className="st4" cx="1314.9" cy="513.2" r="14"/>
  <circle id="D-31" className="st4" cx="1345.8" cy="492" r="14"/>
  <circle id="E-33" className="st4" cx="1316.2" cy="546.1" r="14"/>
  <circle id="E-32" className="st4" cx="1344" cy="526.8" r="14"/>
  <circle id="E-31" className="st4" cx="1374.4" cy="505.7" r="14"/>
  <circle id="C-33" className="st4" cx="1337.7" cy="463.1" r="14"/>
  <circle id="A-39" className="st4" cx="1305.6" cy="414.2" r="14"/>
 </g>
 <line className="st4" x1="1277.4" y1="399.3" x2="1289.1" y2="605.2"/>
 <line className="st4" x1="1414.8" y1="511.8" x2="1289.1" y2="605.2"/>
 </g>
 </svg>`;

 anychart.onDocumentReady(function () {
  
  var map = anychart.map();
  map.choropleth(circles);
  map.geoData(stadium);
   // set the tooltips
   map.tooltip().titleFormat("{%zone} \n {%id}").hAlign("center");
   map.tooltip().format("Price: ${%value}.00\nCategory: {%category}");
  
  map.title('SVG Sample Map');
  
  // Disables zoom On Mouse Wheel
  map.interactivity().zoomOnMouseWheel(true);
  // Disables zoom on double click
  map.interactivity().keyboardZoomAndMove(true);
  // Disables zoom on double click
  map.interactivity().zoomOnDoubleClick(true);
  // draw a map
  /*map.listen("click", function(e){
    selected(e.target.iterator.g.id);
  })*/

  document.getElementById('zzz').addEventListener('click', function(){
    map.zoom(2);
  })
  document.getElementById('yyy').addEventListener('click', function(){
    map.zoom(-1);
  })

  map.container('container2');    
  map.draw();
  circles.map((seat)=>{
    if(!seat.selection){
      document.getElementById(seat.id).addEventListener('click',function(e){
        if(seat.color === "dodgerblue"){
          document.getElementById(seat.id).style.fill= "lime";
          seat.color = "lime";
          selected(seat.id);
          
          
        } else {
          document.getElementById(seat.id).style.fill= "dodgerblue";
          seat.color = "dodgerblue";
          selected(seat.id);
        }
        console.log(e.target.attributes[7]);
      })
    }
  })
  let a =document.getElementById('A-37');
  console.log(a);
  
})


  return(
    <div className="col s12">
      <div className="card">
        <div id="container2" className="card-image center-align">
          </div>
          <div className="card-content grey lighten-3 align-center">
            <p className="center getTicket"><a id="zzz" className="waves-effect waves-light btn ticket-btn orange darken-3">buy tickets</a></p>
          </div>
          <div className="card-content grey lighten-3 align-center">
            <p className="center getTicket"><a id="yyy" className="waves-effect waves-light btn ticket-btn green darken-3">tickets</a></p>
          </div>
          <div className="card-action">
            <div className="collection">
              {seats.map((seat)=>{
                if(seat.color === 'lime'){
                  while (document.getElementById('container2').childNodes.length > 1) {
                    document.getElementById('container2').removeChild(document.getElementById('container2').lastChild);
                    console.log(document.getElementById('container2'));
                }
                  return(
                    <a href="#!" className="collection-item" key={seat.code}><span className="new badge">S/.{seat.price}</span>{seat.category} - {seat.id}</a>
                  )
                }
              })}
          </div>
        </div>
      </div>
   </div>
  )
}

export default BuyTickets;