const math = require('../math')
const volume_cube = (side) => {
    return side * side * side;
}
const volume_cone = (r, h) => {
    return (1/3) * 3.14 * (r) * (r) * (r) * h
}
module.exports = {
    volume_cone,
    volume_cube
}