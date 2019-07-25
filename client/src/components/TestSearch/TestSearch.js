import React, { Component, Fragment } from 'react';

const TestSearch = props => {
  return (
      <form>
          <div className='form-group'>
              <input className='col-12 form-control'
                  value={props.search}
                  type='text'
                  name='testSearch'
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

export default TestSearch