/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

const path = require('path')
const utils = require('../lib/utils')

module.exports = function serveAngularClient () {
  return ({ url }, res, next) => {
    if(utils.startsWith(url, '/dastauth')){
       res.sendFile(path.resolve(__dirname, '../GitLab-DAST-Site-Validation-8852d5eb-83e8-413c-8d47-45c36fc29ad3.txt')
    }elseif (!utils.startsWith(url, '/api') && !utils.startsWith(url, '/rest')) {
      res.sendFile(path.resolve(__dirname, '../frontend/dist/frontend/index.html'))
    }else {
      next(new Error('Unexpected path: ' + url))
    }
  }
}
