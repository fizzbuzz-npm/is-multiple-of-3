"use strict"
const toInt = require('to-integer')
const isMultipleOf = require('is-multiple-of')

function isMultipleOf3(value){
    return isMultipleOf(toInt(value), 3)
}

module.exports = isMultipleOf3;
