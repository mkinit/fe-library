/*
* @params {String} content 自定义提示内容，必填。
* @params {String} title 自定义提示的标题，默认为“提示”，选填。
* @params {String} color 十六进制颜色代码，默认为“#feb904”，选填。
* @params {String} confirm_text 左边按钮文字，默认为“确定”，选填。
* @params {String} cancel_text 右边按钮文字，默认为“取消”，选填。
* @params {Function} confirm 按钮回调函数，必填，执行回调后必须删除模态框。
* @params {Function} cancel 按钮回调函数，选填，执行回调后必须删除模态框。
* @params {Boolean} cancel_btn 是否显示取消的按钮，选填。
*/

const modal = {

	hide: function() {
		this.modal.remove()
	},

	show: function({
		title = '提示',
		content = '请输入提示内容',
		color = '#feb904',
		confirm_text = '',
		cancel_text = '',
		confirm = ()=>this.hide(),
		cancel = ()=>this.hide(),
		cancel_btn = false
	}) {
		if (this.modal) {
			this.modal.remove()
		}
		this.modal = document.createElement('div')
		this.modal.className = 'js2-modal'
		this.style = document.createElement('style')
		this.modal.innerHTML = `
				<div class="js2-message-box">
					<div class="js2-message-title">${title?title:'提示'}</div>
					<div class="js2-message-content">
						${content}
					</div>
					<div class="js2-btn-group" style="${cancel_btn?'':'text-align:center;'}">
						<span class="js2-btn js2-confirm" style="${cancel_btn?'':'float:none;'}">${confirm_text?confirm_text:'确定'}</span>
						<span class="js2-btn js2-cancel" style="${cancel_btn?'':'display:none;'}">${cancel_text?cancel_text:'取消'}</span>
					</div>
				</div>
			`
		this.style.innerHTML = `
			.js2-modal{
				width:100vw;
				height:100vh;
				position:fixed;
				left:0;
				top:0;
				background-color:rgba(0,0,0,.7);
			}
			.js2-message-box{
				border-radius:6px;
				width:80%;
				position:absolute;
				left:50%;
				top:30%;
				transform:translateX(-50%);
				background-color:#FFF;
				padding:1em 2em;
				box-sizing:border-box;
			}
			.js2-message-title{
				text-align:center;
				font-size:1.25em;
				font-weight:bold;
			}
			.js2-message-content{
				margin-top:1em;
				line-height:1.5;
			}
			.js2-btn-group{
				margin-top:1em;
				overflow:hidden;
			}
			.js2-btn{
				display:inline-block;
				width:45%;
				background-color:${color?color:'#feb904'};
				color:#FFF;
				border-radius:6px;
				text-align:center;
				line-height:2.5;
				cursor:pointer;
			}
			.js2-confirm{
				float:left;
			}
			.js2-cancel{
				float:right;
			}
			`
		document.head.appendChild(this.style)
		document.body.appendChild(this.modal)

		var confirm_btn = this.modal.querySelector('.js2-confirm')
		var cancel_btn = this.modal.querySelector('.js2-cancel')
		confirm_btn.addEventListener('click', function() {
			confirm()
		})
		cancel_btn.addEventListener('click', function() {
			cancel()
		})
	}
}

export default modal