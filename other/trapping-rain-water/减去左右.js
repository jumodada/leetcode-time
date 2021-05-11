/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let [cells, max] = [0, 0]
    height.forEach((cell) => {
        cells += cell
        if (cell > max) max = cell
    })
    const left = getSoil(height,max)
    const right = getSoil(height.reverse(),max)
    const total = max * height.length - left -right - cells
    return total
};


function getSoil(height,max){
    let leftMax = 0;
    return height.reduce((left,cell)=>{
        if(cell>leftMax) leftMax = cell
        return left + max - leftMax
    },0)

}