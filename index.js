function quantify (data, unit, value, allowZero) {
  if (value || (allowZero && !value)) {
    if (value > 1 || value < -1 || value === 0) {
      unit += 's'
    }

    data.push(value + ' ' + unit)
  }

  return data
}

function fix10 (number) {
  return number.toFixed(10)
}

module.exports = function prettySeconds (seconds) {
  let prettyString = ''
  let data = []

  if (typeof seconds === 'number') {
    data = quantify(data, 'day', parseInt(fix10(seconds / 86400)))
    data = quantify(data, 'hour', parseInt(fix10((seconds % 86400) / 3600)))
    data = quantify(data, 'minute', parseInt(fix10((seconds % 3600) / 60)))
    data = quantify(data, 'second', Math.floor(seconds % 60), data.length < 1)

    const length = data.length
    let i

    for (i = 0; i < length; i++) {
      if (prettyString.length > 0) {
        if (i === length - 1) {
          prettyString += ' and '
        } else {
          prettyString += ', '
        }
      }

      prettyString += data[i]
    }
  }

  return prettyString
}
