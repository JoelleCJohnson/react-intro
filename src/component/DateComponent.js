function DateComponent() {
    const myDate = new Date()
    const weekday = myDate.getDay()
    const today = myDate.getDate()
    const year = myDate.getFullYear()
    const month = myDate.getMonth()

    return (
        <div>
            Today is day: {today}
            <br />
            Month: {month + 1}
            <br />
            Week Day: {weekday}
            <br />
            Year: {year}
            <br />
            {`${month + 1}/${today}/${year}`}
        </div>
    )
}

export default DateComponent