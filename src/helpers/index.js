const getDayFromSeconds = (seconds) => {
    return new Date(seconds * 1000);
}

export const getFormattedDate = (seconds) => {
    const stringDate = getDayFromSeconds(seconds)
    const [day, month, monthDay] = stringDate.toString().split(' ');
    return `${day} ${month} ${monthDay}`;
}
export const getTempFromKelvinToCelsius = (kelvin) => {
    return Math.floor(kelvin - 273.15)
}

export const getForecastForWeek = (array) => {
    return array.filter((day,index) => index !== 7)
}

