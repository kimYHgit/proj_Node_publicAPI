const superagent = require('superagent');
const dotenv = require('dotenv');
const logger = require('./logger');

dotenv.config();

const stationDataConfig = {
  url: process.env.API_SUBWAY_URL,
  key: process.env.API_SUBWAY_KEY,
};

const stationUtil = {
  async getData(params) {
    let response = null;
    let result;
    let filteredData;

    try {
      const stationUrl = encodeURI(`${stationDataConfig.url}/${stationDataConfig.key}/json/realtimeStationArrival/0/15/${params.statnNm}`);
      response = await superagent.get(stationUrl);
      const stationData = JSON.parse(response.text);
      result = stationData.realtimeArrivalList;

      filteredData = result.map((item) => {
        const {
          statnNm, recptnDt, subwayId, btrainNo, trainLineNm, arvlMsg2, arvlMsg3, arvlCd,
        } = item;
        return {
          statnNm, recptnDt, subwayId, btrainNo, trainLineNm, arvlMsg2, arvlMsg3, arvlCd,
        };
      });

      logger.debug(`(stationUtil.getData)-${stationData}`);
    } catch (err) {
      logger.error(`(stationUtil.getData)-${err.toString()}`);
    }
    return { filteredData };
  },

};

module.exports = stationUtil;
