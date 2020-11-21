import React from "react";
import Hero from "./Hero";
import "../css/variables.css";
import "../css/products.css";
import cotone from "../cotone.jpg";
import coat from "../coat.webp";
import bubbles from "../bubbles.webp";
import sheet from "../sheet.webp";

function Products() {
    const products = "products";
    const title = "Products & Applications";
    const text = "Nanotechnology: small scale application for great impact on the product!";
    const img1 = {
        backgroundImage: "url("+ coat +")"
    };
    const img2 = {
        backgroundImage: "url("+ bubbles +")"
    };
    const img3 = {
        backgroundImage: "url("+ sheet +")"
    };
    return(
        <div>
            <Hero type={products} imgUrl={cotone} title={title} text={text} />
            <h2>Superhydrophobic Silicone Nano-Filaments (SNF)</h2>
            <div class="container info">
            <div class="row">
            <section style={img1} className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 products-box">
                <h3></h3>
                <div className="find_more_container">
                    <a className="find_more" href="">Find out more</a>
                </div>
            </section>
            <section style={img2} className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 products-box">
                <h3></h3>
                <div className="find_more_container">
                    <a className="find_more" href="">Find out more</a>
                </div>
            </section>
            <section style={img3} className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 products-box">
                <h3></h3>
                <div className="find_more_container">
                    <a className="find_more" href="">Find out more</a>
                </div>
            </section>
            </div>
            </div>
        </div>
    );
}

export default Products;