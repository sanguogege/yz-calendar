
import Rest from "../data/Rest.json"
import Festival from "../data/Festival.json"

const RestDay = (y: number, m: number, d: number) => {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    const year = y.toString();
    const hasRest = Rest[year as keyof typeof Rest]
    if (!!hasRest) {
        return {
            Xiu: hasRest.xiu.includes(day),
            Ban: hasRest.ban.includes(day),
        }
    } else {
        console.error("您还未设置法定节假日");
        return {
            Xiu: false,
            Ban: false,
        }
    }
}

const getGljr = (m: number, d: number) => {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    const hasFestival = Festival.sFtv[day as keyof typeof Festival.sFtv]
    if (!!hasFestival) {
        return hasFestival
    } else {
        return ""
    }
}

const getNljr = (m: number, d: number) => {
    const day = (m < 10 ? "0" + m : m.toString()) + (d < 10 ? "0" + d : d.toString());
    const hasFestival = Festival.lFtv[day as keyof typeof Festival.lFtv]
    if (hasFestival) {
        return hasFestival
    } else {
        return ""
    }
}

export {
    RestDay,
    getGljr,
    getNljr
}