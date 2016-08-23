<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'index.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="shortcut icon" href="http://site518.net/wp-content/uploads/2011/07/favc.ico">
    <link rel="stylesheet" type="text/css" href="demostyle.css">
	<script src="http://code.jquery.com/jquery-1.5.1.min.js"></script>
	<!-- <script src="js/facedetection/ccv.js"></script> 
	<script src="js/facedetection/face.js"></script> -->
	<script src="js/jquery.facedetection.js"></script> 
	 <style>
	    .face { border:1px solid #F00;}
	</style>
    <script>
    function abcde(){
	   	 $("img").each(function(){
	    		var thisimg=$(this);
	    		 var coords = $(this).faceDetection({
				    complete:function(image, coords) {
					    $("#click").text(image+'完成检测!'+coords[0].positionX);
					    for(var i=0;i<coords.length; i++){
						    thisimg.parent(".box").append("<div class='face'></div>");
						    thisimg.parent(".box").find(".face").css(
						    {
						    "position":"absolute",
						    "width":coords[i].width+"px",
						    "height": coords[i].height+"px",
						    "left":	coords[i].positionX,
						    "top":coords[i].positionY
						    });
					    }
				    },
				    error:function(img, code, message) {
					    $("#click").text('出错啦!');
					    alert('错误: '+message);
				    }
			    });
	    	});
	    	alert("end");
	    }
    $(document).ready(function(){
    	$("#ccc").click(function(){
    		abcde();
    	});
  	});  	
    </script>
   
  </head>
  
  <body>
			<div class="box">
				<span id="ccc">点击看框框</span><br><br>
		        <img src="img/abcde.png" style="border:1px solid #000;">  
			</div>

  </body>
</html>
