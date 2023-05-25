const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const stationService = require('../service/stationService');

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      stSrch: req.query.stSrch,
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
router.delete('/:stSrch', async (req, res) => {
  try {
    const params = {
      stSrch: req.params.stSrch,
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

module.exports = router;