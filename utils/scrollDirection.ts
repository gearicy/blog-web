/**
 * 判断Y轴滚动条的滚动方向，从而执行相应回调
 * @param {Function} callbackUp 向上滚动时的回调函数
 * @param {Function} callbackDown 向下滚动时的回调函数
 */
export default (callbackUp: Function, callbackDown: Function) => {
    if (process.client) {
        let scrollInit = 0
        let timer: number = 0
        window.addEventListener('scroll', () => {
            timer && window.clearTimeout(timer)
            timer = window.setTimeout(() => {
                let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
                let diffY = scrollTop - scrollInit
                scrollInit = scrollTop
                diffY > 0 ? callbackDown(scrollInit) : callbackUp(scrollInit)
                // const direction = diffY > 0 ? 'down' : 'up'
                // if (direction === 'up') {
                //     callbackUp(scrollInit)
                // } else {
                //     callbackDown(scrollInit)
                // }
            }, 100)
        })
    }
}