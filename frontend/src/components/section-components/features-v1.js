import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturesV1 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = this.props.customClass ? this.props.customClass :''

    return <div className={ customClass } >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our Services</h6>
			          <h1 className="section-title">Nos services</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__custom-gutter--- justify-content-center go-top">
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/21.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">Acheter</Link></h3>
			            <p>plus de 1000 biens immobilés disponible sur le site pour vente , explorer les et decidez lequel vous plait   </p>
			            <Link className="ltn__service-btn" to="/">Find A Home <i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/22.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">Louer</Link></h3>
			            <p> environs 1500 biens immobiliers sur Hously pour location , trouvez  vos besoin avec le prix qui vous convient </p>
			            <Link className="ltn__service-btn" to="/service-details">Find A Home <i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/23.png"} alt="#" />
			          </div>
			          <div className="ltn__feature-info">
			            <h3><Link to="/service-details">Vender</Link></h3>
			            <p>vous voulez vendre une maison? terrain ou appartement connecter vous et deposez une annonce .</p>
			            <Link className="ltn__service-btn" to="/service-details">Find A Home <i className="flaticon-right-arrow" /></Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default FeaturesV1