import { SolarOption, LunarOption } from "../types/index";

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


export default {
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