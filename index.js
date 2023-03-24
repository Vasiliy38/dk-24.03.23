// ymaps.ready(function () {
//
//     fetch('red.json')
//         .then(arr => arr.json())
//         .then(arr => {
//             let x = {
//                 "type": "FeatureCollection",
//                 "features": []
//             }
//             arr.forEach(obj => {
//                 if (obj.address) {
//
//                             var myGeocoder = ymaps.geocode(obj.address);
//                             myGeocoder
//                                 .then(res => {
//                                     x.features.push(
//                                         {
//                                             "type": "Feature",
//                                             "id": Date.now(),
//                                             "geometry": {
//                                                 "type": "Point",
//                                                 "coordinates": res.geoObjects.properties._data.metaDataProperty.GeocoderResponseMetaData.Point.coordinates.reverse()
//                                             },
//                                             "properties": {
//                                                 "clusterCaption": `<span style=\"font-size: 18px; color: red;\">${obj.quantity} - </span><span style=\"font-size: 14px;\">${obj.full_name}</span><span style=\"font-size: 18px; color: green;\"> - ${obj.oto_number}</span><br><span style=\"font-size: 14px;\">${obj.address}</span>`,
//                                                 "balloonContentBody": "",
//                                                 "balloonContentHeader": `<span style=\"font-size: 18px; color: red;\">${obj.quantity} - </span><span style=\"font-size: 14px;\">${obj.full_name}</span><span style=\"font-size: 18px; color: green;\"> - ${obj.oto_number}</span><br><span style=\"font-size: 14px;\">${obj.address}</span>`,
//                                                 "hintContent": `<span style=\"font-size: 18px; color: red;\">${obj.quantity} - </span><span style=\"font-size: 14px;\">${obj.full_name}</span><span style=\"font-size: 18px; color: green;\"> - ${obj.oto_number}</span>`
//                                             },
//                                             "options": {
//                                                 "preset": "islands#redIcon"
//                                             }
//                                         }
//                                     )
//                                 })
//                 }
//             })
//             return x
//         })
//         .then(arr => console.log(arr))
//
// })
const obj = ''

fetch('features.json')
    .then(obj => obj.json())
    .then(obj => {


ymaps.ready(init)

function init() {

    const searchControls = new ymaps.control.SearchControl({
        options: {
            float: 'right',
            noPlacemark: true
        }
    })

    const myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7,
        controls: [searchControls]
    })

    const removeControls = [
        'geolocationControl',
        'trafficControl',
        'fullscreenControl',
        'zoomControl', 'rulerControl',
        'typeSelector'
    ]

    const clearTheMap = myMap => {
        removeControls
            .forEach(controls => myMap.controls.remove(controls))
    }

    clearTheMap(myMap)

    const objectManager = new ymaps.ObjectManager({
        clusterize: true,
        clusterIconLayout: "default#pieChart"
    })


    objectManager.add(obj)
    myMap.geoObjects.add(objectManager)
}
    })
