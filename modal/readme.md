### 模态框
- 使用import导入
- 使用：```modal.show({content:'提示内容'})```
- 默认为只有确定按钮，```cancel_btn:true```开启取消按钮，两个按钮默认点击后删除模态框，如果自定义回调函数，需要手动删除模态框```modal.hide()```
- 只能同时存在一个模态框，如果同时创建多个，只有最后一个生效。

### 参数
- @params {String} content 自定义提示内容，必填。
- @params {String} title 自定义提示的标题，默认为“提示”，选填。
- @params {String} color 十六进制颜色代码，默认为“#feb904”，选填。
- @params {String} confirm_text 左边按钮文字，默认为“确定”，选填。
- @params {String} cancel_text 右边按钮文字，默认为“取消”，选填。
- @params {Function} confirm 按钮回调函数，必填，执行回调后必须删除模态框。
- @params {Function} cancel 按钮回调函数，选填，执行回调后必须删除模态框。
- @params {Boolean} cancel_btn 是否显示取消的按钮，选填。