var map = L.map('map').setView([12.9725, 77.58443],4);
L.tileLayer('http://{s}.tile.cloudmade.com/157f9082094e402f89d242e9b9144483/997/256/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery Â©<a href="http://cloudmade.com">CloudMade</a>'
}).addTo(map);

latlng = {
		0:{'lat':28.099, 'lng':76.983,  //GKA
			 'stnName': 'Gurgaon ki Awaz',
			 'freq': '107.8 MHz',
			 'power': '10KW',
			 'distName': 'Gurgaon',
			 'owner':'TRF(The Restoring Force)',
			 'content':'folk music and other self generated content',
			 'licenseType': 'CR',
			 'licenseCost': '120000000 INR',
			 'licenseRange': '100 KM',
			 'effectiveRange': '15 KM'},
		1:{'lat':12.972, 'lng':77.584, //Bangalore
			'stnName': 'Radio Active',
			 'freq': '90.4 MHz',
			 'power': '10KW',
			 'distName': 'Bangalore Urban',
			 'owner':'Jain College',
			 'content':'educational broadcast',
			 'licenseType': 'CR',
			 'licenseCost': '120000000 INR',
			 'licenseRange': '100 KM',
			 'effectiveRange': '2 KM'},
		2:{'lat':24.691, 'lng':78.413,  //Lalitpur
			'stnName': 'Lalit lokavani',
			 'freq': '91.1 MHz',
			 'power': '10KW',
			 'distName': 'Lalitpur',
			 'owner':'Unknown',
			 'content':'content from EDAA(ek duniya anek awaz)',
			 'licenseType': 'CR',
			 'licenseCost': '120000000 INR',
			 'licenseRange': '100 KM',
			 'effectiveRange': '15 KM'},
		3:{'lat':24.999, 'lng':79.499, //Bundelkhand
			'stnName': 'Radio Bundelkhand',
			 'freq': '91.1 MHz',
			 'power': '10KW',
			 'distName': 'Bundelkhand',
			 'owner':'Unknown',
			 'content':'content is downloaded from internet',
			 'licenseType': 'CR',
			 'licenseCost': '120000000 INR',
			 'licenseRange': '100 KM',
			 'effectiveRange': '35 KM'}
};
M = {
		data:[]
};
for(var i in latlng)
{
		new L.circle([latlng[i]['lat'], latlng[i]['lng']],100000,{
				'color':'blue',
				'fillColor':'blue',
				'fillOpacity':0.5}).addTo(map);
		var c = new L.circle([latlng[i]['lat'],latlng[i]['lng']],latlng[i]['effectiveRange'].split(' ')[0]*1000,{  //The second argument is radius in meters.
				'color':'black',
				'fillColor':'black',
				'fillOpacity':0.7});
		c.addTo(map);
		c.bindPopup(latlng[i]['stnName']+' '+latlng[i]['freq']);
		c.addEventListener('mousemove',function(e){
				e.target.openPopup();
		});
}