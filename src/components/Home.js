import React, { Component } from 'react';
import formular1 from '../img/formular1.jpeg';
import formular2 from '../img/formular2.jpeg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <div className="row ml-3">
            <div className="col-4">
              <img src={formular1} alt="me" className="img-fluid pt-5" />
            </div>
            <div className="col-4">
              <img src={formular2} alt="me" className="img-fluid pt-5" />
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}
