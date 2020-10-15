import React, { Component } from 'react'

class FilterHeading extends Component {

    render() {
        if (this.props.active === 'true') {
            return (
                <a className='m-3 pb-2 active-class' href={this.props.href}>{this.props.name}</a>
            )
        } else {
            return (
                <a className='filter-heading pb-2 m-3' href={this.props.href}>{this.props.name}</a>
            )
        }
    }
};

export default FilterHeading;