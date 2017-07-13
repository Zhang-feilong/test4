	//加载n个n年份，月份，并选择
	function ForEach(callback,length,FirstName){
		var i = FirstName || 0;
		for(;i<length;i++){
			callback(i);//回调函数
		}
	}
	function CreatYear(i){
		var options = document.createElement("option");
		options.innerHTML = i;
		
		var year = document.getElementById("year");
		year.appendChild(options);//往年分列表中添加年份
		// year.value = i;
	}
		function CreatMoth(i){
		var options = document.createElement("option");
		options.innerHTML = i;
		
		var month = document.getElementById("month");
		month.appendChild(options);//往月份列表中添加月份
		// month.value = i;
	}
	ForEach(CreatMoth,13,1);
	ForEach(CreatYear,2051,1900);

	//定义月份的天数的数组
	var dayArr = [31,28,31,30,31,30,31,31,30,31,30,31];
	function is_leap(year){
		if((year%4==0&&year%100!=0)||year%400==0)
			return true;
		else 
			return false;
	}
	var daylist = document.getElementsByClassName("day")[0].getElementsByTagName("li");
	function a(){
		ForEach(function(i){
			daylist[i].innerHTML = " ";
		},daylist.length)
		var year = document.getElementById("year");
		if(year.value== "" || month.value== ""){
			alert("请选择年份与月份！");
			return;
		}
		else{	
		//点击查询按钮，可以出现当月信息
		//获取当月第一天是星期几
			var y = year.value;
			var m = month.value-1;//月份范围0~11
			var firstDay = new Date(y,m,1);//年份按照公历
			dayArr[1] =  is_leap(y)?29:28;
			var time = firstDay.getDay();
			
			ForEach(function(i){
				time = (time == 0)?7:time;
				daylist[time + i-1].innerHTML = i+1;
			},dayArr[m])
		}
	}
	window.onload = function(){
		  var nowDate = new Date();
    	var yr = nowDate.getFullYear();
    	var mh = nowDate.getMonth()+1;
    	var date = nowDate.getDate();
		var options = document.createElement("option");
		options.innerHTML = yr;
		
		var year = document.getElementById("year");
		year.appendChild(options);
		year.value = yr
		var options = document.createElement("option");
		options.innerHTML = mh;
		
		var month = document.getElementById("month");
		month.appendChild(options);
		month.value = mh;
	
		
		//点击查询按钮，可以出现当月信息
		//获取当月第一天是星期几
			var y = year.value;
			var m = month.value-1;//月份范围0~11
			var firstDay = new Date(y,m,1);//年份按照公历
			dayArr[1] =  is_leap(y)?29:28;

			var time = firstDay.getDay();
			ForEach(function(i){
				time = (time == 0)?7:time;
				daylist[time + i-1].innerHTML = i+1;
			},dayArr[m])
		
	}