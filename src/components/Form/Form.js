import React, { useState } from 'react';
import MagneticButton from '../Miscellaneous/MagneticButton';

const Form = () => {
  const contactInfo = {
    title: 'Planifiez un appel avec moi',
    description: 'Que vous souhaitiez démarrer un nouveau projet ou simplement en discuter, contactez-moi !',
    phone: '0781598215',
    email: 'stelrprod@gmail.com',
    address: 'Paris',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    interest: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contact-area primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4 order-last order-md-first">
            <div className="contact-info">
              <h3>{contactInfo.title}</h3>
              <p>{contactInfo.description}</p>

              <div className="content contact-form">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="icon icon-phone"></i>
                    <a className="content" href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-envelope-open"></i>
                    <a className="content" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-location-pin"></i>
                    <a className="content" href="/#">{contactInfo.address}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 order-first order-md-last mt-sm-4 mt-lg-0">
            <form id="contact-form" className="contact-form">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="name">Nom</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Adresse mail</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <label htmlFor="phone">Téléphone</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                />
                <label htmlFor="companyName">Votre entreprise</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="url"
                  className="form-control"
                  id="website"
                  placeholder="Company Website"
                  value={formData.website}
                  onChange={handleInputChange}
                />
                <label htmlFor="website">Le site web de votre entreprise</label>
              </div>
              <div className="form-group mb-3">
                <div className="form-label">Je suis intéréssé pour:</div>
                <div className="form-input-group">
                  {['Branding', 'Web Design', 'App Design', 'Autre'].map((option) => (
                    <div className="form-input" key={option}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="interest"
                        id={`option-${option.toLowerCase()}`}
                        value={option}
                        onChange={handleInputChange}
                      />
                      <label className="btn magnetic-button btn-outline" htmlFor={`option-${option.toLowerCase()}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="form-label">Mon budget:</div>
                <div className="form-input-group">
                  {['< 2k', '2-5k', '5-10k', '10-15k', '> 20k'].map((budget) => (
                    <div className="form-input" key={budget}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="budget"
                        id={`budget-${budget.replace(' ', '-')}`}
                        value={budget}
                        onChange={handleInputChange}
                      />
                      <label className="btn magnetic-button btn-outline" htmlFor={`budget-${budget.replace(' ', '-')}`}>
                        {budget}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exact-budget"
                  placeholder="Exact Budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                />
                <label htmlFor="exact-budget">Avez-vous un budget précis?</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="timeline"
                  placeholder="Timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                />
                <label htmlFor="timeline">Quels sont vos délais?</label>
              </div>
              <div className="form-floating mb-4">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <label htmlFor="message">Message</label>
              </div>
				<MagneticButton 
					href="/#"
					>
					Envoyer
				</MagneticButton>
            </form>
            <p className="form-message"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
