import React from "react";
import "./style.css";

function Card() {
  return (
    <div>
      <div className="row">
        <div className="col s12 m4 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img src="http://www.freetimelearning.com/materialize-css/images/card.jpg"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Free Time Learning<i className="material-icons right">more_vert</i></span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text...</p>
            </div>
            <div className="card-action">
              <a href="http://www.freetimelearning.com" target="_blank" className="btn blue">Free Time Learn</a>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Free Time Learning<i className="material-icons right">close</i></span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text...</p>
            </div>

          </div>
        </div>
        <div className="col s12 m4 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img src="http://www.freetimelearning.com/materialize-css/images/card.jpg"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Free Time Learning<i className="material-icons right">more_vert</i></span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text...</p>
            </div>
            <div className="card-action">
              <a href="http://www.freetimelearning.com" target="_blank" className="btn blue">Free Time Learn</a>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Free Time Learning<i className="material-icons right">close</i></span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text...</p>
            </div>

          </div>
        </div>
        <div className="col s12 m4 l4">
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img src="http://www.freetimelearning.com/materialize-css/images/card.jpg"></img>
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">Free Time Learning<i className="material-icons right">more_vert</i></span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text...</p>
            </div>
            <div className="card-action">
              <a href="http://www.freetimelearning.com" target="_blank" className="btn blue">Free Time Learn</a>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Free Time Learning<i className="material-icons right">close</i></span>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text...</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;