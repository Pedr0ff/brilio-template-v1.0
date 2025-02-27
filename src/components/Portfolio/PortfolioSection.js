import React from "react";
import PortfolioOne from "./PortfolioOne";

const PortfolioSection = ({ title = "Mes réalisations", viewAllLink = "/portfolio" }) => {
  return (
    <section className="works position-relative p-0">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Intro */}
            <div className="intro d-flex justify-content-between align-items-center">
              <h3 className="title">{title}</h3>
              <a className="btn btn-outline content-btn swap-icon" href={viewAllLink}>
                Tout voir <i className="icon bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
        {/* PortfolioOne Component */}
        <PortfolioOne />
      </div>
    </section>
  );
};

export default PortfolioSection;
