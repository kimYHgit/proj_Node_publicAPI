// 코드를 입력하세요.

const superagent = require('superagent')
const logger = require('../lib/logger');
const dotenv = require('dotenv')

dotenv.config();

const stationDataConfig = {
  url: process.env.API_URL,
  key: process.env.API_KEY
}

const stationUtil = {
  async getData(params) {
    let response = null
    let result = {
    }
    try {
 
      response = await superagent.get(stationDataConfig.url).query({
        serviceKey: stationDataConfig.key,
        stNm: params.stNm,
        arsId: params.arsId,
        stSrch: params.stSrch,
      })
      const stationData = JSON.parse(response.text).response?.body?.items?.item
      console.log(stationData);
      logger.debug(`(stationUtil.getData)-${result}`)
    } catch (err) {
      logger.error(`(stationUtil.getData)-${err.toString()}`)
    }
    return { result }
  },
  
}

module.exports = stationUtil