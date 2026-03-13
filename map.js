const mapContainer=document.getElementById("map")

const map=new kakao.maps.Map(mapContainer,{
center:new kakao.maps.LatLng(33.3617,126.5292),
level:9
})

places.forEach(place=>{

const marker=new kakao.maps.Marker({

position:new kakao.maps.LatLng(place.lat,place.lng)

})

marker.setMap(map)

})