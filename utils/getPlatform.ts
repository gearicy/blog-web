/**
* 判断网页运行在电脑端还是手机端
* @returns {'PC' | 'Mobile' | 'Server'}
*/
export default (): 'PC' | 'Mobile' | 'Server' => {
    if (process.client) {
        const userAgentInfo = navigator.userAgent
        const mobileAgents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
        for (let v = 0; v < mobileAgents.length; v++) {
            if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {   
                return 'Mobile'
            }
        }
        return 'PC'
    } else {
        return 'Server'
    }
}