const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const stationService = require('../service/stationService');
const stationUtil = require('../lib/stationUtil');
const { isLoggedIn } = require('../lib/middleware');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      statnId: req.body.statnId,
      statnNm: req.body.statnNm,
      subwayNm: req.body.subwayNm,
      subwayId: req.body.subwayId,
      statnFid: req.body.statnFid,
      statnTid: req.body.statnTid,
      trnsitCo: req.body.trnsitCo,
    };
    logger.info(`(station.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.statnId || !params.statnNm || !params.subwayId || !params.trnsitCo) {
      const err = new Error('Not allowed null (statnId,stNm,arsId,statnId)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await stationService.reg(params);
    logger.info(`(station.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 리스트 조회
router.get('/', isLoggedIn, async (req, res) => {
  try {
    const params = {
      statnId: req.body.statnId,
    };
    logger.info(`(station.list.params) ${JSON.stringify(params)}`);

    const result = await stationService.list(params);
    logger.info(`(station.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/', isLoggedIn, async (req, res) => {
  try {
    const params = {
      statnNm: req.body.statnNm,
    };
    logger.info(`(station.delete.params) ${JSON.stringify(params)}`);

    const result = await stationService.delete(params);
    logger.info(`(station.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

router.post('/search', isLoggedIn, async (req, res) => {
  try {
    const params = {
      // START_INDEX: req.body.START_INDEX,
      // END_INDEX: req.body.END_INDEX,
      statnNm: req.body.statnNm,
    };
    logger.info(`(station.reg.params) ${JSON.stringify(params)}`);

    // // 입력값 null 체크
    // if (!params.name) {
    //   const err = new Error('Not allowed null (name)');
    //   logger.error(err.toString());

    //   res.status(500).json({ err: err.toString() });
    // }

    // 비즈니스 로직 호출
    const result = await stationUtil.getData(params);
    logger.info(`(station.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
