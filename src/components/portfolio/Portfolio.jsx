import ecommerce from '../../assets/Site E-commerce/1.PNG'
import ecommerce2 from '../../assets/Site E-commerce/2.PNG'
import ecommerce3 from '../../assets/Site E-commerce/3.PNG'
import ecommerce4 from '../../assets/Site E-commerce/4.PNG'
import ecommerce5 from '../../assets/Site E-commerce/5.PNG'
import ecommerce6 from '../../assets/Site E-commerce/6.PNG'
import ecommerce7 from '../../assets/Site E-commerce/7.PNG'
import ecommerce8 from '../../assets/Site E-commerce/8.PNG'


import Site1DepInfo from '../../assets/SiteDepInfo/1dep.PNG'
import Site2DepInfo from '../../assets/SiteDepInfo/2dep.PNG'
import Site3DepInfo from '../../assets/SiteDepInfo/3dep.PNG'
import SiteDepInfo from '../../assets/SiteDepInfo/dep.PNG'
import SiteDepInfo1 from '../../assets/SiteDepInfo/dep1.PNG'
import SiteDepInfo2 from '../../assets/SiteDepInfo/dep2.PNG'
import SiteDepInfo3 from '../../assets/SiteDepInfo/dep3.PNG'
import SiteDepInfo4 from '../../assets/SiteDepInfo/dep4.PNG'
import SiteDepInfo5 from '../../assets/SiteDepInfo/dep5.PNG'
import SiteDepInfo6 from '../../assets/SiteDepInfo/dep6.PNG'
import SiteDepInfo7 from '../../assets/SiteDepInfo/dep7.PNG'
import SiteDepInfo8 from '../../assets/SiteDepInfo/dep8.PNG'
import SiteDepInfo9 from '../../assets/SiteDepInfo/dep9.PNG'

import FakeNews1 from '../../assets/FakeNewsDetectionImage/1.PNG'
import FakeNews2 from '../../assets/FakeNewsDetectionImage/2.PNG'
import FakeNews3 from '../../assets/FakeNewsDetectionImage/3.PNG'
import FakeNews4 from '../../assets/FakeNewsDetectionImage/4.PNG'

import MemoryGame from '../../assets/Memory-game/1.PNG'
import MemoryGame2 from '../../assets/Memory-game/2.PNG'
import MemoryGame3 from '../../assets/Memory-game/3.PNG'
import MemoryGame4 from '../../assets/Memory-game/4.PNG'

import Portrfolio from '../../assets/Portrfolio/1.PNG'
import Portrfolio2 from '../../assets/Portrfolio/2.PNG'
import Portrfolio3 from '../../assets/Portrfolio/3.PNG'
import Portrfolio4 from '../../assets/Portrfolio/4.PNG'


import {
  MDBCarousel,
  MDBCarouselItem,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
} from 'mdb-react-ui-kit';
import {useState} from 'react';
import './portfolio.css'


const Portfolio = () => {
  const albumProjects = [
    {
      "id": 1,
      "images": [ecommerce, ecommerce2, ecommerce3, ecommerce4, ecommerce5, ecommerce6, ecommerce7, ecommerce8]
    },
    {
      "id": 2,
      "images": [ Site1DepInfo, Site2DepInfo, Site3DepInfo, SiteDepInfo, SiteDepInfo1, SiteDepInfo2, SiteDepInfo3, SiteDepInfo4, 
        SiteDepInfo5, SiteDepInfo6, SiteDepInfo7, SiteDepInfo8, SiteDepInfo9]
    },
    {
      "id": 3,
      "images": [FakeNews1, FakeNews2, FakeNews3, FakeNews4]
    },
    {
      "id": 4,
      "images": [MemoryGame, MemoryGame2, MemoryGame3, MemoryGame4]
    },
    {
      "id": 5,
      "images": [Portrfolio, Portrfolio2, Portrfolio3, Portrfolio4]
    },
  ]
  const[activeView, setActiveView] = useState(null);

  const [optSmModal, setOptSmModal] = useState(false);

  const toggleShow = (projectId) => {
    setActiveView(projectId);
    setOptSmModal(!optSmModal)};
  return (
    <section id="portfolio">
        <h5>My Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
        <div setShow={setOptSmModal}>
            <MDBModal show={optSmModal} tabIndex='-1'>
              <MDBModalDialog size='lg' centered>
              <MDBModalContent>
                  <MDBModalHeader>
                    <MDBBtn className='btn-close' color='none' onClick={() => toggleShow(null)}></MDBBtn>
                  </MDBModalHeader>
              {activeView !== null && (
                      <MDBCarousel showIndicators showControls fade>
                        {albumProjects[activeView - 1].images.map((image, index) => (
                            <MDBCarouselItem key={index} itemId={index + 1}
                              src={image} className="d-block w-100 h-90" alt="detail_webSite" >
                            </MDBCarouselItem>
                          ))}
                        </MDBCarousel>
              )}
              </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>
          
          <article className="portfolio__item">
            <div className="portfolio_image">
              <div className="portfolio__item-image">
                <img src={ecommerce} alt="work_portfolio" />
              </div>
            </div>

            <div className="potfolio_description">
              <h3>Static E-Commerce Site (Frontend Only)</h3>
              <p>Technoligies Used : ReactJs, Html, Css, Bootstrap</p>
              <a  className="btn" onClick={() => toggleShow(1)}>View Details</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio_image">
              <div className="portfolio__item-image">
                <img src={SiteDepInfo} alt="work_portfolio" />
              </div>
            </div>


            <div className="potfolio_description">
              <h3>Site Web Pour La Gestion De Departement de l'informatique</h3>
                <p>Technoligies Used: <small>Php, JavaScript, Html, Css, Bootstrap</small></p>
              <a className="btn" onClick={() => toggleShow(2)}> View Details</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio_image">
              <div className="portfolio__item-image">
                <img src={FakeNews1} alt="work_portfolio" />
              </div>
            </div>


            <div className="potfolio_description">
              <h3>Intelligent System for Detecting COVID-19 Disinformation Using Deep Learning</h3>
                <p>Techniques Used : <small>NLP, Word Embedding(Bert), Deep Learning(Lstm) </small> <br />
              Technoligies Used for the Web Site : <small>Flask, Html, Css</small></p>
              <a className="btn" onClick={() => toggleShow(3)}> View Details</a>
            </div>
          </article>
          
          <article className="portfolio__item">
            <div className="portfolio_image">
              <div className="portfolio__item-image">
                <img src={MemoryGame} alt="work_portfolio" />
              </div>
            </div>

            <div className="potfolio_description">
              <h3>Memory Game</h3>
              <p>Technoligies Used : ReactJs, Html, Css</p>
              <a  className="btn" onClick={() => toggleShow(4)}>View Details</a>
            </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio_image">
              <div className="portfolio__item-image">
                <img src={Portrfolio} alt="work_portfolio" />
              </div>
            </div>

            <div className="potfolio_description">
              <h3>Portefolio</h3>
              <p>Technoligies Used : Html, Css</p>
              <a  className="btn" onClick={() => toggleShow(5)}>View Details</a>
            </div>
          </article>
        </div>
    </section>
  )
}

export default Portfolio