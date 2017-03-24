#!/usr/bin/env node
'use strict'
// long way
const batman = {
  name: 'Bruce Waye',
  alias: 'The Batman',

    usePower: function (){
    return 'Spend money and hit people'
  }
}
// userPower function
const usePower = function () {
  return this._power
}
// Consructor function
const Hero = function (name, alias, power) {
  this.name = name
  this.alias = alias
  this._power = power
  this.usePower = usePower
}
// Build hero
const wolverine = new Hero ('Logan', 'Wolverine', 'Cut Stuff')
