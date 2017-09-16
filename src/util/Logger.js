import Log4JS from './Log4JS'
import config from '../../config'

const lv = (process.env.NODE_ENV === 'production' ? config.build.logLv : config.dev.logLv)

export default new Log4JS(lv)
