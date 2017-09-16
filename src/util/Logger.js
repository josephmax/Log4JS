import Log4JS from './Log4JS'

const lv = (process.env.NODE_ENV === 'production' ? 'WARN' : 'ALL')

export default new Log4JS(lv)
