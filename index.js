#!/usr/bin/env node
'use strict'

const ipfs = require('ipfs-api')()
const [ url ] = process.argv.slice(2)

if (!url) {
  console.error('expected a url as argument')
  process.exit(1)
}

ipfs.util.addFromURL(url)
.then(res => res[0] && res[0].hash)
.then(console.log)
.catch(console.error)
