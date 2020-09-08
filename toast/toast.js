/*
 *@params {String} text 提示的文字
 *@params {Number} timeout 提示停留时间
 */
export default ({
	text = '请输入提示文字',
	timeout = 1500
}) => {
	const old_toast_box = document.querySelector('.js2-toast-box')
	if (old_toast_box) return

	const head = document.querySelector('head')
	const body = document.querySelector('body')

	const toast_box = document.createElement('div')
	toast_box.className = 'js2-toast-box'
	toast_box.innerText = text

	const toast_box_style = document.createElement('style')
	const style_text = '\
		.js2-toast-box{\
			width: 160px;\
			height: 80px;\
			line-height:80px;\
			background-color: rgba(0, 0, 0, .8);\
			text-align:center;\
			color:#FFF;\
			border-radius:5px;\
			position:fixed;\
			left:50%;\
			top:30%;\
			transform:translateX(-50%);\
		}\
		'
	toast_box_style.append(style_text)
	head.append(toast_box_style)
	body.append(toast_box)
	setTimeout(() => {
		body.removeChild(toast_box)
		head.removeChild(toast_box_style)
	}, timeout)
}