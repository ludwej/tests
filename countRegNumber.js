function countRegNumber(Reg){
  return Reg.split(',').length;
}
var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
assert.equal(regCount, 3)
console.log("countRegNumber")
