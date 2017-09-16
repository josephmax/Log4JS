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

let level

const setLevel = lvNm => {
  level = LEVEL[lvNm]
  console.log(`Log4JS Level: ${lvNm}`)
}

class Log4JS {
  constructor (lvNm = 'WARN') {
    // 初始化日志输出级别
    lvNm = typeof lvNm === 'string' ? (TYPE[lvNm.toUpperCase()] || TYPE.WARN) : TYPE.WARN
    setLevel(lvNm)
  }

  /**
   * 错误级别日志
   */
  error () {
    if (LEVEL[TYPE.ERROR] > level) return
    console.error(`[${TYPE.ERROR}]`, ...arguments)
  }
  /**
   * 警告级别日志
   */
  warn () {
    if (LEVEL[TYPE.WARN] > level) return
    console.warn(`[${TYPE.WARN}]`, ...arguments)
  }

  /**
   * 提示级别日志
   */
  info () {
    if (LEVEL[TYPE.INFO] > level) return
    console.info(`[${TYPE.INFO}]`, ...arguments)
  }

  /**
   * 调试级别日志
   */
  debug () {
    if (LEVEL[TYPE.DEBUG] > level) return
    console.log(`[${TYPE.DEBUG}]`, ...arguments)
  }
}

export default Log4JS
