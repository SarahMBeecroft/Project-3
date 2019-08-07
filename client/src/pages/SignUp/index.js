import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import GoogleLogin from 'react-google-login';
import * as actions from '../../actions';
import CustomInput from '../../components/CustomInput';
import { Col, Row, Container } from "../../components/Grid";
import './style.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    
  }

  async onSubmit(formData) {
    await this.props.signUp(formData);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard');
    }
  }

  async responseGoogle(res) {
    console.log('responseGoogle', res)
    await this.props.oauthGoogle(res.accessToken);
    if (!this.props.errorMessage) {
      this.props.history.push('/dashboard');
    }
  }

 

  render() {
    const { handleSubmit } = this.props;
    return (
      <Container fluid>
        <div className= "row">
          
        <div className="col s6 field1">
       
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <fieldset>
                <Field
                  name="email"
                  type="text"
                  id="email"
                  label="Enter your email"
                  placeholder="example@example.com"
                  component={CustomInput} />
              </fieldset>
              <fieldset>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  label="Enter your password"
                  placeholder="yoursuperpassword"
                  component={CustomInput} />
              </fieldset>

              {this.props.errorMessage ?
                <div className="alert alert-danger">
                  {this.props.errorMessage}
                </div> : null}

              <button type="submit" className="btn btn-primary signinbtn">Sign In</button>
            </form>
           
            </div>

        <div className="col s6 field1">  
         
            <div className="text-center">
              <div className="alert alert-primary">
              Or sign up using your Google account!
            </div>
           
            <GoogleLogin 
              clientId="1059520152728-voruavvsicaci4kf8a3gab91sia5b2e6.apps.googleusercontent.com"
              render={renderProps => (
                <button className="btn btn-danger googlebtn" onClick={renderProps.onClick} disabled={renderProps.disabled}>Google</button>
              )}
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              className="btn btn-outline-danger"
            />
          </div>
        </div>
      </div>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(SignUp)
