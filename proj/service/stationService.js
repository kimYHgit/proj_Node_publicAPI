const logger = require('../lib/logger');
const stationDao = require('../dao/stationDao');

const service = {
  // station 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await stationDao.insert(params);
      logger.debug(`(stationService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(stationService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  // selectList
  async list(params) {
    let result = null;

    try {
      result = await stationDao.selectList(params);
      logger.debug(`(stationService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(stationService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // selectInfo
  async info(params) {
    let result = null;

    try {
      // 1. 상세조회
      result = await stationDao.selectInfo(params);
      logger.debug(`(stationService.info) ${JSON.stringify(result)}`);

      //  업데이트
      if (result) {
        stationDao.update({ id: params.id, viewCount: result.viewCount + 1 });

        result.viewCount += 1;
      }
      // 2. 추가 로직
    } catch (err) {
      logger.error(`(stationService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // update
  async edit(params) {
    let result = null;

    try {
      result = await stationDao.update(params);
      logger.debug(`(stationService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(stationService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // delelte
  async delete(params) {
    let result = null;

    try {
      result = await stationDao.delete(params);
      logger.debug(`(stationService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(stationService.delete) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
