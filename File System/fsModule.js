// File system using Node

const fs = require('fs')
const path = require('path')

var currentDirectory = path.join(__dirname)
var currentWorkingDirectory = path.join(__dirname,'./Data/')

console.log(`my current Directory is: ${currentDirectory}-${currentWorkingDirectory}`);