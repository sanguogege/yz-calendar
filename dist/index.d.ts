declare const calendar: {
    setRest: {};
    Rest: {};
    lYearDays: (y: number) => number;
    leapMonth: (y: number) => number;
    leapDays: (y: number) => number;
    lMonthDays: (y: number, m: number) => number;
    toChinaMonth: (m: number) => any;
    toChinaDay: (d: number) => string;
    solarDays: (y: number, m: number) => number;
    solarFirstWeek: (y: number, m: number) => number;
    toAstro: (cMonth: number, cDay: number) => string;
    getAnimal: (y: number) => string;
    solar2lunar: (y: number, m: number, d: number) => object;
    lunar2solar: (y: number, m: number, d: number, isLeapMonth: boolean) => any;
};

export { calendar as default };
