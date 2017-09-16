/**
 * Created by Sean Wong at 2017/09/03.
 */
const type = {
  OFF: 'OFF',
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
  ALL: 'ALL'
}
const LEVEL = {
  [type.OFF]: 0,
  [type.ERROR]: 1,
  [type.WARN]: 2,
  [type.INFO]: 3,
  [type.DEBUG]: 4,
  [type.ALL]: 5
}

class Log4JS {
  constructor (lv = type.WARN) {
    lv = type[lv.toUpperCase()] === undefined ? type.WARN : type[lv.toUpperCase()]
    this.level = LEVEL[lv]
    console.log(`this.level ${lv}:${this.level}`)
  }
  error () {
    if (LEVEL['ERROR'] > this.level) return
    console.error(...arguments)
  }
  warn () {
    if (LEVEL['WARN'] > this.level) return
    console.warn(...arguments)
  }
  info () {
    if (LEVEL['INFO'] > this.level) return
    console.info(...arguments)
  }
  debug () {
    if (LEVEL['DEBUG'] > this.level) return
    console.log(...arguments)
  }
}

export default Log4JS
