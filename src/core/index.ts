import {
    lYearDays,
    leapMonth,
    leapDays,
    monthDays,
    toGanZhiYear,
    toGanZhi,
    toChinaMonth,
    toChinaDay
} from "../utils/LunarFunction"

import {
    solarDays,
    solarFirstWeek,
    toAstro,
    getTerm,
    getAnimal
} from "../utils/SolarFunction"

import {
    solar2lunar,
    lunar2solar
} from "../utils/Switch"


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
}


export default calendar