export const config= {
    //// 后台地址
    baseUrl:'http://192.168.2.227:8003/appservice.asmx/',
	//baseUrl 'http://192.168.2.112:8080/appservice.asmx/',

	//文件上传地址
	uploadUrl:'http://localhost:36696/UploadHandler.ashx',
	date:{
		monthsFull:[ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
		monthsShort: [ '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二' ],
		weekdaysFull: [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ],
		weekdaysShort: [ '日', '一', '二', '三', '四', '五', '六' ],
		today: '今日',
		clear: '清除',
		close: '关闭',
		// firstDay: 1,
		format: 'yyyy-mm-dd',
		formatSubmit: 'yyyymmdd',
		container:Document,
		selectMonths: true,
		selectYears: true
	},

	//// 订单状态
	//orderStatus: [
	//	{name: '全部', value: ''},
	//	{name: '未复核', value: '1'},
	//	{name: '已复核', value: '2'},
	//	{name: '总部已审核', value: '3'}
	//],
	
    // 订单状态
	orderStatus: [
		{ name: '已接收', value: '1' },
		{ name: '未接收', value: '0' }
	],
    
	cookie:{
		/** 
		 * 默认过期时间为30天
		 * */
		expireDay: 30
	}
}