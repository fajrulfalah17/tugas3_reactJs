import React, { Component } from "react";

class ListMakanan extends Component {
    constructor(props){
        super(props);
            this.state = {
                dataList: this.props.image
            }
    }
    render() {
        return(
            <div>
                <img src={this.state.dataList} alt="Produk Makanan" width="150"/>
            </div>
        )
    }
}

export default ListMakanan;