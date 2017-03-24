'use strict'

const Hero = function Hero (name, alias, power) {
  this.name = name
  this.alias = alias
  this._power = power
}

Hero.prototype.usePower = function () {
  return this._power
}

Hero.prototype.unMask = function () {
  console.log(this.name + ' ' + this.alias)
}

const batman = new Hero('Bruce Wayne', 'The Dark Knight', 'Being a badass')

module.exports = {
  Hero,
  batman: batman
}
