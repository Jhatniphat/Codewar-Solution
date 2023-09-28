function formatDuration (seconds) {
    let year = Math.floor(seconds/(3600*24*365))
    seconds = seconds%(3600*24*365)
    let day = Math.floor(seconds/(3600*24))
    seconds = seconds%(3600*24)
    let hour = Math.floor(seconds/3600)
    seconds = seconds%3600
    let minute = Math.floor(seconds/60)
    seconds = seconds%60

    // console.log(`year = ${year}`)
    // console.log(`day = ${day}`)
    // console.log(`hour = ${hour}`)
    // console.log(`minute = ${minute}`)
    // console.log(`second = ${seconds}`)
    let format = []
    if(year !== 0){
        if (year >= 2) format.push(`${year} years`)
        else format.push(`${year} year`)
        format.push(', ')
    }
    if(day !== 0){
        if (day >= 2) format.push(`${day} days`)
        else format.push(`${day} day`)
        format.push(', ')
    }
    if(hour !== 0){
        if (hour >= 2) format.push(`${hour} hours`)
        else format.push(`${hour} hour`)
        format.push(', ')
    }
    if(minute !== 0){
        if (minute >= 2) format.push(`${minute} minutes`)
        else format.push(`${minute} minute`)
        format.push(', ')
    }
    if(seconds !== 0){
        if (seconds >= 2) format.push(`${seconds} seconds`)
        else format.push(`${seconds} second`)
    }

    if (format[format.length - 1 ] === ', ') format.pop()
    if (format.length >= 2) format[format.length - 2] = ' and '
    format = format.join('')
    if(format === '') return 'now'
    return format
  }

formatDuration(0)

  