function humanReadable (seconds) {
    let hour = Math.floor(seconds/3600)
    // console.log("hour = " + hour)
    seconds = seconds - (hour * 3600)
    let minute = Math.floor(seconds/60)
    let second = seconds%60
    // console.log("minute = " + minute)
    // console.log("second = " + second)
    if (hour<10) hour = "0" + hour
    if (minute<10) minute = "0" + minute
    if (second<10) second = "0" + second
    return hour + ':' + minute + ':' + second;
  }

  humanReadable(5000)