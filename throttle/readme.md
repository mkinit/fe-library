### 节流函数
- 使用import导入
- 使用：```
document.addEventListener('scroll',throttle({
	callback:()=>{
		console.log(123)
	}
}))
```

### 参数
- @params {Function} callback：要执行的函数；
- @params {any} params callback的参数；
- @params {Number} interval 间隔时间，默认值为1000毫秒
- @params {Number} timeout 延迟执行时间，默认值为500毫秒