import React from 'react';
import App from './components/App';
import { fetchData } from "./functions/fetchData"

class MainPage extends React.Component {
    constructor() {
        super()
        this.state = {
            page: 1,
            imagesColumn1: [],
            imagesColumn2: [],
            imagesColumn3: [],
            loading: true,
        };
    }

    fetchImages = async () => {
        const { imagesColumn1, imagesColumn2, imagesColumn3 } = await fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&media=photos&page=${this.state.page}&format=json&nojsoncallback=1`)
        this.setState({
            loading: false,
            imagesColumn1: [...this.state.imagesColumn1, ...imagesColumn1],
            imagesColumn2: [...this.state.imagesColumn2, ...imagesColumn2],
            imagesColumn3: [...this.state.imagesColumn3, ...imagesColumn3]
        });
    }

    componentDidMount() {
        this.fetchImages();
    }

    render() {
        return (
            <App imagesC1={this.state.imagesColumn1} imagesC2={this.state.imagesColumn2} imagesC3={this.state.imagesColumn3} loading={this.state.loading} />)
    }
}

export default MainPage