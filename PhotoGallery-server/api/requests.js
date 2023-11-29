const request = require('request')
//  function that is responsible for the calls to the server
module.exports = apiRequests = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (err, res, data) => {
            if (data) {
                resolve(data)
            }
            if (err) {
                reject(err)
            }
        })
    })
}