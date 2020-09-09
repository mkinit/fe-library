/*
 *@params {Function} callback：要执行的函数；
 *@params {any} params callback的参数；
 *@params {Number} interval 间隔时间，默认值为1000毫秒
 *@params {Number} timeout 延迟执行时间，默认值为500毫秒
 */

export default ({ callback, params, interval = 1000, timeout = 500 }) => {
	let timer,
	action_time = new Date()
	return function() {
		clearTimeout(timer) //防止连续触发
		function func() { //判断有无执行参数
			if (params) {
				callback(params)
			} else {
				callback()
			}
		}
		//两次执行间隔需要大于指定的间隔时间
		if (new Date() - action_time >= interval) {
			func()
			action_time = new Date()
		} else {
			timer = setTimeout(function() { //否则延迟执行
				func()
			}, timeout)
		}
	}
}