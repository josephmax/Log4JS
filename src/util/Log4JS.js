/**
 * Created by Sean Wong at 2017/09/03.
 */

const TYPE = {
  OFF: 'OFF',
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
  ALL: 'ALL'
}
const LEVEL = {
  [TYPE.OFF]: 0,
  [TYPE.ERROR]: 1,
  [TYPE.WARN]: 2,
  [TYPE.INFO]: 3,
  [TYPE.DEBUG]: 4,
  [TYPE.ALL]: 5
}

function Log4JS (lvNm = TYPE.WARN) {
  // format level name
  lvNm = TYPE[String(lvNm).toUpperCase()] || TYPE.WARN
  // set level
  let level = LEVEL[lvNm]
  console.log(`Log4JS Level: ${lvNm}`)

  Object.keys(TYPE).map(type => {
    if (!TYPE.hasOwnProperty(type)) return
    if (type === 'OFF' || type === 'ALL') return
    Log4JS.prototype[type.toLowerCase()] = function () {
      if (LEVEL[type] > level) return
      console[type === 'DEBUG' ? 'log' : type.toLowerCase()](`[${type}]`, ...arguments)
    }
  })
  /**
   * 错误级别日志
   */
  /* Log4JS.prototype.error = function () {
    if (LEVEL[TYPE.ERROR] > level) return
    console.error(`[${TYPE.ERROR}]`, ...arguments)
  } */
  /**
   * 警告级别日志
   */
  /* Log4JS.prototype.warn = function () {
    if (LEVEL[TYPE.WARN] > level) return
    console.warn(`[${TYPE.WARN}]`, ...arguments)
  } */

  /**
   * 提示级别日志
   */
  /* Log4JS.prototype.info = function () {
    if (LEVEL[TYPE.INFO] > level) return
    console.info(`[${TYPE.INFO}]`, ...arguments)
  } */

  /**
   * 调试级别日志
   */
  /* Log4JS.prototype.debug = function () {
    if (LEVEL[TYPE.DEBUG] > level) return
    console.log(`[${TYPE.DEBUG}]`, ...arguments)
  } */
}

export default Log4JS
