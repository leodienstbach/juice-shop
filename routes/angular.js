/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

const path = require('path')
const utils = require('../lib/utils')

module.exports = function serveAngularClient () {
  return ({ url }, res, next) => {
    if(utils.startsWith(url, '/dastauth')){
       res.sendFile(path.resolve(__dirname, '../GitLab-DAST-Site-Validation-3f092150-61a0-4ae3-97fc-12e242a6baaf.txt'))
    }else if (!utils.startsWith(url, '/api') && !utils.startsWith(url, '/rest')) {
      res.sendFile(path.resolve(__dirname, '../frontend/dist/frontend/index.html'))
    }else {
      next(new Error('Unexpected path: ' + url))
    }
  }
}
