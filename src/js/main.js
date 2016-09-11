//公共资源
require('./vendors/jquery.fullPage.js');
require('./vendors/jquery-weui.js');
//var $ = require('jquery');
require('./vendors/g2/effective.js');
require('./vendors/fakeLoader.js/fakeLoader.js');
var exam = require('./global/config.js');

var util = require('./exam/examFunc.js');
var PAPER = require('./global/paper.js');

//此处设置一个较长数值，数据载入完毕后再显示
$("#fakeLoader").fakeLoader({
	timeToHide: 600000, //Time in milliseconds for fakeLoader disappear
	bgColor: "#d7eefe",
	spinner: "spinner7"
});
$('.fl').parent().append('<p class="center" style="position:absolute;width:100%;top:60%;color:#445">载入中...</p>');


function initDom() {

	//隐藏提示信息
	$('[name="sucessInfo"] .weui_msg_title').hide();
	$('[name="sportDate"]').text(exam.sportDate);

	var dpt = require('./config/department.json');

	var dptLen = dpt.length,
		dptName = [];
	dpt.map(function(dpt_name) {
		dptName.push(dpt_name.name);
	});

	$('[name="user_dpt"]').select({
		title: "请选择您的部门",
		items: dptName
	});
}

initDom();

var app = function() {

	var renderPaper = function() {

		$('#fullpage').fullpage({
			verticalCentered: false,
			loopHorizontal: false,
			//sectionsColor: exam.secColor,
			//easingcss3: 'cubic-bezier(0.25, 0.5, 0.35, 1.15)', //'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
			onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
				exam = util.judgeTimeReleased(exam);
				util.pageChange(slideIndex, nextSlideIndex, direction, exam);
			},
			afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {

				//最后两页隐藏箭头
				if (slideIndex == exam.lastPage - 2) {
					//console.log('进入倒数第二页');
					$('.iSlider-arrow-blue-right').hide();
				} else if (slideIndex == exam.lastPage - 1) {
					//console.log('进入最后一页');
					$('.iSlider-arrow-blue-right').hide();
					if (!exam.isSubmit) {
						setTimeout(function() {
							$.fn.fullpage.moveSlideLeft();
						}, 500);
					}
				} else {
					$('.iSlider-arrow-blue-right').show();
				}
			}
		});
		exam = util.afterSliderRender(exam);
	};

	function getPaper() {
		var question = require('./config/' + PAPER[exam.sportid] + '.json');
		var quesLen = question.length;

		//管三活动，仅前200道题目参与问答
		exam.sourceList = util.getRandomArr(quesLen);
		//只抽取maxAnswerNum个
		quesLen = (quesLen <= exam.maxAnswerNum) ? quesLen : exam.maxAnswerNum;
		exam.maxAnswerNum = quesLen;

		$('[name="nums"]').text(quesLen);
		exam.scoresPerAnswer = 100 / quesLen;
		//exam.scoresPerAnswer = 1;
		$('[name="scores"]').text(exam.scoresPerAnswer.toFixed(0));

		for (var i = 0; i < quesLen; i++) {
			$('[name="sucessInfo"]').before(util.getExamTemplate(question[exam.sourceList[i]], i + 1));
			exam.isAnswered[i] = 0;
		}

		//横向页面，部分内容布局修正
		$('[name="fixed"]').css('width', 100 / (3 + exam.maxAnswerNum) + '%');

		var str = '<div class="weui_opr_area"><p class="weui_btn_area"><a href="javascript:;" class="weui_btn weui_btn_primary weui_btn_primary_yellow" id="submit">交卷</a></p></div>';
		$('.answer-num').last().parent().append(str);

		//间隔背景
		exam.lastPage = quesLen + 3;
		for (i = 0; i < exam.lastPage; i++) {
			exam.secColor[i] = (i % 2) ? '#fff' : '#445';
		}

		document.getElementById('autoplay').play();
		renderPaper();
	}

	function loadQuestions() {

		getPaper();

		$('.weui_cell_bd,.weui_cell_hd').on('click', function() {
			exam = util.handleTouchEvent(exam, $(this));
		});

		$('.weui_msg').removeClass('hidden');

		$('[name="login"] input').on('focus', function() {
			$(this).parents('.weui_cell').find('label').attr('style', '');
		});

		$('#login').on('click', function() {
			exam = util.getUserInfo(exam);
		});

		$('#submit').on('click', function() {
			exam = util.submitData(!exam.realMatch, exam.curID, exam);

		});

	}
	return {
		init: function() {
			loadQuestions();
		}
	};
}();

jQuery(document).ready(function() {
	app.init();
});