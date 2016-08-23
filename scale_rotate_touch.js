<html>
<head>
<title>Touch缩放旋转效验</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta http-equiv="Cache-Control" content="no-cache, no-store,no-siteapp, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<META HTTP-EQUIV="expires" CONTENT="Wed, 26 Feb 1997 08:21:57 GMT">
<meta name="viewport" content="width=device-width,inital-scale=1.0,maximum-scale=1.0,user-scalable=no,minimal-ui;">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-title" content="Touch缩放旋转效验">
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="full-screen" content="yes">
<meta name="x5-fullscreen" content="true">
<meta name="format-detection" content="telephone=no">
<style>
    html,body{
        margin:0px;
        padding:0px;
    }
    canvas{
    	position:absolute;
    	top:0px;
    	left:0px;
        width:100%;
        height:100%;
    }
</style>
</head>
<body>
<canvas id="canvas" width="300" height="300" style="width:100%;height:100%;"></canvas>
<script type="text/javascript" src="./js/Util.js"></script>
<script type="text/javascript" src="./js/touch.js"></script>
<script type="text/javascript">
var canvas = document.querySelector("#canvas");
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

function drawGrids(){//绘制网格
	var W = mapScale.width;
	var H = mapScale.height;
	scaleCxt.clearRect(-mapScale.width,-mapScale.height,2*mapScale.width,2*mapScale.height);
	var gridsW = W;
	var gridsH = H;
	//绘制网格
	var gridSize = 22;
	scaleCxt.lineWidth = 2;
	scaleCxt.save();
	var current = 1
	var index = 0;
	//画横线
	while(current <= gridsH){
		scaleCxt.restore();
		scaleCxt.strokeStyle = "rgba(90,90,160,1.0)";
		scaleCxt.beginPath();
		scaleCxt.moveTo(0, current);
		scaleCxt.lineTo(gridsW, current);
		current += gridSize;
		index++;
		scaleCxt.stroke();
	}
	current = 1;
	index = 0;
	//画竖线
	while(current <= gridsW){
		scaleCxt.restore();
		scaleCxt.strokeStyle = "rgba(90,90,160,1.0)";
		scaleCxt.beginPath();
		scaleCxt.moveTo(current, 0);
		scaleCxt.lineTo(current, gridsH);
		current += gridSize;
		index++;
		scaleCxt.stroke();
	}
}
!function(){
	
}();
</script>
</body> 
</html>