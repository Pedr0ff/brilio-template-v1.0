import React from 'react';

const services = [
    {
        id: "01",
        title: "Branding",
        description: "Des identités web sur mesure : je crée des sites web et applications qui incarnent votre marque, en combinant stratégie digitale et code impeccable, pour atteindre et engager votre public cible."
    },
    {
        id: "02",
        title: "UI/UX",
        description: "Expériences utilisateur optimisées : je crée des interfaces web fluides et agréables, en combinant design soigné et fonctionnalités pensées pour l'utilisateur."
    },
    {
        id: "03",
        title: "Web/App Design",
        description: "Mon expertise : la transformation d'idées en applications intuitives et engageantes. Je m'engage à concevoir des interfaces où chaque interaction est optimisée et chaque élément visuel contribue à une expérience utilisateur exceptionnelle.."
    }
];

const Services = () => {
    return (
        <div className="row service-wrapper items mt-md-5">
            {services.map((service, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                    <div className="item d-flex align-items-start">
                        <div className="item-count">{service.id}</div>
                        <div className="content">
                            <h4 className="mt-0">{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
