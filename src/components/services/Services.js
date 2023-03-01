import React, { useState } from 'react';
import "./Services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Website <br /> Developer </h3>
                    </div>

                    <span className="services__button" onClick={() => setIsModalOpen(true)}> View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    {
                        isModalOpen && <div className="services__model">
                            <div className={toggleState === 1 ? "services__model active-model" : "services__model"}>
                                <div className="services__model-content"> <i onClick={() => setIsModalOpen(false)} className="uil uil-times services__model-close"></i>

                                    <h3 className="services__model-title"> Develop <br /> APIs </h3>
                                    <p className="services__model-description">Services of Frontend & Backend development. Providing quality work to clients and Companies</p>

                                    <ul className="services__model-services grid">
                                        <li className="services__model-services"><i className="uil uil-check-circle services__model-icon"></i>
                                            <p className="services__model-info">I develop the user interface. </p>
                                        </li>

                                        <li className="services__model-services"><i className="uil uil-check-circle services__model-icon"></i>
                                            <p className="services__model-info">Web Page Development. </p>
                                        </li>

                                        <li className="services__model-services"><i className="uil uil-check-circle services__model-icon"></i>
                                            <p className="services__model-info">Design and mockups of Websites for companies. </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Develop <br /> APIs </h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">View More{" "} <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__model-close"></i>

                            <h3 className="services__model-title"> Develop <br /> APIs </h3>
                            <p className="services__model-description">Services of Frontend & Backend development. Providing quality work to clients and Companies</p>

                            <ul className="services__model-services grid">
                                <li className="services__model-services"><i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I develop the user interface. </p>
                                </li>

                                <li className="services__model-services"><i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Web Page Development. </p>
                                </li>

                                <li className="services__model-services"><i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Design and mockups of Websites for companies. </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Design <br /> Websites & Programs </h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button"> View More
                        <i onClick={() => toggleTab(0)} className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__model active-model" : "services__model"}>
                        <div className="services__model-content">
                            <i className="uil uil-times services__model-close"></i>

                            <h3 className="services__model-title">Design <br /> Websites & Programs</h3>
                            <p className="services__model-description">Services of Frontend & Backend development. Providing quality work to clients and Companies</p>

                            <ul className="services__model-services grid">
                                <li className="services__model-services">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">I develop the user interface. </p>
                                </li>

                                <li className="services__model-services">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Web Page Development. </p>
                                </li>

                                <li className="services__model-services">
                                    <i className="uil uil-check-circle services__model-icon"></i>
                                    <p className="services__model-info">Design and mockups of Websites for companies. </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Services;