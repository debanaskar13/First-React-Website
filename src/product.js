import React, { Component } from 'react'

class Product extends Component {
    state = {};

    render() {
        return (
            <div className="card float-left mr-3 mt-3">
                <img className="card-img-top p-1" src={this.props.src} alt={this.props.name} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">Rs {this.props.price}</p>

                </div>
            </div>
        );
    }
};

export default Product;