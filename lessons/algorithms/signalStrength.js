// percent = 100 x(1 - (PdBm_max - PdBm) / (PdBm_max - PdBm_min))

// https://www.adriangranados.com/blog/dbm-to-percent-conversion


function dbmToPercent(PdBm) {
    var PdBm_max = 40;
    var PdBm_min = -40;
    return percent = 100 * (1 - (PdBm_max - PdBm) / (PdBm_max - PdBm_min)) + "%";
}


console.log(dbmToPercent(20));