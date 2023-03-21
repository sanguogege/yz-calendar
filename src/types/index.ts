

export interface SolarOption {
    year: string,
    month: string,
    day: string
}

export interface LunarOption extends SolarOption {
    isLeapMonth: boolean
}