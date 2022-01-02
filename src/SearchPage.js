import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { fetchData } from './functions/fetchData'
import App from './components/App'

const SearchPage = () => {
    const { state } = useLocation()
    const [images, setImages] = useState({
        imagesColumn1: null,
        imagesColumn2: null,
        imagesColumn3: null,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            const { imagesColumn1, imagesColumn2, imagesColumn3 } = await fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=${state}&media=photos&format=json&nojsoncallback=1`)

            setImages({
                imagesColumn1: imagesColumn1,
                imagesColumn2: imagesColumn2,
                imagesColumn3: imagesColumn3,
            });
            setLoading(false);
        }
        fetchImages();
    }
    , [state])

    return (<App imagesC1={images.imagesColumn1} imagesC2={images.imagesColumn2} imagesC3={images.imagesColumn3} loading={loading} />)
}

export default SearchPage