/**
 * 计算给定日期到今天为止，总共经过了多少 <年-月-日 时:分:秒>
 * @param {string} date 给定的日期，如：2020/5/20
*/
export default (date: string) => {
	const today = new Date()
	const begin = new Date(date)
	const diffDays = Math.floor((today.getTime() - begin.getTime()) / (1000 * 60 * 60 * 24))
	const diffMonths = 
		(today.getFullYear() * 12 + today.getMonth()) - 
		(begin.getFullYear() * 12 + begin.getMonth())
	
	const Y = Math.floor(diffMonths / 12)
	const M = diffMonths % 12
	const D = diffDays - Y * 365 - M * 30 + 5
	const h = today.getHours()
	const m = today.getMinutes()
	const s = today.getSeconds()

	return { Y, M, D, h, m, s }
}