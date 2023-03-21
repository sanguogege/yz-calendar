import {
    Rest,
    Festival
} from "../data/Days"

const RestDay = function (y: number, m: number, d: number) {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    if (Rest[y]) {
        return {
            Xiu: Rest[y].xiu.includes(day),
            Ban: Rest[y].ban.includes(day),
        }
    } else {
        console.error("您还未设置法定节假日");
        return {
            Xiu: false,
            Ban: false,
        }
    }
}

const getGljr = function (m: number, d: number) {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    if (Festival.sFtv[day]) {
        return Festival.sFtv[day]
    } else {
        return ""
    }
}

const getNljr = function (m: number, d: number) {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    if (Festival.lFtv[day]) {
        return Festival.lFtv[day]
    } else {
        return ""
    }

}

export {
    RestDay,
    getGljr,
    getNljr
}