import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  // Chargement des données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/themeland/brilio-json-1/skills'); // Remettez l'URL correcte si besoin
        setSkillsData(response.data);
      } catch (error) {
        setError(error);
        console.error("Erreur lors du chargement des compétences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Intersection Observer
  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              if (entries[0].isIntersecting) {
                  setIsVisible(true);
                  observer.disconnect(); // On arrête d'observer une fois que c'est visible
              }
          },
          { threshold: 0.3 } // Ajustez le seuil si nécessaire
      );

      if (skillsRef.current) {
          observer.observe(skillsRef.current);
      }

      return () => {
          observer.disconnect(); // Nettoyage au démontage
      };
  }, []); // [] comme dépendances = exécution une seule fois au montage


  if (loading) {
    return <div>Chargement des compétences...</div>;
  }

  if (error) {
    return <div>Erreur lors du chargement des compétences : {error.message}</div>;
  }

  if (!skillsData) {
    return <div>Aucune donnée de compétences trouvée.</div>;
  }

  return (
    <section className="skills section-padding" ref={skillsRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="intro">
              {/* Affichage direct du titre et sous-titre */}
              <span>{skillsData.sub_title}</span>
              <h2>{skillsData.title}</h2>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row items">
              {skillsData.items.map((item) => (
                <div key={item.id} className="col-12 col-md-6 item">
                  <div className="content">
                    <div className="heading d-flex align-items-center">
                      <i className={`icon ${item.icon}`}></i>
                      <h2 className="title m-0 ms-2">{item.value}</h2>
                    </div>
                    <span>{item.label}</span>
                    <p className="mt-3">{item.description}</p>
                  </div>
                </div>
              ))}

              {skillsData.skillsProgress.map((skill) => ( // Enlevez index
                <div key={skill.title} className="col-12 col-md-6 item align-self-center">  {/* Utilisez skill.title comme clé */}
                  <div className="content mt-5 mt-md-0">
                    <div className="progress">
                      <span className="title">{skill.title}</span>
                      <div
                        className={`progress-bar ${isVisible ? 'animate' : ''}`}
                        style={{
                          width: isVisible ? `${skill.progress}%` : '0%',
                          opacity: isVisible ? 1 : 0,
                        }}
                      >
                        <span>{skill.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;