'use strict';

/**
* 农历1900-2100的润大小信息表
* @Array Of Property
* @return Hex
*/
const LunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2,
    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977,
    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970,
    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950,
    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557,
    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0,
    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0,
    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6,
    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570,
    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0,
    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5,
    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930,
    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530,
    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45,
    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0,
    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0,
    0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4,
    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0,
    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160,
    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252,
    0x0d520];
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
const Gan = ["\u7532", "\u4e59", "\u4e19", "\u4e01", "\u620a", "\u5df1", "\u5e9a", "\u8f9b", "\u58ec", "\u7678"];
/**
  * 天干地支之地支速查表
  * @Array Of Property
  * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
  * @return Cn string
  */
const Zhi = ["\u5b50", "\u4e11", "\u5bc5", "\u536f", "\u8fb0", "\u5df3", "\u5348", "\u672a", "\u7533", "\u9149", "\u620c", "\u4ea5"];
/**
  * 天干地支之地支速查表<=>生肖
  * @Array Of Property
  * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
  * @return Cn string
  */
const Animals = ["\u9f20", "\u725b", "\u864e", "\u5154", "\u9f99", "\u86c7", "\u9a6c", "\u7f8a", "\u7334", "\u9e21", "\u72d7", "\u732a"];
/**
  * 24节气速查表
  * @Array Of Property
  * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
  * @return Cn string
  */
const SolarTerm = ["\u5c0f\u5bd2", "\u5927\u5bd2", "\u7acb\u6625", "\u96e8\u6c34", "\u60ca\u86f0", "\u6625\u5206", "\u6e05\u660e", "\u8c37\u96e8", "\u7acb\u590f", "\u5c0f\u6ee1", "\u8292\u79cd", "\u590f\u81f3", "\u5c0f\u6691", "\u5927\u6691", "\u7acb\u79cb", "\u5904\u6691", "\u767d\u9732", "\u79cb\u5206", "\u5bd2\u9732", "\u971c\u964d", "\u7acb\u51ac", "\u5c0f\u96ea", "\u5927\u96ea", "\u51ac\u81f3"];
/**
  * 1900-2100各年的24节气日期速查表
  * @Array Of Property
  * @return 0x string For splice
  */
const TermInfo = ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',
    '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',
    'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',
    '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',
    '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',
    '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',
    '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
    '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',
    '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
    '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',
    '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',
    '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',
    '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',
    '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
    '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',
    '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
    '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',
    '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',
    '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',
    '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',
    '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',
    '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',
    '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',
    '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',
    '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',
    '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',
    '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',
    '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',
    '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',
    '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',
    '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',
    '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',
    '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'];
/**
  * 数字转中文速查表
  * @Array Of Property
  * @trans ['日','一','二','三','四','五','六','七','八','九','十']
  * @return Cn string
  */
const nStr1 = ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341"];
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
const nStr3 = ["\u6b63", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d", "\u5341", "\u51ac", "\u814a"];

/**
* 返回农历y年一整年的总天数
* @param lunar Year
* @return Number
* @eg:var count = calendar.lYearDays(1987) ;//count=387
*/
const lYearDays = (y) => {
    let i, sum = 348;
    for (i = 0x8000; i > 0x8; i >>= 1) {
        sum += (LunarInfo[y - 1900] & i) ? 1 : 0;
    }
    return (sum + leapDays(y));
};
/**
* 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
* @param lunar Year
* @return Number (0-12)
* @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
*/
const leapMonth = (y) => {
    return (LunarInfo[y - 1900] & 0xf);
};
/**
 * 返回农历y年闰月的天数 若该年没有闰月则返回0
 * @param lunar Year
 * @return Number (0、29、30)
 * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
 */
const leapDays = (y) => {
    if (leapMonth(y)) {
        return ((LunarInfo[y - 1900] & 0x10000) ? 30 : 29);
    }
    return (0);
};
/**
 * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
 * @param lunar Year
 * @return Number (-1、29、30)
 * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
 */
const monthDays = (y, m) => {
    if (m > 12 || m < 1) {
        return -1;
    } //月份参数从1至12，参数错误返回-1
    return ((LunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
};
/**
 * 农历年份转换为干支纪年
 * @param  lYear 农历年的年份数
 * @return Cn string
 */
const toGanZhiYear = (lYear) => {
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
const toGanZhi = (offset) => {
    return Gan[offset % 10] + Zhi[offset % 12];
};
/**
 * 传入农历数字月份返回汉语通俗表示法
 * @param lunar month
 * @return Cn string
 * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
 */
const toChinaMonth = (m) => {
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
const toChinaDay = (d) => {
    var s;
    switch (d) {
        case 10:
            s = '\u521d\u5341';
            break;
        case 20:
            s = '\u4e8c\u5341';
            break;
        case 30:
            s = '\u4e09\u5341';
            break;
        default:
            s = nStr2[Math.floor(d / 10)];
            s += nStr1[d % 10];
    }
    return (s);
};

/**
* 返回公历(!)y年m月的天数
* @param solar Year
* @return Number (-1、28、29、30、31)
* @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30//月份参数从1至12，参数错误返回-1
*/
const solarDays = (y, m) => {
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
const solarFirstWeek = (y, m) => {
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
const toAstro = (cMonth, cDay) => {
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
const getTerm = (y, n) => {
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
 * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
 * @param y year
 * @return Cn string
 * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
 */
const getAnimal = (y) => {
    return Animals[(y - 4) % 12];
};

var Rest = {
	"2020": {
	xiu: [
		"0101",
		"0124",
		"0125",
		"0126",
		"0127",
		"0128",
		"0129",
		"0130",
		"0404",
		"0405",
		"0406",
		"0501",
		"0502",
		"0503",
		"0504",
		"0505",
		"0625",
		"0626",
		"0627",
		"1001",
		"1002",
		"1003",
		"1004",
		"1005",
		"1006",
		"1007",
		"1008"
	],
	ban: [
		"0119",
		"0201",
		"0426",
		"0509",
		"0628",
		"0927",
		"1010"
	]
},
	"2021": {
	xiu: [
		"0101",
		"0102",
		"0103",
		"0211",
		"0212",
		"0213",
		"0214",
		"0215",
		"0216",
		"0217",
		"0403",
		"0404",
		"0405",
		"0501",
		"0502",
		"0503",
		"0504",
		"0505",
		"0612",
		"0613",
		"0614",
		"0919",
		"0920",
		"0921",
		"1001",
		"1002",
		"1003",
		"1004",
		"1005",
		"1006",
		"1007"
	],
	ban: [
		"0207",
		"0220",
		"0425",
		"0508",
		"0918",
		"0926",
		"1009"
	]
}
};

var sFtv = {
	"1001": [
		"国庆节"
	],
	"1031": [
		"万圣节(鬼节)"
	],
	"1110": [
		"世界青年节"
	],
	"1111": [
		"光棍节"
	],
	"1213": [
		"国家公祭日"
	],
	"1220": [
		"澳门回归纪念"
	],
	"1224": [
		"平安夜"
	],
	"1225": [
		"圣诞节"
	],
	"1226": [
		"毛泽东诞辰纪念"
	],
	"0101": [
		"元旦"
	],
	"0214": [
		"情人节"
	],
	"0308": [
		"妇女节"
	],
	"0312": [
		"植树节"
	],
	"0315": [
		"消费者权益日"
	],
	"0401": [
		"愚人节"
	],
	"0501": [
		"劳动节"
	],
	"0504": [
		"青年节"
	],
	"0601": [
		"儿童节"
	],
	"0701": [
		"中共诞辰",
		" 香港回归纪念日 ",
		"世界建筑日"
	],
	"0707": [
		"抗日战争纪念日"
	],
	"0801": [
		"八一建军节"
	],
	"0903": [
		"抗日战争胜利纪念日"
	],
	"0909": [
		"毛泽东逝世纪念"
	],
	"0910": [
		"教师节"
	],
	"0918": [
		"中国国耻日"
	],
	"0928": [
		"孔子诞辰"
	]
};
var lFtv = {
	"1208": [
		"腊八节"
	],
	"1223": [
		"小年"
	],
	"1230": [
		"除夕"
	],
	"0101": [
		"春节"
	],
	"0115": [
		"元宵节"
	],
	"0202": [
		"龙头节"
	],
	"0404": [
		"寒食节"
	],
	"0505": [
		"端午节"
	],
	"0520": [
		"分龙节"
	],
	"0616": [
		"鲁班节"
	],
	"0707": [
		"七夕情人节"
	],
	"0714": [
		"鬼节(南方)"
	],
	"0715": [
		"中元节",
		"盂兰节"
	],
	"0815": [
		"中秋节"
	],
	"0909": [
		"重阳节"
	]
};
var Festival = {
	sFtv: sFtv,
	lFtv: lFtv
};

const RestDay = (y, m, d) => {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    const year = y.toString();
    const hasRest = Rest[year];
    if (!!hasRest) {
        return {
            Xiu: hasRest.xiu.includes(day),
            Ban: hasRest.ban.includes(day),
        };
    }
    else {
        console.error("您还未设置法定节假日");
        return {
            Xiu: false,
            Ban: false,
        };
    }
};
const getGljr = (m, d) => {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    const hasFestival = Festival.sFtv[day];
    if (!!hasFestival) {
        return hasFestival;
    }
    else {
        return "";
    }
};
const getNljr = (m, d) => {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    const hasFestival = Festival.lFtv[day];
    if (hasFestival) {
        return hasFestival;
    }
    else {
        return "";
    }
};

const solar2lunar = (y, m, d) => {
    //未传参  获得当天
    let objDate;
    if (!y) {
        objDate = new Date();
    }
    else {
        objDate = new Date(y, m - 1, d);
    }
    let i, leap = 0, temp = 0;
    //修正ymd参数
    y = objDate.getFullYear(),
        m = objDate.getMonth() + 1,
        d = objDate.getDate();
    let offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
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
    if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
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
        if (leap > 0 && i == (leap + 1) && isLeap == false) {
            --i;
            isLeap = true;
            temp = leapDays(year); //计算农历闰月天数
        }
        else {
            temp = monthDays(year, i); //计算农历普通月天数
        }
        //解除闰月
        if (isLeap == true && i == (leap + 1)) {
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
    let firstNode = getTerm(y, (m * 2 - 1)); //返回当月「节」为几日开始
    let secondNode = getTerm(y, (m * 2)); //返回当月「节」为几日开始
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
    //该日期所属的星座
    let astro = toAstro(m, d);
    // 设置公里节日
    let Gljr = getGljr(m, d);
    let Nljr = getNljr(month, day);
    let XiuBox = RestDay(y, m, d);
    // 用于设置上个月
    let DayInfo = { "Xiu": XiuBox.Xiu, "Ban": XiuBox.Ban, "Gljr": Gljr, "Nljr": Nljr, 'lYear': year, 'lMonth': month, 'lDay': day, 'Animal': getAnimal(year), 'IMonthCn': (isLeap ? "\u95f0" : '') + toChinaMonth(month), 'IDayCn': toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d, 'gzYear': gzY, 'gzMonth': gzM, 'gzDay': gzD, 'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': "\u661f\u671f" + cWeek, 'isTerm': isTerm, 'Term': Term, 'astro': astro };
    return DayInfo;
};
const lunar2solar = (y, m, d, isLeapMonth) => {
    isLeapMonth = !!isLeapMonth;
    let leapM = leapMonth(y);
    if (isLeapMonth && (leapM != m)) {
        return -1;
    } //传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
    if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
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
        if (!isAdd) { //处理闰月
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
    lunar2solar
};

module.exports = calendar;
