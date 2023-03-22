declare const calendar: {
    setRest: {};
    Rest: {};
    lYearDays: (y: number) => number;
    leapMonth: (y: number) => number;
    leapDays: (y: number) => number;
    monthDays: (y: number, m: number) => number;
    toGanZhiYear: (lYear: number) => string;
    toGanZhi: (offset: number) => string;
    toChinaMonth: (m: number) => any;
    toChinaDay: (d: number) => string;
    solarDays: (y: number, m: number) => number;
    solarFirstWeek: (y: number, m: number) => number;
    toAstro: (cMonth: number, cDay: number) => string;
    getTerm: (y: number, n: number) => number;
    getAnimal: (y: number) => string;
    solar2lunar: (y: number, m: number, d: number) => object;
    lunar2solar: (y: number, m: number, d: number, isLeapMonth: boolean) => any;
};

export { calendar as default };
