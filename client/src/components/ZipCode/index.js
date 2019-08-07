import React, { Component, Fragment } from 'react';

const Zip = props => {
  return (
      <form>
          <div className='form-group'>
              <input className='col-12 form-control'
                  value={props.search}
                  type='text'
                  name='searchZip'
                  onChange={props.handleInputChange}
              />
          </div>
          <br></br>
          <button type='submit' className='submitBtn btn btn-primary' onClick={props.handleFormSubmit}>
              Submit
          </button>
      </form>
  )
}

export default Zip




