import React from "react";

function Active() {
    document.querySelector('.link').classList.remove('link-active');
    var linkActive = document.getElementById('#linkUno').classList.add('link-active');
    return(
        linkActive
    );
}

export default Active;