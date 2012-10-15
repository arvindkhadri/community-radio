var map = L.map('map').setView([12.9725, 77.58443],4);
L.tileLayer('http://{s}.tile.cloudmade.com/157f9082094e402f89d242e9b9144483/997/256/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â©<a href="http://cloudmade.com">CloudMade</a>'
}).addTo(map);
// $.getJSON("buildings.json",function(d){
// 		L.geoJson(d).addTo(map);
// });
latlng = {
		0:{'lat':28.099, 'lng':76.983},
		1:{'lat':12.972, 'lng':77.584},
		2:{'lat':24.691, 'lng':78.413},
		3:{'lat':24.999, 'lng':79.499}
};
for(var i in latlng)
{
		L.circle([latlng[i]['lat'],latlng[i]['lng']],100,{  //The second argument is radius in meters.
				'color':'blue',
				'fillColor':'blue',
				'fillOpacity':1}).addTo(map);
		L.circle([latlng[i]['lat'], latlng[i]['lng']],100000,{
				'color':'black',
				'fillColor':'#000000',
				'fillOpacity':0.5}).addTo(map);
}