var camera, scene, renderer, controls;
var geometry, material, mesh;
var target = new THREE.Vector3();
var lon = 90
  , lat = 0;
var phi = 0
  , theta = 0;
var touchX, touchY;
init();
animate();
for (var i = 0; i < 6; i++) {
    var style = $("#cj").find("img").eq(i).attr("style");
    $("#cj").find("img").eq(i).after("<div class='btn_box btn_" + i + "' style='width:1026px; height:1026px;" + style + "'></div>")
}
$("#cj").find(".btn_0").append('');
$("#cj").find(".btn_1").append('');
$("#cj").find(".btn_2").append('<div id="tipqipao4" class="tipqipao" onmousedown="eventDown(this)" ondblclick="dbeditwenzi(this);return false;" style="text-decoration: none; text-align: center; z-index: 1; font-size: 8px; width: 70px; border: 1px solid rgb(187, 187, 187); border-radius: 100px; position: absolute; top: 172px; left: 207px; color: rgb(150, 195, 70); opacity: 0.65; line-height: 1.2em; padding: 5px; box-shadow: rgb(221, 221, 221) 0px 0px 70px; background-image: url(http://www.jdou.org/quanjing/Uploads/2016-02-25/56ceef0d708a4.pngthumb.jpg); background-color: rgb(0, 0, 0); background-size: 100% 100%; background-position: 50% 50%; background-repeat: no-repeat;" alt="http://jdou.org"><div class="downRightBtn" onmousedown="onDownRightBtnDown(this)"></div><div class="addwenzi"><p><br></p></div><div id="btnEdittwo" onclick="editObj(this); return false;"><div class="editwrap"><div class="editmove"></div></div></div><div id="btnCopytwo" onclick="copyt(this)"><div class="copywrap"><div class="copymove"></div></div></div><div id="btnDelatetwo" onclick="delatet(this)"><div class="delatewrap"><div class="delatemove"></div></div></div></div><div id="tipqipao6" class="tipqipao" onmousedown="eventDown(this)" ondblclick="dbeditwenzi(this);return false;" style="text-decoration: none; text-align: center; z-index: 15; font-size: 8px; width: 70px; border: 1px solid rgb(187, 187, 187); border-radius: 100px; position: absolute; top: 220px; left: 209px; color: rgb(150, 195, 70); opacity: 0.7; line-height: 1.2em; padding: 5px; box-shadow: rgb(221, 221, 221) 0px 0px 54px; background-image: url(http://www.jdou.org/quanjing/Uploads/2016-02-25/56ceef0d708a4.pngthumb.jpg); background-color: rgb(0, 0, 0); background-size: 100% 100%; background-position: 50% 50%; background-repeat: no-repeat;" alt="http://jdou.org"><div class="downRightBtn" onmousedown="onDownRightBtnDown(this)"></div><div class="addwenzi"><p><br></p></div><div id="btnEdittwo" onclick="editObj(this); return false;"><div class="editwrap"><div class="editmove"></div></div></div><div id="btnCopytwo" onclick="copyt(this)"><div class="copywrap"><div class="copymove"></div></div></div><div id="btnDelatetwo" onclick="delatet(this)"><div class="delatewrap"><div class="delatemove"></div></div></div></div><div id="tipqipao7" class="tipqipao" onmousedown="eventDown(this)" ondblclick="dbeditwenzi(this);return false;" style="text-decoration: none; text-align: center; z-index: 155; font-size: 8px; width: 70px; border: 1px solid rgb(187, 187, 187); border-radius: 100px; position: absolute; top: 221px; left: 124px; color: rgb(150, 195, 70); opacity: 0.7; line-height: 1.2em; padding: 5px; box-shadow: rgb(221, 221, 221) 0px 0px 54px; background-image: url(http://www.jdou.org/quanjing/Uploads/2016-02-25/56ceef0d708a4.pngthumb.jpg); background-color: rgb(0, 0, 0); background-size: 100% 100%; background-position: 50% 50%; background-repeat: no-repeat;" alt="http://jdou.org"><div class="downRightBtn" onmousedown="onDownRightBtnDown(this)"></div><div class="addwenzi"><p><br></p></div><div id="btnEdittwo" onclick="editObj(this); return false;"><div class="editwrap"><div class="editmove"></div></div></div><div id="btnCopytwo" onclick="copyt(this)"><div class="copywrap"><div class="copymove"></div></div></div><div id="btnDelatetwo" onclick="delatet(this)"><div class="delatewrap"><div class="delatemove"></div></div></div></div><div id="tipqipao8" class="tipqipao" onmousedown="eventDown(this)" ondblclick="dbeditwenzi(this);return false;" style="text-decoration: none; text-align: center; z-index: 15; font-size: 8px; width: 70px; border: 1px solid rgb(187, 187, 187); border-radius: 100px; position: absolute; top: 288px; left: 294px; color: rgb(150, 195, 70); opacity: 0.7; line-height: 1.2em; padding: 5px; box-shadow: rgb(221, 221, 221) 0px 0px 54px; background-image: url(http://www.jdou.org/quanjing/Uploads/2016-02-25/56ceef0d708a4.pngthumb.jpg); background-color: rgb(0, 0, 0); background-size: 100% 100%; background-position: 50% 50%; background-repeat: no-repeat;" alt="http://jdou.org"><div class="downRightBtn" onmousedown="onDownRightBtnDown(this)"></div><div class="addwenzi"><p><br></p></div><div id="btnEdittwo" onclick="editObj(this); return false;"><div class="editwrap"><div class="editmove"></div></div></div><div id="btnCopytwo" onclick="copyt(this)"><div class="copywrap"><div class="copymove"></div></div></div><div id="btnDelatetwo" onclick="delatet(this)"><div class="delatewrap"><div class="delatemove"></div></div></div></div><div id="tipqipao9" class="tipqipao" onmousedown="eventDown(this)" ondblclick="dbeditwenzi(this);return false;" style="text-decoration: none; text-align: center; z-index: 15; font-size: 8px; width: 70px; border: 1px solid rgb(187, 187, 187); border-radius: 100px; position: absolute; top: 284px; left: 124px; color: rgb(150, 195, 70); opacity: 0.7; line-height: 1.2em; padding: 5px; box-shadow: rgb(221, 221, 221) 0px 0px 54px; background-image: url(http://www.jdou.org/quanjing/Uploads/2016-02-25/56ceef0d708a4.pngthumb.jpg); background-color: rgb(0, 0, 0); background-size: 100% 100%; background-position: 50% 50%; background-repeat: no-repeat;" alt="http://jdou.org"><div class="downRightBtn" onmousedown="onDownRightBtnDown(this)"></div><div class="addwenzi"><p><br></p></div><div id="btnEdittwo" onclick="editObj(this); return false;"><div class="editwrap"><div class="editmove"></div></div></div><div id="btnCopytwo" onclick="copyt(this)"><div class="copywrap"><div class="copymove"></div></div></div><div id="btnDelatetwo" onclick="delatet(this)"><div class="delatewrap"><div class="delatemove"></div></div></div></div><div id="tipqipao10" class="tipqipao" onmousedown="eventDown(this)" ondblclick="dbeditwenzi(this);return false;" style="text-decoration: none; text-align: center; z-index: 15; font-size: 8px; width: 70px; border: 1px solid rgb(187, 187, 187); border-radius: 100px; position: absolute; top: 222px; left: 292px; color: rgb(150, 195, 70); opacity: 0.7; line-height: 1.2em; padding: 5px; box-shadow: rgb(221, 221, 221) 0px 0px 54px; background-image: url(http://www.jdou.org/quanjing/Uploads/2016-02-25/56ceef0d708a4.pngthumb.jpg); background-color: rgb(0, 0, 0); background-size: 100% 100%; background-position: 50% 50%; background-repeat: no-repeat;" alt="http://jdou.org"><div class="downRightBtn" onmousedown="onDownRightBtnDown(this)"></div><div class="addwenzi"><p><br></p></div><div id="btnEdittwo" onclick="editObj(this); return false;"><div class="editwrap"><div class="editmove"></div></div></div><div id="btnCopytwo" onclick="copyt(this)"><div class="copywrap"><div class="copymove"></div></div></div><div id="btnDelatetwo" onclick="delatet(this)"><div class="delatewrap"><div class="delatemove"></div></div></div></div>');
$("#cj").find(".btn_3").append('');
$("#cj").find(".btn_4").append('');
$("#cj").find(".btn_5").append('<div id="tipqipao1" class="tipqipao" onmousedown="eventDown(this)" ondblclick="dbeditwenzi(this);return false;" style="text-decoration: none; text-align: center; z-index: 1; font-size: 8px; width: 60px; border: 1px solid rgb(187, 187, 187); border-radius: 5px; position: absolute; top: 163px; left: 268px; color: rgb(150, 195, 70); opacity: 0.7; line-height: 1.2em; padding: 5px; background-color: rgb(0, 0, 0); background-size: 100% 100%; background-position: 50% 50%; background-repeat: no-repeat;" alt="http://item.jd.com/1774359568.html"><div class="downRightBtn" onmousedown="onDownRightBtnDown(this)"></div><div class="addwenzi"><p>石榴树</p></div><div id="btnEdittwo" onclick="editObj(this); return false;"><div class="editwrap"><div class="editmove"></div></div></div><div id="btnCopytwo" onclick="copyt(this)"><div class="copywrap"><div class="copymove"></div></div></div><div id="btnDelatetwo" onclick="delatet(this)"><div class="delatewrap"><div class="delatemove"></div></div></div></div><div id="tipqipao2" class="tipqipao" onmousedown="eventDown(this)" ondblclick="dbeditwenzi(this);return false;" style="text-decoration: none; text-align: center; z-index: 1; font-size: 8px; width: 60px; border: 1px solid rgb(187, 187, 187); border-radius: 5px; position: absolute; top: 55px; left: 198px; color: rgb(254, 3, 3); opacity: 0.7; line-height: 1.2em; padding: 5px; background-color: rgb(0, 0, 0); background-size: 100% 100%; background-position: 50% 50%; background-repeat: no-repeat;" alt="http://item.jd.com/1336749.html"><div class="downRightBtn" onmousedown="onDownRightBtnDown(this)"></div><div class="addwenzi"><p>枣树</p></div><div id="btnEdittwo" onclick="editObj(this); return false;"><div class="editwrap"><div class="editmove"></div></div></div><div id="btnCopytwo" onclick="copyt(this)"><div class="copywrap"><div class="copymove"></div></div></div><div id="btnDelatetwo" onclick="delatet(this)"><div class="delatewrap"><div class="delatemove"></div></div></div></div><div id="tipqipao3" class="tipqipao selected" onmousedown="eventDown(this)" ondblclick="dbeditwenzi(this);return false;" style="text-decoration: none; text-align: center; z-index: 1; font-size: 8px; width: 60px; border: 1px solid rgb(187, 187, 187); border-radius: 5px; position: absolute; top: 145px; left: 390px; color: rgb(251, 254, 3); opacity: 0.7; line-height: 1.2em; padding: 5px; background-color: rgb(0, 0, 0); background-size: 100% 100%; background-position: 50% 50%; background-repeat: no-repeat;" alt="http://item.jd.com/1364490783.html"><div class="downRightBtn" onmousedown="onDownRightBtnDown(this)"></div><div class="addwenzi"><p>柿子树</p></div><div id="btnEdittwo" onclick="editObj(this); return false;"><div class="editwrap"><div class="editmove"></div></div></div><div id="btnCopytwo" onclick="copyt(this)"><div class="copywrap"><div class="copymove"></div></div></div><div id="btnDelatetwo" onclick="delatet(this)"><div class="delatewrap"><div class="delatemove"></div></div></div></div>');
function init() {
    camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,1,1000);
    scene = new THREE.Scene();
    var f = [{
        url: "http://www.jdou.org/quanjing/Uploads/2016-02-25/56cee94bbc644.jpgthumb.jpg",
        position: [-512, 0, 0],
        rotation: [0, Math.PI / 2, 0]
    }, {
        url: "http://www.jdou.org/quanjing/Uploads/2016-02-25/56cee95c04f47.jpgthumb.jpg",
        position: [512, 0, 0],
        rotation: [0, -Math.PI / 2, 0]
    }, {
        url: "http://www.jdou.org/quanjing/Uploads/2016-02-25/56cee9e4d70d8.jpgthumb.jpg",
        position: [0, 512, 0],
        rotation: [Math.PI / 2, 0, Math.PI]
    }, {
        url: "http://www.jdou.org/quanjing/Uploads/2016-02-25/56ceec8fab9f2.jpgthumb.jpg",
        position: [0, -512, 0],
        rotation: [-Math.PI / 2, 0, Math.PI]
    }, {
        url: "http://www.jdou.org/quanjing/Uploads/2016-02-25/56cee967ab2f9.jpgthumb.jpg",
        position: [0, 0, 512],
        rotation: [0, Math.PI, 0]
    }, {
        url: "http://www.jdou.org/quanjing/Uploads/2016-02-25/56cee93b27356.jpgthumb.jpg",
        position: [0, 0, -512],
        rotation: [0, 0, 0]
    }];
    var a = new THREE.Object3D();
    for (var e = 0; e < f.length; e++) {
        var d = f[e];
        var c = document.createElement("img");
        c.width = 1026;
        c.src = d.url;
        var b = new THREE.CSS3DObject(c);
        b.position.fromArray(d.position);
        b.rotation.fromArray(d.rotation);
        a.add(b)
    }
    scene.add(a);
    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("cj").appendChild(renderer.domElement);
    controls = new DeviceOrientationController(camera,renderer.domElement);
    controls.connect()
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
}
function onDocumentMouseDown(a) {
    a.preventDefault();
    document.addEventListener("mousemove", onDocumentMouseMove, false);
    document.addEventListener("mouseup", onDocumentMouseUp, false)
}
function onDocumentMouseMove(b) {
    var c = b.movementX || b.mozMovementX || b.webkitMovementX || 0;
    var a = b.movementY || b.mozMovementY || b.webkitMovementY || 0;
    lon -= c * 0.1;
    lat += a * 0.1
}
function onDocumentMouseUp(a) {
    document.removeEventListener("mousemove", onDocumentMouseMove);
    document.removeEventListener("mouseup", onDocumentMouseUp)
}
function onDocumentMouseWheel(a) {
    camera.fov -= a.wheelDeltaY * 0.05;
    camera.updateProjectionMatrix()
}
function onDocumentTouchStart(a) {
    a.preventDefault();
    var b = a.touches[0];
    touchX = b.screenX;
    touchY = b.screenY
}
function onDocumentTouchMove(a) {
    a.preventDefault();
    var b = a.touches[0];
    lon -= (b.screenX - touchX) * 0.1;
    lat += (b.screenY - touchY) * 0.1;
    touchX = b.screenX;
    touchY = b.screenY
}
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera)
}
window.onload = function() {

};
