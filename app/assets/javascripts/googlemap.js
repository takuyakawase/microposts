var map;
var markers = [];
function initMap() {
    alert("test");
          var mapDiv = document.getElementById('map');
          var map = new google.maps.Map(mapDiv, {
              center: {lat: 35.7100627, lng: 139.8107004},
              zoom: 8
          });
          marker = new google.maps.Marker({
            position: {lat: 35.7100627, lng: 139.8107004}, // マーカーの位置を指定
            map: map // マーカーを配置する地図を指定
          });
          
          // マップをクリックでその場にマーカー追加
    map.addListener('click', function(e) {
        addMarker(e.latLng); // マーカーの追加
    });
 
    // マーカーを地図上から非表示にする
    var markerHide = document.getElementById('marker-hide');
    markerHide.addEventListener('click', function() {
        clearMarkers();
    });
 
    // マーカーを地図上に表示
    var markerShow = document.getElementById('marker-show');
    markerShow.addEventListener('click', function() {
        showMarkers();
    });
 
    // マーカーの削除
    var markerDel = document.getElementById('marker-del');
    markerDel.addEventListener('click', function() {
        deleteMarkers();
    });
}
 
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location, // マーカーの位置を指定
        map: map // マーカーを配置する地図を指定
    });
    markers.push(marker);
}
 
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
 
function clearMarkers() {
    setMapOnAll(null); // マーカーを地図上から非表示
}
 
function showMarkers() {
    setMapOnAll(map); // マーカーを地図上に表示
}
 
function deleteMarkers() {
    clearMarkers(); // マーカーの削除
    markers = [];
}
          
          
          directionsDisplay.setMap(map);
            directionsService.route({
            origin : "新宿駅",
            destination: "塩尻駅",
            travelMode: google.maps.DirectionsTravelMode.DRIVING
            },function(response, status){
            if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            }else{
            alert("ルート検索に失敗しました");
            }
            });

var directions;

function initialize() {
  if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map_canvas"));
    map.setCenter(new GLatLng(35.16809,136.911621), 13);

    directions = new GDirections(map, document.getElementById("route"));
    GEvent.addListener(directions, "load", onGDirectionsLoad);
  }
}

function dispRoute() {
  var from = document.getElementById("from").value;
  var step = document.getElementById("step").value;
  var to = document.getElementById("to").value;

  directions.clear();

  var pointArray = [from,step,to];
  directions.loadFromWaypoints(pointArray, {locale: "ja_JP"});
}

function onGDirectionsLoad(){ 
  var od = directions.getDistance();
  var ot = directions.getDuration();

  document.getElementById("iddistance").innerHTML = od.meters + "m, " + od.html;
  document.getElementById("idtime").innerHTML = ot.seconds + "秒, " + ot.html;
}