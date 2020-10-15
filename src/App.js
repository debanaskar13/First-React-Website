import React, { Component } from 'react';
import Navbar from './navabr';
import Search from './searchbtn';
import Tags from './tags';
import FilterHeading from './filter_heading';
import Product from './product';

class App extends Component {
    state = {
        Redmi8: { name: 'Redmi 8', src: 'https://cdn.vox-cdn.com/thumbor/E8c5U6A_RrsyiwRANmcCLNE2dzc=/0x0:2040x1360/1400x933/filters:focal(860x560:1186x886):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/55855309/akrales_190913_3628_0277.19.jpg', price: 9999 },
        Redmi9A: { name: 'Redmi 9 A', src: '', price: 10999 }
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-3 mt-5 border-right">
                            <Search />
                            <h5 className="mt-5">
                                <label>Select Tags</label>
                            </h5>
                            <Tags tag='Redmi' />
                            <Tags tag='Apple' />
                            <Tags tag='Realme' />
                            <Tags tag='Samsung' />
                            <Tags tag='Oppo' />
                            <Tags tag='Oneplus' />
                            <h5 className="mt-5">
                                <label>Select Range</label>
                            </h5>
                            <input className='form-control' type="range" />
                        </div>
                        <div className="col-md-9 mt-5">
                            <div className='pb-2 border-bottom'>
                                <div id='sortBy'>Sort By</div>
                                <FilterHeading active='true' name='Popularity' href='#' />
                                <FilterHeading active='false' name='Price-High to Low' href='#' />
                                <FilterHeading active='false' name='Price-Low to High' href='#' />
                                <FilterHeading active='false' name='Newest First' href='#' />
                            </div>
                            <div>
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                                <Product name={this.state.Redmi8.name} src={this.state.Redmi8.src} price={this.state.Redmi8.price} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
