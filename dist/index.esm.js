/**
 * 农历1900-2100的润大小信息表
 * @Array Of Property
 * @return Hex
 */
const LunarInfo = [
    0x04bd8,
    0x04ae0,
    0x0a570,
    0x054d5,
    0x0d260,
    0x0d950,
    0x16554,
    0x056a0,
    0x09ad0,
    0x055d2,
    0x04ae0,
    0x0a5b6,
    0x0a4d0,
    0x0d250,
    0x1d255,
    0x0b540,
    0x0d6a0,
    0x0ada2,
    0x095b0,
    0x14977,
    0x04970,
    0x0a4b0,
    0x0b4b5,
    0x06a50,
    0x06d40,
    0x1ab54,
    0x02b60,
    0x09570,
    0x052f2,
    0x04970,
    0x06566,
    0x0d4a0,
    0x0ea50,
    0x06e95,
    0x05ad0,
    0x02b60,
    0x186e3,
    0x092e0,
    0x1c8d7,
    0x0c950,
    0x0d4a0,
    0x1d8a6,
    0x0b550,
    0x056a0,
    0x1a5b4,
    0x025d0,
    0x092d0,
    0x0d2b2,
    0x0a950,
    0x0b557,
    0x06ca0,
    0x0b550,
    0x15355,
    0x04da0,
    0x0a5b0,
    0x14573,
    0x052b0,
    0x0a9a8,
    0x0e950,
    0x06aa0,
    0x0aea6,
    0x0ab50,
    0x04b60,
    0x0aae4,
    0x0a570,
    0x05260,
    0x0f263,
    0x0d950,
    0x05b57,
    0x056a0,
    0x096d0,
    0x04dd5,
    0x04ad0,
    0x0a4d0,
    0x0d4d4,
    0x0d250,
    0x0d558,
    0x0b540,
    0x0b6a0,
    0x195a6,
    0x095b0,
    0x049b0,
    0x0a974,
    0x0a4b0,
    0x0b27a,
    0x06a50,
    0x06d40,
    0x0af46,
    0x0ab60,
    0x09570,
    0x04af5,
    0x04970,
    0x064b0,
    0x074a3,
    0x0ea50,
    0x06b58,
    0x055c0,
    0x0ab60,
    0x096d5,
    0x092e0,
    0x0c960,
    0x0d954,
    0x0d4a0,
    0x0da50,
    0x07552,
    0x056a0,
    0x0abb7,
    0x025d0,
    0x092d0,
    0x0cab5,
    0x0a950,
    0x0b4a0,
    0x0baa4,
    0x0ad50,
    0x055d9,
    0x04ba0,
    0x0a5b0,
    0x15176,
    0x052b0,
    0x0a930,
    0x07954,
    0x06aa0,
    0x0ad50,
    0x05b52,
    0x04b60,
    0x0a6e6,
    0x0a4e0,
    0x0d260,
    0x0ea65,
    0x0d530,
    0x05aa0,
    0x076a3,
    0x096d0,
    0x04afb,
    0x04ad0,
    0x0a4d0,
    0x1d0b6,
    0x0d250,
    0x0d520,
    0x0dd45,
    0x0b5a0,
    0x056d0,
    0x055b2,
    0x049b0,
    0x0a577,
    0x0a4b0,
    0x0aa50,
    0x1b255,
    0x06d20,
    0x0ada0,
    0x14b63,
    0x09370,
    0x049f8,
    0x04970,
    0x064b0,
    0x168a6,
    0x0ea50,
    0x06b20,
    0x1a6c4,
    0x0aae0,
    0x0a2e0,
    0x0d2e3,
    0x0c960,
    0x0d557,
    0x0d4a0,
    0x0da50,
    0x05d55,
    0x056a0,
    0x0a6d0,
    0x055d4,
    0x052d0,
    0x0a9b8,
    0x0a950,
    0x0b4a0,
    0x0b6a6,
    0x0ad50,
    0x055a0,
    0x0aba4,
    0x0a5b0,
    0x052b0,
    0x0b273,
    0x06930,
    0x07337,
    0x06aa0,
    0x0ad50,
    0x14b55,
    0x04b60,
    0x0a570,
    0x054e4,
    0x0d160,
    0x0e968,
    0x0d520,
    0x0daa0,
    0x16aa6,
    0x056d0,
    0x04ae0,
    0x0a9d4,
    0x0a2d0,
    0x0d150,
    0x0f252,
    0x0d520,
];
/**
 * 公历每个月份的天数普通表
 * @Array Of Property
 * @return Number
 */
const SolarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
/**
 * 天干地支之天干速查表
 * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
 * @return Cn string
 */
const Gan = [
    "\u7532",
    "\u4e59",
    "\u4e19",
    "\u4e01",
    "\u620a",
    "\u5df1",
    "\u5e9a",
    "\u8f9b",
    "\u58ec",
    "\u7678",
];
/**
 * 天干地支之地支速查表
 * @Array Of Property
 * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
 * @return Cn string
 */
const Zhi = [
    "\u5b50",
    "\u4e11",
    "\u5bc5",
    "\u536f",
    "\u8fb0",
    "\u5df3",
    "\u5348",
    "\u672a",
    "\u7533",
    "\u9149",
    "\u620c",
    "\u4ea5",
];
/**
 * 每日的时辰对照表
 * @Array Of Property
 * @return Cn string
 */
const GanZhiHour = [
    "甲子-乙丑-丙寅-丁卯-戊辰-己巳-庚午-辛未-壬申-癸酉-甲戌-乙亥",
    "丙子-丁丑-戊寅-己卯-庚辰-辛巳-壬午-癸未-甲申-乙酉-丙戌-丁亥",
    "戊子-己丑-庚寅-辛卯-壬辰-癸巳-甲午-乙未-丙申-丁酉-戊戌-己亥",
    "庚子-辛丑-壬寅-癸卯-甲辰-乙巳-丙午-丁未-戊申-己酉-庚戌-辛亥",
    "壬子-癸丑-甲寅-乙卯-丙辰-丁巳-戊午-己未-庚申-辛酉-壬戌-癸亥",
    "甲子-乙丑-丙寅-丁卯-戊辰-己巳-庚午-辛未-壬申-癸酉-甲戌-乙亥",
    "丙子-丁丑-戊寅-己卯-庚辰-辛巳-壬午-癸未-甲申-乙酉-丙戌-丁亥",
    "戊子-己丑-庚寅-辛卯-壬辰-癸巳-甲午-乙未-丙申-丁酉-戊戌-己亥",
    "庚子-辛丑-壬寅-癸卯-甲辰-乙巳-丙午-丁未-戊申-己酉-庚戌-辛亥",
    "壬子-癸丑-甲寅-乙卯-丙辰-丁巳-戊午-己未-庚申-辛酉-壬戌-癸亥",
];
/**
 * 天干地支之地支速查表<=>生肖
 * @Array Of Property
 * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
 * @return Cn string
 */
const Animals = [
    "\u9f20",
    "\u725b",
    "\u864e",
    "\u5154",
    "\u9f99",
    "\u86c7",
    "\u9a6c",
    "\u7f8a",
    "\u7334",
    "\u9e21",
    "\u72d7",
    "\u732a",
];
/**
 * 24节气速查表
 * @Array Of Property
 * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
 * @return Cn string
 */
const SolarTerm = [
    "\u5c0f\u5bd2",
    "\u5927\u5bd2",
    "\u7acb\u6625",
    "\u96e8\u6c34",
    "\u60ca\u86f0",
    "\u6625\u5206",
    "\u6e05\u660e",
    "\u8c37\u96e8",
    "\u7acb\u590f",
    "\u5c0f\u6ee1",
    "\u8292\u79cd",
    "\u590f\u81f3",
    "\u5c0f\u6691",
    "\u5927\u6691",
    "\u7acb\u79cb",
    "\u5904\u6691",
    "\u767d\u9732",
    "\u79cb\u5206",
    "\u5bd2\u9732",
    "\u971c\u964d",
    "\u7acb\u51ac",
    "\u5c0f\u96ea",
    "\u5927\u96ea",
    "\u51ac\u81f3",
];
/**
 * 1900-2100各年的24节气日期速查表
 * @Array Of Property
 * @return 0x string For splice
 */
const TermInfo = [
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd0b06bdb0722c965ce1cfcc920f",
    "b027097bd097c36b0b6fc9274c91aa",
    "9778397bd19801ec9210c965cc920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd09801d98082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd197c36c9210c9274c91aa",
    "97b6b97bd19801ec95f8c965cc920e",
    "97bd09801d98082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec95f8c965cc920e",
    "97bcf97c3598082c95f8e1cfcc920f",
    "97bd097bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c3598082c95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf97c359801ec95f8c965cc920f",
    "97bd097bd07f595b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "9778397bd19801ec9210c9274c920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd07f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c920e",
    "97b6b97bd19801ec95f8c965cc920f",
    "97bd07f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bd07f1487f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c965cc920e",
    "97bcf7f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b97bd19801ec9210c9274c920e",
    "97bcf7f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c91aa",
    "97b6b97bd197c36c9210c9274c920e",
    "97bcf7f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36c9210c9274c920e",
    "97b6b7f0e47f531b0723b0b6fb0722",
    "7f0e37f5307f595b0b0bc920fb0722",
    "7f0e397bd097c36b0b6fc9210c8dc2",
    "9778397bd097c36b0b70c9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9274c91aa",
    "97b6b7f0e47f531b0723b0787b0721",
    "7f0e27f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c91aa",
    "97b6b7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "9778397bd097c36b0b6fc9210c8dc2",
    "977837f0e37f149b0723b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f5307f595b0b0bc920fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "977837f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc9210c8dc2",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd097c35b0b6fc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0787b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0b0bb0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14998082b0723b06bd",
    "7f07e7f0e37f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e397bd07f595b0b0bc920fb0722",
    "977837f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f1487f595b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e37f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e37f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0723b06bd",
    "7f07e7f0e47f149b0723b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14998082b0723b06bd",
    "7f07e7f0e37f14998083b0787b0721",
    "7f0e27f0e47f531b0723b0b6fb0722",
    "7f0e37f0e366aa89801eb072297c35",
    "7ec967f0e37f14898082b0723b02d5",
    "7f07e7f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e36665b66aa89801e9808297c35",
    "665f67f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b0721",
    "7f07e7f0e47f531b0723b0b6fb0722",
    "7f0e36665b66a449801e9808297c35",
    "665f67f0e37f14898082b0723b02d5",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e36665b66a449801e9808297c35",
    "665f67f0e37f14898082b072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e26665b66a449801e9808297c35",
    "665f67f0e37f1489801eb072297c35",
    "7ec967f0e37f14998082b0787b06bd",
    "7f07e7f0e47f531b0723b0b6fb0721",
    "7f0e27f1487f531b0b0bb0b6fb0722",
];
/**
 * 数字转中文速查表
 * @Array Of Property
 * @trans ['日','一','二','三','四','五','六','七','八','九','十']
 * @return Cn string
 */
const nStr1 = [
    "\u65e5",
    "\u4e00",
    "\u4e8c",
    "\u4e09",
    "\u56db",
    "\u4e94",
    "\u516d",
    "\u4e03",
    "\u516b",
    "\u4e5d",
    "\u5341",
];
/**
 * 日期转农历称呼速查表
 * @Array Of Property
 * @trans ['初','十','廿','卅']
 * @return Cn string
 */
const nStr2 = ["\u521d", "\u5341", "\u5eff", "\u5345"];
/**
 * 月份转农历称呼速查表
 * @Array Of Property
 * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
 * @return Cn string
 */
const nStr3 = [
    "\u6b63",
    "\u4e8c",
    "\u4e09",
    "\u56db",
    "\u4e94",
    "\u516d",
    "\u4e03",
    "\u516b",
    "\u4e5d",
    "\u5341",
    "\u51ac",
    "\u814a",
];

/**
 * 返回农历y年一整年的总天数
 * @param lunar Year
 * @return Number
 * @eg:var count = calendar.lYearDays(1987) ;//count=387
 */
const lYearDays = function (y) {
    let i, sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
        sum += LunarInfo[y - 1900] & i ? 1 : 0;
    }
    return sum + leapDays(y);
};
/**
 * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
 * @param lunar Year
 * @return Number (0-12)
 * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
 */
const leapMonth = function (y) {
    //闰字编码 \u95f0
    return LunarInfo[y - 1900] & 0xf;
};
/**
 * 返回农历y年闰月的天数 若该年没有闰月则返回0
 * @param lunar Year
 * @return Number (0、29、30)
 * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
 */
const leapDays = function (y) {
    if (leapMonth(y)) {
        return LunarInfo[y - 1900] & 0x10000 ? 30 : 29;
    }
    return 0;
};
/**
 * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
 * @param lunar Year
 * @return Number (-1、29、30)
 * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
 */
const monthDays = function (y, m) {
    if (m > 12 || m < 1) {
        return -1;
    } //月份参数从1至12，参数错误返回-1
    return LunarInfo[y - 1900] & (0x10000 >> m) ? 30 : 29;
};
/**
 * 农历年份转换为干支纪年
 * @param  lYear 农历年的年份数
 * @return Cn string
 */
const toGanZhiYear = function (lYear) {
    let ganKey = (lYear - 3) % 10;
    let zhiKey = (lYear - 3) % 12;
    if (ganKey == 0)
        ganKey = 10; //如果余数为0则为最后一个天干
    if (zhiKey == 0)
        zhiKey = 12; //如果余数为0则为最后一个地支
    return Gan[ganKey - 1] + Zhi[zhiKey - 1];
};
/**
 * 传入offset偏移量返回干支
 * @param offset 相对甲子的偏移量
 * @return Cn string
 */
const toGanZhi = function (offset) {
    return Gan[offset % 10] + Zhi[offset % 12];
};
/**
 * 传入offset偏移量返回干支
 * @param offset 相对甲子的偏移量
 * @return Cn string
 */
const toHourGanZhi = function (offset) {
    var gzDtr = GanZhiHour[offset % 10];
    return gzDtr.split("-");
};
/**
 * 传入农历数字月份返回汉语通俗表示法
 * @param lunar month
 * @return Cn string
 * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
 */
const toChinaMonth = function (m) {
    // 月  \u6708
    if (m > 12 || m < 1) {
        return -1;
    } //若参数错误 返回-1
    let s = nStr3[m - 1];
    s += "\u6708"; //加上月字
    return s;
};
/**
 * 传入农历日期数字返回汉字表示法
 * @param lunar day
 * @return Cn string
 * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
 */
const toChinaDay = function (d) {
    //日  \u65e5
    var s;
    switch (d) {
        case 10:
            s = "\u521d\u5341";
            break;
        case 20:
            s = "\u4e8c\u5341";
            break;
        case 30:
            s = "\u4e09\u5341";
            break;
        default:
            s = nStr2[Math.floor(d / 10)];
            s += nStr1[d % 10];
    }
    return s;
};

/**
* 返回公历(!)y年m月的天数
* @param solar Year
* @return Number (-1、28、29、30、31)
* @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30//月份参数从1至12，参数错误返回-1
*/
const solarDays = function (y, m) {
    if (m > 12 || m < 1) {
        console.error("月份参数为1至12");
        return -1;
    }
    let ms = m - 1;
    if (ms == 1) { //2月份的闰平规律测算后确认返回28或29
        return (((y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0)) ? 29 : 28);
    }
    else {
        return (SolarMonth[ms]);
    }
};
/**
* 返回公历(!)y年m月的第一天是星期几
* @param solar Year
* @return Number (-1、28、29、30、31)
* @eg:var solarFirstWeek = calendar.solarFirstWeek(1987,1) ;//星期四
*/
const solarFirstWeek = function (y, m) {
    if (m > 12 || m < 1) {
        console.error("月份参数为1至12");
        return -1;
    }
    let ms = m - 1;
    let solarDate = new Date(y, ms, 1, 0, 0, 0, 0);
    return solarDate.getDay();
};
/**
 * 公历月、日判断所属星座
 * @param  cMonth [description]
 * @param  cDay [description]
 * @return Cn string
 */
const toAstro = function (cMonth, cDay) {
    let s = "\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf";
    let arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5ea7"; //座
};
/**
 * 传入公历(!)y年获得该年第n个节气的公历日期
 * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起
 * @return day Number
 * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
 */
const getTerm = function (y, n) {
    if (y < 1900 || y > 2100) {
        return -1;
    }
    if (n < 1 || n > 24) {
        return -1;
    }
    let _table = TermInfo[y - 1900];
    let _info = [
        parseInt('0x' + _table.substr(0, 5)).toString(),
        parseInt('0x' + _table.substr(5, 5)).toString(),
        parseInt('0x' + _table.substr(10, 5)).toString(),
        parseInt('0x' + _table.substr(15, 5)).toString(),
        parseInt('0x' + _table.substr(20, 5)).toString(),
        parseInt('0x' + _table.substr(25, 5)).toString()
    ];
    var _calday = [
        _info[0].substr(0, 1),
        _info[0].substr(1, 2),
        _info[0].substr(3, 1),
        _info[0].substr(4, 2),
        _info[1].substr(0, 1),
        _info[1].substr(1, 2),
        _info[1].substr(3, 1),
        _info[1].substr(4, 2),
        _info[2].substr(0, 1),
        _info[2].substr(1, 2),
        _info[2].substr(3, 1),
        _info[2].substr(4, 2),
        _info[3].substr(0, 1),
        _info[3].substr(1, 2),
        _info[3].substr(3, 1),
        _info[3].substr(4, 2),
        _info[4].substr(0, 1),
        _info[4].substr(1, 2),
        _info[4].substr(3, 1),
        _info[4].substr(4, 2),
        _info[5].substr(0, 1),
        _info[5].substr(1, 2),
        _info[5].substr(3, 1),
        _info[5].substr(4, 2),
    ];
    return parseInt(_calday[n - 1]);
};
/**
 * 年份转生肖[!仅能大致转换]  精确划分生肖分界线是“立春”
 * @param y year
 * @return Cn string
 * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
 */
const getAnimal = function (y) {
    return Animals[(y - 4) % 12];
};

const Rest = {
    2020: {
        xiu: ["0101", "0124", "0125", "0126", "0127", "0128", "0129", "0130", "0404", "0405", "0406", "0501", "0502", "0503", "0504", "0505", "0625", "0626", "0627", "1001", "1002", "1003", "1004", "1005", "1006", "1007", "1008"],
        ban: ["0119", "0201", "0426", "0509", "0628", "0927", "1010"]
    },
    2021: {
        xiu: ["0101", "0102", "0103", "0211", "0212", "0213", "0214", "0215", "0216", "0217", "0403", "0404", "0405", "0501", "0502", "0503", "0504", "0505", "0612", "0613", "0614", "0919", "0920", "0921", "1001", "1002", "1003", "1004", "1005", "1006", "1007"],
        ban: ["0207", "0220", "0425", "0508", "0918", "0926", "1009"]
    }
};
const Festival = {
    "sFtv": {
        "1001": ["国庆节", "国际音乐日", "世界微笑日", "国际老人节"],
        "1002": ["国际和平与民主自由斗争日"],
        "1004": ["世界动物日", "世界住房日", "国际建筑日"],
        "1005": ["世界教师日"],
        "1008": ["世界视觉日", "全国高血压日", "世界视力日"],
        "1009": ["世界邮政日"],
        "1010": ["世界精神卫生日", "辛亥革命纪念日"],
        "1011": ["萝莉节"],
        "1012": ["世界关节炎日"],
        "1013": ["国际减轻自然灾害日", "世界保健日", "国际标准时间日", "中国少年先锋队诞辰日"],
        "1014": ["世界标准日"],
        "1015": ["国际盲人节", "全球洗手日", "世界农村妇女日"],
        "1016": ["世界粮食节"],
        "1017": ["国际消除贫困日", "国家扶贫日"],
        "1019": ["世界镇痛日"],
        "1020": ["世界骨质疏松日", "世界厨师日"],
        "1022": ["世界传统医药日"],
        "1024": ["联合国日", "世界发展信息日"],
        "1025": ["人类天花绝迹日", "抗美援朝纪念日"],
        "1028": ["世界男性健康日"],
        "1029": ["圣纪节"],
        "1031": ["世界勤俭日"],
        "1101": ["万圣节"],
        "1108": ["中国记者日", "记者节"],
        "1109": ["消防宣传日"],
        "1111": ["光棍节", "双十一购物狂欢节"],
        "1112": ["吉尼斯世界纪录日"],
        "1114": ["联合国糖尿病日", "屌丝节"],
        "1116": ["国际宽容日"],
        "1117": ["国际大学生节"],
        "1119": ["世界厕所日"],
        "1120": ["世界儿童日"],
        "1121": ["世界电视日", "世界问候日"],
        "1125": ["感恩节", "国际消除对妇女的暴力日"],
        "1129": ["国际声援巴勒斯坦人民日"],
        "1201": ["世界艾滋病日"],
        "1202": ["全国交通安全日"],
        "1203": ["国际残疾人日"],
        "1204": ["全国法制宣传日", "国家宪法日"],
        "1205": ["国际志愿人员日"],
        "1207": ["国际民航日"],
        "1209": ["世界足球日", "国际反腐败日"],
        "1210": ["世界人权日"],
        "1212": ["双十二购物狂欢节", "国际儿童电视广播日"],
        "1213": ["国家公祭日"],
        "1215": ["世界强化免疫日"],
        "1218": ["国际移徙者日"],
        "1219": ["联合国南南合作日"],
        "1220": ["澳门回归纪念"],
        "1221": ["国际篮球日"],
        "1224": ["平安夜"],
        "1225": ["圣诞节"],
        "1226": ["毛泽东诞辰日"],
        "0101": ["元旦"],
        "0131": ["国际麻风节"],
        "0126": ["国际海关日"],
        "0127": ["国际大屠杀纪念日"],
        "0202": ["世界湿地日"],
        "0207": ["国际声援南非日"],
        "0210": ["国际气象节"],
        "0214": ["情人节"],
        "0224": ["第三世界青年日"],
        "0204": ["世界抗癌症日", "世界癌症日"],
        "0221": ["国际母语日"],
        "0228": ["国际罕见病日", "世界居住条件调查日"],
        "0301": ["国际海豹日", "国际民防日"],
        "0303": ["全国爱耳日"],
        "0305": ["学雷锋纪念日", "中国青年志愿者服务日"],
        "0308": ["妇女节"],
        "0312": ["植树节", "世界肾脏日"],
        "0314": ["白色情人节", "国际警察日"],
        "0315": ["消费者权益日"],
        "0317": ["国际航海日"],
        "0320": ["世界无肉日"],
        "0321": ["世界睡眠日", "世界森林日", "世界儿歌日", "国际消除种族歧视日", "世界诗歌日"],
        "0322": ["世界水日"],
        "0323": ["世界气象日"],
        "0311": ["国际尊严尊敬日"],
        "0316": ["手拉手情系贫困小伙伴全国统一行动日", "世界社会工作日"],
        "0324": ["世界防治结核病日"],
        "0307": ["女生节"],
        "0306": ["世界青光眼日"],
        "0327": ["世界戏剧日"],
        "0309": ["保护母亲河日"],
        "0318": ["全国科技人才活动日"],
        "0329": ["全国中小学生安全教育日"],
        "0410": ["耶稣受难日", "非洲环境保护日"],
        "0401": ["愚人节"],
        "0402": ["国际儿童图书日", "世界自闭症日"],
        "0407": ["世界卫生日"],
        "0411": ["世界帕金森病日"],
        "0422": ["世界地球日"],
        "0423": ["世界读书日", "中国海军建军节"],
        "0426": ["世界知识产权日"],
        "0404": ["复活节"],
        "0417": ["世界血友病日"],
        "0418": ["国际古迹遗址日"],
        "0421": ["秘书节"],
        "0425": ["世界防治疟疾日", "全国儿童预防接种宣传日"],
        "0428": ["世界安全生产与健康日"],
        "0429": ["化学战受害者纪念日"],
        "0415": ["全民国家安全教育日"],
        "0424": ["中国航天日"],
        "0430": ["全国交通安全反思日"],
        "0501": ["劳动节"],
        "0504": ["青年节", "五四运动纪念日"],
        "0505": ["世界哮喘日", "碘缺乏病防治日"],
        "0508": ["世界红十字日"],
        "0512": ["国际护士节", "全国防灾减灾日"],
        "0510": ["母亲节", "中国品牌日"],
        "0515": ["国际家庭日", "防治碘缺乏病日"],
        "0517": ["世界电信日", "全国助残日", "世界高血压日"],
        "0518": ["国际博物馆日"],
        "0520": ["全国学生营养日", "全国母乳喂养宣传日", "世界计量日"],
        "0522": ["国际生物多样性日"],
        "0531": ["世界无烟日"],
        "0513": ["开斋节"],
        "0503": ["世界新闻自由日"],
        "0521": ["世界文化发展日"],
        "0526": ["世界向人体条件挑战日"],
        "0529": ["国际维和人员日"],
        "0509": ["救助贫困母亲日"],
        "0519": ["中国旅游日"],
        "0606": ["全国爱眼日"],
        "0601": ["国际儿童节", "世界牛奶日"],
        "0605": ["世界环境日"],
        "0612": ["中国文化遗产日", "世界无童工日"],
        "0620": ["父亲节", "世界难民日"],
        "0617": ["世界防治荒漠化和干旱日"],
        "0623": ["国际奥林匹克日"],
        "0625": ["全国土地日"],
        "0626": ["国际禁毒日", "联合国宪章日"],
        "0604": ["受侵略戕害的无辜儿童国际日"],
        "0608": ["世界海洋日"],
        "0614": ["世界献血日"],
        "0630": ["世界青年联欢节"],
        "0622": ["中国儿童慈善活动日"],
        "0701": ["香港回归纪念日", "建党节", "世界建筑日"],
        "0703": ["国际合作节"],
        "0711": ["世界人口日", "中国航海日"],
        "0720": ["古尔邦节", "人类月球日"],
        "0702": ["国际体育记者日"],
        "0706": ["国际接吻日"],
        "0708": ["世界过敏性疾病日"],
        "0718": ["纳尔逊·曼德拉国际日"],
        "0728": ["世界肝炎日"],
        "0731": ["非洲妇女节"],
        "0801": ["建军节"],
        "0803": ["男人节"],
        "0808": ["八卦节", "全民健身日"],
        "0809": ["国际土著人日"],
        "0826": ["纳米比亚日", "全国律师咨询日"],
        "0815": ["日本无条件投降日"],
        "0819": ["中国医师节"],
        "0903": ["中国人民抗日战争纪念日", "中国人民抗日战争胜利纪念日"],
        "0908": ["国际扫盲日"],
        "0910": ["教师节", "世界预防自杀日"],
        "0916": ["国际臭氧层保护日"],
        "0918": ["中国国耻日", "世界清洁地球日", "九一八事变", "全民国防教育日"],
        "0920": ["国际爱牙日", "公民道德宣传日"],
        "0921": ["国际和平日", "世界停火日", "世界阿尔茨海默病日"],
        "0927": ["国际聋人节", "世界旅游日", "国际聋人日"],
        "0928": ["孔子诞辰"],
        "0911": ["世界急救日"],
        "0915": ["国际民主日"],
        "0922": ["世界无车日"],
        "0926": ["世界避孕日"],
        "0930": ["国际翻译日", "烈士纪念日"],
        "0905": ["中华慈善日"]
    },
    "lFtv": {
        "0101": ["春节"],
        "0115": ["元宵节"],
        "0202": ["龙抬头", "中和节"],
        "0303": ["上巳节"],
        "0408": ["寒衣节"],
        "0505": ["端午节"],
        "0520": ["分龙节"],
        "0616": ["鲁班节"],
        "0707": ["七夕情人节"],
        "0714": ["鬼节(南方)"],
        "0715": ["中元节", "盂兰节"],
        "0815": ["中秋节"],
        "0909": ["重阳节"],
        "1015": ["下元节"],
        "1208": ["腊八节"],
        "1223": ["小年", "祭灶节"],
        "1230": ["除夕"]
    }
};

const RestDay = function (y, m, d, data) {
    var newRest = Object.assign({}, Rest, data);
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    if (newRest[y]) {
        return {
            Xiu: newRest[y].xiu.includes(day),
            Ban: newRest[y].ban.includes(day),
            newRest: newRest
        };
    }
    else {
        return {
            Xiu: false,
            Ban: false,
            newRest: newRest
        };
    }
};
const getGljr = function (m, d) {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    if (Festival.sFtv[day]) {
        return Festival.sFtv[day];
    }
    else {
        return "";
    }
};
const getNljr = function (m, d) {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    if (Festival.lFtv[day]) {
        return Festival.lFtv[day];
    }
    else {
        return "";
    }
};

const solar2lunar = function (y, m, d) {
    //未传参获得当天
    let objDate;
    if (!y) {
        objDate = new Date();
    }
    else {
        objDate = new Date(y, m - 1, d);
    }
    let i, leap = 0, temp = 0;
    //修正ymd参数
    (y = objDate.getFullYear()),
        (m = objDate.getMonth() + 1),
        (d = objDate.getDate());
    let offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) -
        Date.UTC(1900, 0, 31)) /
        86400000;
    for (i = 1900; i < 2101 && offset > 0; i++) {
        temp = lYearDays(i);
        offset -= temp;
    }
    if (offset < 0) {
        offset += temp;
        i--;
    }
    //是否今天
    let isTodayObj = new Date(), isToday = false;
    if (isTodayObj.getFullYear() == y &&
        isTodayObj.getMonth() + 1 == m &&
        isTodayObj.getDate() == d) {
        isToday = true;
    }
    //星期几
    var nWeek = objDate.getDay(), cWeek = nStr1[nWeek];
    //数字表示周几顺应天朝周一开始的惯例
    if (nWeek == 0) {
        nWeek = 7;
    }
    //农历年
    let year = i;
    leap = leapMonth(i); //闰哪个月
    let isLeap = false;
    //效验闰月
    for (i = 1; i < 13 && offset > 0; i++) {
        //闰月
        if (leap > 0 && i == leap + 1 && isLeap == false) {
            --i;
            isLeap = true;
            temp = leapDays(year); //计算农历闰月天数
        }
        else {
            temp = monthDays(year, i); //计算农历普通月天数
        }
        //解除闰月
        if (isLeap == true && i == leap + 1) {
            isLeap = false;
        }
        offset -= temp;
    }
    // 闰月导致数组下标重叠取反
    if (offset == 0 && leap > 0 && i == leap + 1) {
        if (isLeap) {
            isLeap = false;
        }
        else {
            isLeap = true;
            --i;
        }
    }
    if (offset < 0) {
        offset += temp;
        --i;
    }
    //农历月
    let month = i;
    //农历日
    let day = offset + 1;
    //天干地支处理
    let sm = m - 1;
    let gzY = toGanZhiYear(year);
    // 当月的两个节气
    // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
    let firstNode = getTerm(y, m * 2 - 1); //返回当月「节」为几日开始
    let secondNode = getTerm(y, m * 2); //返回当月「节」为几日开始
    // 依据12节气修正干支月
    let gzM = toGanZhi((y - 1900) * 12 + m + 11);
    if (d >= firstNode) {
        gzM = toGanZhi((y - 1900) * 12 + m + 12);
    }
    //传入的日期的节气与否
    let isTerm = false;
    let Term = null;
    if (firstNode == d) {
        isTerm = true;
        Term = SolarTerm[m * 2 - 2];
    }
    if (secondNode == d) {
        isTerm = true;
        Term = SolarTerm[m * 2 - 1];
    }
    //日柱 当月一日与 1900/1/1 相差天数
    let dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
    let gzD = toGanZhi(dayCyclical + d - 1);
    // 二十四小时对应的天干地支
    let gzH = toHourGanZhi(dayCyclical + d - 1);
    //该日期所属的星座
    let astro = toAstro(m, d);
    // 设置公里节日
    let Gljr = getGljr(m, d);
    let Nljr = getNljr(month, day);
    let XiuBox = RestDay(y, m, d, calendar.setRest);
    calendar.Rest = XiuBox.newRest;
    // 用于设置上个月
    let DayInfo = {
        Xiu: XiuBox.Xiu,
        Ban: XiuBox.Ban,
        Gljr: Gljr,
        Nljr: Nljr,
        lYear: year,
        lMonth: month,
        lDay: day,
        Animal: getAnimal(year),
        IMonthCn: (isLeap ? "\u95f0" : "") + toChinaMonth(month),
        IDayCn: toChinaDay(day),
        cYear: y,
        cMonth: m,
        cDay: d,
        gzYear: gzY,
        gzMonth: gzM,
        gzDay: gzD,
        gzHour: gzH,
        isToday: isToday,
        isLeap: isLeap,
        nWeek: nWeek,
        ncWeek: "\u661f\u671f" + cWeek,
        isTerm: isTerm,
        Term: Term,
        astro: astro,
    };
    return DayInfo;
};
const lunar2solar = function (y, m, d, isLeapMonth) {
    //参数区间1900.1.31~2100.12.1
    isLeapMonth = !!isLeapMonth;
    let leapM = leapMonth(y);
    if (isLeapMonth && leapM != m) {
        return -1;
    } //传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if ((y == 2100 && m == 12 && d > 1) || (y == 1900 && m == 1 && d < 31)) {
        return -1;
    } //超出了最大极限值
    let day = monthDays(y, m);
    let _day = day;
    //bugFix 2016-9-25
    //if month is leap, _day use leapDays method
    if (isLeapMonth) {
        _day = leapDays(y);
    }
    if (y < 1900 || y > 2100 || d > _day) {
        return -1;
    } //参数合法性效验
    //计算农历的时间差
    let offset = 0;
    for (let i = 1900; i < y; i++) {
        offset += lYearDays(i);
    }
    let leap = 0, isAdd = false;
    for (let i = 1; i < m; i++) {
        leap = leapMonth(y);
        if (!isAdd) {
            //处理闰月
            if (leap <= i && leap > 0) {
                offset += leapDays(y);
                isAdd = true;
            }
        }
        offset += monthDays(y, i);
    }
    //转换闰月农历 需补充该年闰月的前一个月的时差
    if (isLeapMonth) {
        offset += day;
    }
    //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
    let stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
    let calObj = new Date((offset + d - 31) * 86400000 + stmap);
    let cY = calObj.getUTCFullYear();
    let cM = calObj.getUTCMonth() + 1;
    let cD = calObj.getUTCDate();
    return solar2lunar(cY, cM, cD);
};
const calendar = {
    setRest: {},
    Rest: {},
    lYearDays,
    leapMonth,
    leapDays,
    monthDays,
    toGanZhiYear,
    toGanZhi,
    toChinaMonth,
    toChinaDay,
    solarDays,
    solarFirstWeek,
    toAstro,
    getTerm,
    getAnimal,
    solar2lunar,
    lunar2solar,
};

export { calendar as default };
