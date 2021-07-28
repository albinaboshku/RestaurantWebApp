import React, { Component } from 'react';
import './section.css';
import Brand from '../../miscelleous/brand/brand';
import Stacked from '../stacked-photos/stacked';
import Map from '../../miscelleous/Map';
import Footer from '../../navigation/footer/footer';

let back = <Brand />;
class section1 extends Component {
    state = {
        cls1: "circle",
        cls2: "circle",
        cls3: "circle",
        brand: false
    }
    componentDidMount() {
        setTimeout(() => this.clickBtn(1), 3000);

    }
    clickBtn(valv) {
        if (valv === 1) {
            back = <Brand show />;

            this.setState({ cls2: "circle" });
            this.setState({ cls3: "circle" });
            this.setState({ cls1: "full" });
        }
        else if (valv === 2) {

            this.setState({ cls3: "circle" });
            this.setState({ cls1: "circle" });
            this.setState({ cls2: "full" });
        }
        else if (valv === 3) {
            this.setState({ cls1: "circle" });
            this.setState({ cls2: "circle" });
            this.setState({ cls3: "full" });
        }
    }
    render() {
        return (
            <div style={{ overflowY: "hidden" }}>
                <section className="Header">
                    {this.props.children}
                    {back}
                    
                    
                    
                </section>
               
                <section className="sec-stacked">
                    <Stacked />
                </section>
                <section className="sec-map">
                    <Map />
                </section>
                <Footer />
                {/* <section>
        <div style={{width:" 100%"}}>
        <iframe src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Malet%20St%2C%20London%20WC1E%207HU%2C%20United%20Kingdom+(Your%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{height:"50vh",width:"100vw"}}><a href="https://www.mapsdirections.info/en/custom-google-maps/">Create a custom Google Map</a> by <a href="https://www.mapsdirections.info/en/">Measure area on map</a></iframe></div><br />
        </section> */}
            </div>
        );
    }

}
export default section1;