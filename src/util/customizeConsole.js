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

function customizeConsole (lvNm = TYPE.WARN) {
  // format level name
  lvNm = TYPE[String(lvNm).toUpperCase()] || TYPE.WARN
  // set level
  let level = LEVEL[lvNm]
  console.log(`Log4JS Level: ${lvNm}`)

  let $error = console.error
  let $warn = console.warn
  let $info = console.info
  let $log = console.log

  /**
   * 错误级别日志
   */
  console.error = function () {
    if (LEVEL[TYPE.ERROR] > level) return
    $error(`[${TYPE.ERROR}]`, ...arguments)
  }
  /**
   * 警告级别日志
   */
  console.warn = function () {
    if (LEVEL[TYPE.WARN] > level) return
    $warn(`[${TYPE.WARN}]`, ...arguments)
  }

  /**
   * 提示级别日志
   */
  console.info = function () {
    if (LEVEL[TYPE.INFO] > level) return
    $info(`[${TYPE.INFO}]`, ...arguments)
  }

  /**
   * 调试级别日志
   */
  console.log = function () {
    if (LEVEL[TYPE.DEBUG] > level) return
    $log(`[${TYPE.DEBUG}]`, ...arguments)
  }
}

export default customizeConsole
