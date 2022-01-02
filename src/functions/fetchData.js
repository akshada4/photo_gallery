
function chunk(array, n) {
    let [...arr] = array;
    var res = [];
    while (arr.length) {
        res.push(arr.splice(0, n));
    }
    return res
}

export const fetchData = async (url) => {
    const perPage = 15
    const totalColumns = 3
    const imagesPerColumn = perPage / totalColumns

    const data = await fetch(`${url}${perPage}`)
        .then(res => res.json())
        .then(data => data.photos.photo)

    const images = data.map(({ farm, server, id, secret }) => ({ src: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`, id: id }));
    const chunksOfImage = chunk(images, imagesPerColumn)

    return {
        imagesColumn1: chunksOfImage[0],
        imagesColumn2: chunksOfImage[1],
        imagesColumn3: chunksOfImage[2]
        
    }
}