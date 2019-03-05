import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Signup extends Component {
  render() {
    return (
      <div className="card mb-3" style={{ width: '45rem', margin: '0 auto' }}>
        <div className="card-header" style={{ backgroundColor: '#ffffff' }}>
          <h4>Sign up</h4>
        </div>
        <div className="card-body" style={{ backgroundColor: '#D3D3D3' }}>
          <form>
            <div class="form-group">
              <label for="Fistname">First Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter first name"
                required
              />
            </div>
            <div class="form-group">
              <label for="lastname">Last Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter last name"
                required
              />
            </div>
            <div class="form-group">
              <label for="Email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
            </div>
            <div class="form-group">
              <label for="Password">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>
        <Link to="/login">
              <button type="button" class="btn btn-primary">
                Signup
              </button>
              </Link>
          </form>
        </div>
      </div>
    );
  }
}
