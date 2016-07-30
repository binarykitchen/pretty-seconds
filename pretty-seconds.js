function quantify(data, unit, value) {
    if (value) {
        if (value > 1 || value < -1)
            unit += 's'

        data.push(value + ' ' + unit)
    }

    return data
}

module.exports = function prettySeconds(seconds) {

    var prettyString = '',
        data = []

    if (typeof seconds === 'number') {

        function fix10(number) {
            return number.toFixed(10)
        }

        data = quantify(data, 'day',    parseInt(fix10(seconds / 86400)))
        data = quantify(data, 'hour',   parseInt(fix10((seconds % 86400) / 3600)))
        data = quantify(data, 'minute', parseInt(fix10((seconds % 3600) / 60)))
        data = quantify(data, 'second', Math.floor(seconds % 60))

        var length = data.length,
            i;

        for (i = 0; i < length; i++) {

            if (prettyString.length > 0)
                if (i == length - 1)
                    prettyString += ' and '
                else
                    prettyString += ', '

            prettyString += data[i]
        }
    }

    return prettyString
}
