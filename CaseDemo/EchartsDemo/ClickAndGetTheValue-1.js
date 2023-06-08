// 根据点击的范围获取所选元素的索引并获取值
myChart.getZr().on('click', function (param) {
    const pointInPixel = [param.offsetX, param.offsetY]
    // 转换像素坐标值——>逻辑坐标系上的点。
    let pointInGrid = myChart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)
    let pointX = pointInGrid[0]
    let pointY = pointInGrid[1]
    if (pointX >= 0 && pointY >= 0 && pointY <= 115) {
        // doSomething...
    }
    let dataIndex = pointInGrid[0]
    let currentData = myChart.getOption().series[0].data[dataIndex]
})