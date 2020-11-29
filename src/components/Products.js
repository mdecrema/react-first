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
    window.onload = window.scrollTo(0, 0);
    return(
        <div>
            <Hero type={products} imgUrl={cotone} title={title} text={text} />
            <div className="page_wrapper container">
            <h2 class="title">Superhydrophobic Silicone Nano-Filaments (SNF)</h2>
            <div class="container info">
            <div class="row">
            <section className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 products-box">
                <img src={coat} alt="" />
                <h3>Thermo Insulation Products</h3>
                <p>
                Thermal Insulation products from natural resources, like wood, cellulose, 
                cotton, feathers and downs treated with Silany technology deliver high performance, 
                are insensitive against humidity and flame retardant. 100% sustainability included. 
                </p>
                <div className="find_more_container">
                    <a className="find_more" href="">Find out more</a>
                </div>
            </section>
            <section className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 products-box">
                <img src={bubbles} alt="" />
                <h3>Coating Dispersions</h3>
                <p>
                Our coating dispersions deliver highly durable properties. From superhydrophobic 
                to superwetting, from superoilrepellent to self-cleaning, from UV protection 
                to IR reflectivity. Easy applicable by spray-coating, dip-coating, and more.
                </p>
                <div className="find_more_container">
                    <a className="find_more" href="">Find out more</a>
                </div>
            </section>
            <section className="col-lg-3 offset-lg-1 col-md-4 col-sm-6 products-box">
                <img src={sheet} alt="" />
                <h3>Filter and Separation Media</h3>
                <p>
                Filter and separation media with nanotechnology structures deliver extra-performance. 
                Oil-water separation with highest efficiency is just one example. 
                Based on granular material, textile filters or non-woven.
                </p>
                <div className="find_more_container">
                    <a className="find_more" href="">Find out more</a>
                </div>
            </section>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Products;