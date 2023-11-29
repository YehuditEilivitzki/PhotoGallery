const apiRequests = require('../requests')
const baseUrl = "https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&"

const photos = []; // array to save the data
module.exports = {
    // function to receive the initial images without a specific category
    getStartData: (req, res) => {
        apiRequests(`${baseUrl}`)//  call to the function that is responsible for calls to server
            .then((data) => {
                this.photos = JSON.parse(data).hits;
                const firstPhotos = this.photos.slice(0, 9); // retrieving 9 images for the first page
                return res.send(firstPhotos);
            })
            .catch((error) => {
                return res.status(404).send({ message: error.message })
            })
    },
    // function to receive photos by category
    getPhotoByCategory: (req, res) => {
        const category = req.params.categoryName;
        console.log(category);
        apiRequests(`${baseUrl}category=${category}`)
            .then((data) => {
                this.photos = JSON.parse(data).hits
                const firstPhotos = this.photos.slice(0, 9);
                return res.send(firstPhotos);

            })
            .catch((error) => {
                return res.status(404).send({ message: error.message })

            })
    },

    // pagination function according to the client requirements
    pagination: (req, res) => {
        const page = req.params.page;
        const pageSize = 9;
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const currentPhotos = this.photos.slice(startIndex, endIndex);
        return res.send(currentPhotos)

    },
    // function to get detailes of photo
    getPhotoById: (req, res) => {
        const photoId = req.params.photoId
        apiRequests(`${baseUrl}id=${photoId}`)
            .then((data) => {
                const photo = JSON.parse(data).hits[0]
                return res.send(photo)
            })
            .catch((error) => {
                return res.status(404).send({ message: `Id not found` })

            })
    },
    // sorting function by id
    sortPhotoById: (req, res) => {
        this.photos.sort((a, b) => a.id - b.id);
        const firstPhotos = this.photos.slice(0, 9);
        return res.send(firstPhotos);

    },
}