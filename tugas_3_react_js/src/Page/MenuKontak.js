import React, { Component } from "react";

class MenuKontak extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alamat: "Jl. Swadya IV, PD Ranggon Cipayun, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13860",
            kontak: "081234567889"
        }
    }
    render() {
        return(
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h4>Kontak Kami : {this.state.kontak}</h4>
                </center>
            </div>
        )
    }
}

export default MenuKontak;