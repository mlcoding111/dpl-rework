// Function to import all images from a directory
function importAll(r) {
    return r.keys().map(r);
}

// We store every every img inside this array of object
const AllImages = importAll(require.context('../public/images/realisations/', false, /\.(png|jpe?g|svg)$/));

// This array will contain all images with the right properties
let Images = []

// For each images we push the src and height we want as an object into our Images array
{AllImages.map((index, i) => (
    Images.push({
        original: index.default.src,
        thumbnail: index.default.src
    })
))}


export default Images