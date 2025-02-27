import React, { useEffect, useState } from 'react'; // Importez useState
import axios from 'axios';

const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState(null);
  const [loading, setLoading] = useState(true); // Ajoutez un état de chargement
  const [error, setError] = useState(null);   // Ajoutez un état d'erreur

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/themeland/brilio-json-1/skills'); // Remettez l'URL correcte si besoin
        setSkillsData(response.data);
      } catch (error) {
        setError(error);
        console.error("Erreur lors du chargement des compétences:", error);
      } finally {
        setLoading(false); // Mettez loading à false, que la requête réussisse ou échoue
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (skillsData) { // IMPORTANT : Exécutez le code d'animation *seulement* si skillsData est chargé
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar'); // Ciblez les barres DANS l'élément observé
            progressBars.forEach((progressBar) => {
              const value = progressBar.getAttribute('data-progress');
              progressBar.style.opacity = 1;
              progressBar.style.width = `${value}%`;
            });
          }
        });
      }, { threshold: 0.3 });

        const section = document.querySelector('.skills'); // selection de la section
      if(section) {
        observer.observe(section); // l'observe
      }


      return () => {
        if (section) { // Nettoyage
          observer.unobserve(section);
        }
      };
    }
  }, [skillsData]); // Exécutez cet effet *seulement* lorsque skillsData change


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
        <section className="skills section-padding">
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
                                            className="progress-bar"
                                            data-progress={skill.progress} // Assurez vous que la valeur est un nombre
                                            style={{ opacity: 0, width: '0%' }} // Style initial
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