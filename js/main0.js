var mapGenerator = function (options) {
    var defVal = {
        containerId: "id",
        mapChina: "js/china_simplify.json",
        data: 'js/highway1.geojson'
    };
    
    var containerWidth, containerHeight, scaleX, scaleY, initialScale = 1, currentScale=1, angle = 0, totalAngle = 0;
    var x = 0, y = 0, dx = 0, dy = 0;
    var ratioX = 1, ratioY = 1;
	var mapChina = null, mapData = null, canvasObj = null, canvas = null, cxt = null, geoCoordsRange = {};
	var opts = Util.extend({}, defVal, options);
	
    var methods = {
        // Convert geography coordinates to screen pixel coordinates.
        convertCoords: function (coords) {
            return {
                x: (parseFloat(coords[0]) - parseFloat(geoCoordsRange.minLon)) * 3600 / scaleX,
                y: (parseFloat(geoCoordsRange.maxLat) - parseFloat(coords[1])) * 3600 / scaleY
            }
        },
        getMaxMinValue: function (coordsColl) {
        	Util.each(coordsColl, function (value, i) {
                if (!geoCoordsRange.maxLon || geoCoordsRange.maxLon < value[0]) geoCoordsRange.maxLon = value[0];
                if (!geoCoordsRange.minLon || geoCoordsRange.minLon > value[0]) geoCoordsRange.minLon = value[0];
                if (!geoCoordsRange.maxLat || geoCoordsRange.maxLat < value[1]) geoCoordsRange.maxLat = value[1];
                if (!geoCoordsRange.minLat || geoCoordsRange.minLat > value[1]) geoCoordsRange.minLat = value[1];
            });
        },
        getGeoCoordsRange: function () {
            if (!mapChina) return;
            for (var i = 0, ci; ci = mapChina.features[i]; i++) {
                if (ci.geometry == null) continue;
                if (ci.geometry.type == "Polygon") methods.getMaxMinValue(ci.geometry.coordinates[0]);
                else {
                    for (var j = 0, item; item = ci.geometry.coordinates[j]; j++) {
                        methods.getMaxMinValue(item[0]);
                    }
                	//methods.getMaxMinValue(ci.geometry.coordinates);
                }
            }
        },
        drawPoint: function(context, coords){
        	context.save();
			context.beginPath();
			context.fillStyle = "red";
			context.strokeStyle = "blue";
			context.lineWidth = 2;
			context.arc(coords[0]-canvas.width/2, coords[1]-canvas.height/2, 10, 0, Math.PI*2, true);
			context.fill();
			context.stroke();
			cxt.closePath();
			context.restore();
        },
        drawLine: function (context, coords) {
        	Util.each(coords, function (value, i) {
                var c = methods.convertCoords(value);
                if (i == 0) context.moveTo(c.x-canvas.width/2, c.y-canvas.height/2);
                else context.lineTo(c.x-canvas.width/2, c.y-canvas.height/2);
            });
        },
        render: function () {
        	cxt.clearRect(-canvas.width,-canvas.height,2*canvas.width,2*canvas.height);
            if (!mapChina || !mapData || !canvas) return;
            cxt.save();
            cxt.beginPath();
            if(currentScale<=6 || currentScale > 6){
            	cxt.lineWidth = 0.2;
            }
            if(currentScale<=5){
            	cxt.lineWidth = 0.3;
            }
            if(currentScale<=4){
            	cxt.lineWidth = 0.5;
            }
            if(currentScale<=3){
            	cxt.lineWidth = 1;
            }
            if(currentScale<=2){
            	cxt.lineWidth = 1.5;
            }
            if(currentScale<=1){
            	cxt.lineWidth = 2;
            }
            cxt.translate(x + canvas.width*0.5, y + canvas.height*0.5);//平移，and 坐标中心点
        	cxt.scale(currentScale, currentScale);//缩放
        	cxt.rotate(totalAngle*Math.PI/180);//旋转
            for (var i = 0, ci; ci = mapChina.features[i]; i++) {
                if (ci.geometry == null) continue;
                if(ci.geometry == "Point"){
                	methods.drawPoint(cxt, ci.geometry.coordinates);
                }
                if(ci.geometry.type == "LineString"){
                	methods.drawLine(cxt, ci.geometry.coordinates);
                }
                if (ci.geometry.type == "Polygon") methods.drawLine(cxt, ci.geometry.coordinates[0]);
                if(ci.geometry.type == "MultiPolygon") {
                    for (var j = 0, item; item = ci.geometry.coordinates[j]; j++) {
                        methods.drawLine(cxt, item[0]);
                    }
                }
            }
            for (var i = 0, ci; ci = mapData.features[i]; i++) {
                if (ci.geometry == null) continue;
                if(ci.geometry == "Point"){
                	methods.drawPoint(cxt, ci.geometry.coordinates);
                }
                if(ci.geometry.type == "LineString"){
                	methods.drawLine(cxt, ci.geometry.coordinates);
                }
                if (ci.geometry.type == "Polygon") methods.drawLine(cxt, ci.geometry.coordinates[0]);
                if(ci.geometry.type == "MultiPolygon") {
                    for (var j = 0, item; item = ci.geometry.coordinates[j]; j++) {
                        methods.drawLine(cxt, item[0]);
                    }
                }
            }

            cxt.stroke();
            cxt.closePath();
            cxt.restore();
        },
        init: function () {
        	Util.ajax(opts.mapChina, function(dc){
        		mapChina = dc;
                Util.ajax(opts.data, function (d) {
                    mapData = d;
                    canvasObj = $("#" + opts.containerId);
                    canvas = canvasObj[0];
                    cxt = canvas.getContext('2d');
                    canvas.width = window.width()*2;
                    canvas.height = window.width()*2*0.75;
                    canvas.style.width = window.width();
                    canvas.style.height = window.width()*0.75;
                    ratioX = canvas.width/canvas.getBoundingClientRect().width;
                    ratioY = canvas.height/canvas.getBoundingClientRect().height;
                    
                    /* get the geography coordinates range:
                        maxLongitude, minLongitude, maxLatitude, minLatitude
                    */
                    methods.getGeoCoordsRange();
                    console.log(geoCoordsRange);
                    scaleX = ((geoCoordsRange.maxLon - geoCoordsRange.minLon) * 3600) / canvas.width;
                    scaleY = ((geoCoordsRange.maxLat - geoCoordsRange.minLat) * 3600) / canvas.height;
                    methods.render();
                    methods.scale();
                });
        	});
        },
        scale: function(){
        	touch.on('#canvas', "touchstart", function(ev){
				ev.preventDefault();
			});
        	/*缩放******************/
			touch.on('#canvas', 'pinch', function(ev){
				currentScale = ev.scale - 1;
				currentScale = initialScale + currentScale;
				currentScale = currentScale < 1 ? 1 : currentScale;
			});
			touch.on('#canvas', 'pinchend', function(ev){
				initialScale = currentScale;
			});
			/*旋转*******************/
			touch.on('#canvas', 'rotate', function(ev){
				totalAngle = angle + ev.rotation;
				if(ev.fingerStatus === 'end'){
					angle = angle + ev.rotation;
				}
			});
			/*拖拽*******************/
			touch.on('#canvas', 'drag', function(ev){
				
			    dx = dx || 0;
				dy = dy || 0;
			    
				x = dx + ev.x*ratioX;
				y = dy + ev.y*ratioY;
				console.log("x="+x + ", y="+y);
			});
			touch.on('#canvas', 'dragend', function(ev){
				dx += ev.x*ratioX;
			    dy += ev.y*ratioY;
			});
			
			touch.on('#canvas', 'touchmove', function(ev){
				requestAnimationFrame(function(){
					methods.render();
				});
			});
			/*鼠标滚动*****************/
			canvas.onmousewheel=canvas.onwheel=function(event){
			    var pos=windowToCanvas(canvas,event.clientX,event.clientY);
			    event.wheelDelta=event.wheelDelta?event.wheelDelta:(event.deltaY*(-40));
			    if(event.wheelDelta>0){
					currentScale = initialScale + 0.2;
					initialScale = currentScale;
			    }else{
			    	currentScale = initialScale - 0.2;
			    	currentScale = currentScale < 1 ? 1 : currentScale;
					initialScale = currentScale;
			    }
			    methods.render();
			}
		}
    };

    methods.init();
};
function windowToCanvas(canvas,x,y){
    var bbox = canvas.getBoundingClientRect();
    return {
        x:x - bbox.left - (bbox.width - canvas.width) / 2,
        y:y - bbox.top - (bbox.height - canvas.height) / 2
    };
}
Util.ready(function(){
	mapGenerator({
	    containerId: "canvas",
	    mapChina: "js/china_simplify.json",
	    data: 'js/highway1.geojson'
	});
});
