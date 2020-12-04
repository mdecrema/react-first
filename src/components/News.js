import React from "react";
import Articles from "./Articles";

function News() {
    var articles = [
        {
            title: "a1",
            description: "a2",
        }, 
        {
            title: "b1",
            description: "b2",
        },
        {
            title: "c1",
            description: "c2",
        },
        {
            title: "d1",
            description: "d2",
        },
        {
            title: "e1",
            description: "e2",
        },
        {
            title: "f1",
            description: "f2",
        },
        {
            title: "g1",
            description: "g2",
        },
    ];
    return(
        <div>
        {   articles.map((article) => (
            <Articles title={article.title} description={article.description} />
        ))}
        </div>
    );
}

export default News;