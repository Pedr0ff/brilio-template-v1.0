import React from 'react';
import MagneticButton from '../Miscellaneous/MagneticButton';

const Hero = ({ 
    introText = "Bonjour, je suis Stel'R.",
    title = "Créer des expériences marquantes ",
    highlightedText = "qui font la différence",
    buttonText = "Parlons-en !",
    description = "Je conçois des expériences numériques percutantes à partir d'idées, offrant des solutions innovantes pour valoriser les marques et captiver un public international.",
    bgImage1 = "/img/hero-bg-1.svg",
    bgImage2 = "/img/hero-bg-2.svg"
}) => {
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Hero Content */}
                        <div className="hero-content">
                            <span className="intro-text">{introText}</span>
                            <h1 className="title section-title mt-3 mt-md-4 mb-md-5">
                                {title} <span>{highlightedText}</span>
                            </h1>

                            {/* Content */}
                            <div className="content d-flex flex-column flex-md-row justify-content-md-between">
                                <div className="hero-button order-last order-md-first mt-4 mt-md-0">
									<MagneticButton 
										href="/contact"
										>
										{buttonText}
									</MagneticButton>
                                </div>
                                <p className="sub-title order-first order-md-last">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-bg">
                <img className="circle-1" src={bgImage1} alt="Background 1" />
                <img className="circle-2" src={bgImage2} alt="Background 2" />
            </div>
        </section>
    );
};

export default Hero;
