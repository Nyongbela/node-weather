
const request = require('request')
const geocode = (address, callback) => {
    const url  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ2xhcml1cyIsImEiOiJjazh6dDN4dTEwNnR4M2ZuNHB4OTYza2N5In0.Pl_5N4F-e6YFKQULRv2tRA&limit=1'
    request({url, json:true}, (error, {body}) =>{

        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if (body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                place: body.features[0].place_name

            })
        }
    })
}

module.exports = geocode