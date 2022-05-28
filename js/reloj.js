function reloj() {
    timeNow = new Date()
    hour = timeNow.getHours()
    minute = timeNow.getMinutes()
    second = timeNow.getSeconds()

    SSecond = new String (second)
    if(SSecond.length == 1) {
        second = '0' + second
    }
    SMinute = new String (minute)
    if(SMinute.length == 1) {
        minute = '0' + minute
    }
    SHour = new String (hour) 
    if(SHour.length ==1) {
        hour = '0' + hour
    }

    var printHour = `${hour} : ${minute} : ${second}`
    document.getElementById("reloj").textContent = printHour

    setTimeout('reloj()', 1000)
}