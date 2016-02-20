var canvas = document.querySelector('#canvas');
//ctx相当于画笔
ctx = canvas.getContext('2d');

ctx.save();

//矩形
ctx.fillStyle = 'rgb(200,0,0)';
ctx.fillRect(130,130,80,80);
ctx.fillStyle = 'rgba(0,0,200,0.5)';
ctx.fillRect(170,170,80,80);
//边框
ctx.strokeStyle = 'rgba(0,255,0,0.8)'
ctx.strokeRect(129.5,129.5,120,120);
//去除矩形
ctx.clearRect(170,170,40,40);

ctx.clearRect(0,0,400,400);//清除画布内容

//线条
ctx.beginPath();
ctx.moveTo(200,200);
ctx.lineTo(220,180);
ctx.lineTo(220,220);
ctx.fill();
//.stroke 用线条填充路径  .fill 用色块填充路径范围
//组合 fillRect strokeRect clearRect
//线条流程 .beginPath ==> .moveTo(); ==> .lineTo();

ctx.clearRect(0,0,400,400);//清除画布内容

//圆
ctx.beginPath();
ctx.arc(200,200,100,0,Math.PI*2,false);//false:顺时针 true:逆时针
ctx.moveTo(280,200);
ctx.arc(200,200,80,0,Math.PI,false);
ctx.moveTo(180,180);
ctx.arc(170,180,10,0,Math.PI*2,false);
ctx.moveTo(240,180);
ctx.arc(230,180,10,0,Math.PI*2,false);
ctx.stroke();

ctx.clearRect(0,0,400,400);//清除画布内容

//贝塞尔曲线
ctx.beginPath();
ctx.moveTo(75,40);
ctx.bezierCurveTo(75,37,70,25,50,25);
ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
ctx.bezierCurveTo(20,80,40,102,75,120);
ctx.bezierCurveTo(110,102,130,80,130,62.5);
ctx.bezierCurveTo(130,62.5,130,25,100,25);
ctx.bezierCurveTo(85,25,75,37,75,40);
ctx.fill();

ctx.clearRect(0,0,400,400);//清除画布内容

//阴影
/*ctx.shadowOffsetX = 3;
ctx.shadowOffsetY = 3;
ctx.shadowBlue = 2;
ctx.shadowColor = 'rgba(0,0,0,0.4)';*/

//canvas和程序结合
for(var i = 0;i < 500;i++){
	ctx.beginPath();
	var arcpointx = Math.floor(Math.random()*400);
	var arcpointy = Math.floor(Math.random()*400);
	var radius = Math.floor(Math.random()*10+2);
	ctx.arc(arcpointx,arcpointy,radius,0,Math.PI*2);
	ctx.fillStyle = 'rgb('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';
	ctx.fill();
}

ctx.clearRect(0,0,400,400);//清除画布内容

//画布叠加
var x = 10;
var y = 10;
var speed = 1;
var draw = function(){
	if(x > 390){
		speed *= -1;
	}else if(x < 10){
		speed *= -1;
	}
	ctx.clearRect(0,0,400,400);
	x += speed;
	y += speed;
	ctx.beginPath();
	ctx.arc(x,y,10,0,Math.PI*2);
	ctx.fill();
}
//setInterval(draw,10);
//第二个canvas
/*var canvas1 = document.querySelector('#canvas1');
ctx1 = canvas1.getContext('2d');
ctx1.beginPath();
ctx1.fillStyle = 'rgba(0,255,0,0.5)';
ctx1.fillRect(150,150,100,100);*/

ctx.clearRect(0,0,400,400);//清除画布内容

//动图
/*var img = new Image();
img.src = 'images/20151128081816_U3kcu.thumb.700_0.jpeg';
img.onload = function(){
	ctx.drawImage(img,0,0);
}
var x1 = 0;
var draw1 = function(){
	ctx.clearRect(0,0,400,400);
	ctx.drawImage(img,x1,0);
	x1 += 1;
}
setInterval(draw1,30);*/

//线型
ctx.lineWidth = 4;//粗细
ctx.lineCap = 'round';//线头形状
var linechange = ctx.createLinearGradient(0,0,380,0);
linechange.addColorStop(0,'red');
linechange.addColorStop(0.2,'orange');
linechange.addColorStop(0.4,'yellow');
linechange.addColorStop(0.6,'green');
linechange.addColorStop(0.8,'blue');
linechange.addColorStop(1,'purple');
ctx.strokeStyle = linechange;
ctx.fillStyle = linechange;
ctx.beginPath();
ctx.moveTo(10,200);
ctx.lineTo(390,200);
ctx.stroke();

ctx.beginPath();
ctx.arc(200,200,50,0,Math.PI*2);
ctx.fill();

ctx.clearRect(0,0,400,400);//清除画布内容

ctx.save();
ctx.beginPath();
ctx.translate(200,200);
ctx.arc(0,0,50,0,Math.PI*2);
ctx.restore();
ctx.fillRect(50,50,50,50);
ctx.fill();

ctx.save();
ctx.translate(200,200);
for(var i = 0;i < 12;i++){
	ctx.beginPath();
	ctx.rotate(Math.PI/6);
	ctx.arc(80,80,20,0,Math.PI*2);
	ctx.stroke();
}
ctx.restore();

ctx.restore();

ctx.clearRect(0,0,400,400);//清除画布内容

//var sec,min,hour,i = 1;
var sec,min,hour,secs,mins;
var clock = function(){
	var time = new Date();
	secs = time.getSeconds();
	mins = time.getMinutes();
	hours = time.getHours();
	sec = Math.PI/30*secs;
	min = Math.PI/1800*(mins*60+secs);
	hour = Math.PI/21600*(hours*3600+mins*60+secs);
	//钟表
	ctx.save();
	ctx.translate(200,200);
	ctx.lineCap = 'round';
	ctx.strokeStyle = '#333';

	//表框
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#2af';
	ctx.arc(0,0,150,0,Math.PI*2);
	ctx.stroke();
	ctx.restore();

	//60分线
	ctx.save();
	for(var i = 0;i < 60;i++){
		ctx.beginPath();
		ctx.rotate(Math.PI/30);
		if((i+1)%5 == 0){
			ctx.lineWidth = 4;
			ctx.moveTo(0,130);
			ctx.lineTo(0,140);
		}else{
			ctx.lineWidth = 2;
			ctx.moveTo(0,135);
			ctx.lineTo(0,140);
		}
		ctx.stroke();
	}
	ctx.restore();

	//时针
	ctx.save();
	ctx.beginPath();
	ctx.rotate(hour);
	ctx.lineWidth = 8;
	ctx.moveTo(0,10);
	ctx.lineTo(0,-70);
	ctx.stroke();
	ctx.restore();

	//分针
	ctx.save();
	ctx.beginPath();
	ctx.rotate(min);
	ctx.lineWidth = 4;
	ctx.moveTo(0,15);
	ctx.lineTo(0,-110);
	ctx.stroke();
	ctx.restore();

	//秒针
	ctx.save();
	ctx.beginPath();
	ctx.rotate(sec);
	ctx.lineWidth = 2;
	ctx.strokeStyle = 'red';
	ctx.moveTo(0,15);
	ctx.lineTo(0,-100);
	ctx.moveTo(5,-105);
	ctx.arc(0,-105,5,0,Math.PI*2);
	ctx.moveTo(0,-110);
	ctx.lineTo(0,-115);
	ctx.stroke();
	ctx.restore();

	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = '#fff';
	ctx.arc(0,0,2,0,Math.PI*2);
	ctx.fill();
	ctx.restore();

	ctx.restore();
}
clock();
setInterval(function(){
	i++;
	ctx.clearRect(0,0,400,400);
	clock();
},1000);

/*var aa = function(){
	console.log(1);
	requestAnimationFrame(aa);
}
requestAnimationFrame(aa);*/