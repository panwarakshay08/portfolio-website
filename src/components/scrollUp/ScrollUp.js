import React from 'react';
import './ScrollUp';

const ScrollUp = () => {
    window.addEventListener("scroll", function () {
        const scrollup = this.document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("show-scroll");
    });
    return (
        <a href="#scrollUp" className="scrollup">
            <i class="uil uil-arrow-circle-up scrollUp_icon"></i>
        </a>
    )
}

export default ScrollUp;