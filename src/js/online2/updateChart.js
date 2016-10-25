var dptShorten = {
	"董事会、经理部": "经理部",
	"办公室": "办公室",
	"企管规划部": "企划",
	"计划财务部": "计财",
	"生产管理部": "生产",
	"技术质量部": "技质",
	"安全保卫部": "安保",
	"设备管理部": "设备",
	"物资管理部": "物资",
	"技术中心": "技术中心",
	"基建与行政事务部": "基建",
	"人力资源部": "人力",
	"企业文化部": "宣传",
	"纪检监察内审部": "纪检",
	"群工部": "群工",
	"离退休工作部": "离退休",
	"印钞数管部": "数管",
	"胶凹制作部": "胶凹",
	"印码制作部": "印码",
	"检封制作部": "检封",
	"钞纸制作部": "钞纸",
	"钞纸成品制作部": "成品",
	"造币制作部": "造币",
	"能源环保部": "能源",
	"市场开发部": "市场",
	"采购管理部": "采购",
	"长城公司": "长城",
	"金鼎公司": "金鼎",
	"物业公司": "物业"
};

function handleBarData(obj, gb, i) {
	var scoreOrder = {
		xAxis: [],
		yAxis: []
	};

	obj.map(function(userInfo, j) {
		scoreOrder.yAxis[j] = (j + 1) + '.' + userInfo.name + ' (' + dptShorten[userInfo.user_dpt] + ') ';
		scoreOrder.xAxis[j] = userInfo.value;
	});

	gb.option.xAxis[i].min = scoreOrder.xAxis[obj.length - 1] - 10;
	gb.option.series[i].data = scoreOrder.xAxis.reverse();
	gb.option.yAxis[i].data = scoreOrder.yAxis.reverse();
	gb.myChart[0].setOption(gb.option);
}


module.exports = {
	realScore: function(gb) { //所有人员得分排名
		$.ajax({
			url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getRealScore&nums=30',
			data: {
				sportid: gb.sportid
			},
			async: false,
			dataType: "jsonp",
			callback: "JsonCallback"
		}).done(function(obj) {
			handleBarData(obj, gb, 1);
		});
	},
	realScoreRate: function(gb) {
		$.ajax({
			url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getRealScoreRate&nums=30&perscore=' + gb.perScore,
			data: {
				sportid: gb.sportid
			},
			async: false,
			dataType: "jsonp",
			callback: "JsonCallback"
		}).done(function(obj) {
			handleBarData(obj, gb, 0);
		});
	},
	scoreByGroup: function(gb) {
		//小组得分排序
		$.ajax({
			url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getScoreByGroup',
			data: {
				sportid: gb.sportid
			},
			async: false,
			dataType: "jsonp",
			callback: "JsonCallback"
		}).done(function(obj) {

			var scoreOrder = {
				xAxis: [],
				yAxis: []
			};

			obj.map(function(userInfo, i) {

				scoreOrder.xAxis[i] = userInfo.dpt;
				scoreOrder.yAxis[i] = userInfo.score;

			});
			gb.option.series[2].data = scoreOrder.yAxis;
			gb.option.xAxis[2].data = scoreOrder.xAxis;

			gb.myChart[0].setOption(gb.option);
		});
	},
	answerSpeed: function(gb) {
		//小组得分排序
		$.ajax({
			url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getAnswerSpeed',
			data: {
				sportid: gb.sportid
			},
			async: false,
			dataType: "jsonp",
			callback: "JsonCallback"
		}).done(function(obj) {

			var scoreOrder = {
				xAxis: [],
				yAxis: []
			};
			obj.map(function(userInfo, j) {

				scoreOrder.xAxis[j] = userInfo.user_name;
				scoreOrder.yAxis[j] = userInfo.num;

			});

			gb.option.series[3].data = scoreOrder.yAxis;
			gb.option.xAxis[3].data = scoreOrder.xAxis;

			gb.myChart[0].setOption(gb.option);
		});
	},
	answeredNums: function(gb) {

		//小组得分排序
		$.ajax({
			url: 'http://cbpc540.applinzi.com/index.php?s=/addon/GoodVoice/GoodVoice/getAnsweredNums',
			data: {
				sportid: gb.sportid
			},
			async: false,
			dataType: "jsonp",
			callback: "JsonCallback"
		}).done(function(obj) {
			var scoreOrder = [];
			var nums = 0;
			obj.map(function(userInfo, i) {
				scoreOrder[i] = {
					name: 1,
					value: 1
				};
				scoreOrder[i].name = userInfo.dpt;
				scoreOrder[i].value = userInfo.nums;
				nums += Number.parseInt(userInfo.nums);
			});
			gb.option.series[4].data = scoreOrder;

			gb.option.title[0].subtext = '当前已连接人数：' + nums;

			gb.myChart[0].setOption(gb.option);
		});
	}
};