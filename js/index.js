 $(function(){
	$('#fullpage').fullpage({
		navigation:true,
		fixedElements: '#top',
		anchors:['登陆百度舆情','领先：数据收集与处理','全面：舆情分析逻辑与架构','专业：专业数据可视化'],
		navigationTooltips:['登陆百度舆情','领先：数据收集与处理','全面：舆情分析逻辑与架构','专业：专业数据可视化'],
	});
	$('#xia').on('click',function(){
		$.fn.fullpage.moveSectionDown();
	})
   })