import React from 'react';
import './style.css';

class ABV extends React.Component {
  constructor(){
   super();
  
   this.state = {
         displayMenu: false,
       };
  
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  
  };
  
  showDropdownMenu(event) {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
      });
    }
  
    hideDropdownMenu() {
      this.setState({ displayMenu: false }, () => {
        document.removeEventListener('click', this.hideDropdownMenu);
      });
  
    }
  
    render() {
      return (
          <div  className="dropdown2">
           <div className="button2" onClick={this.showDropdownMenu}> Beer ABV% </div>
  
            { this.state.displayMenu ? (
            <ul>   
           <li className='abv1'>0-5%</li>
           <li className='abv2'>6-10%</li>
           <li className='abv3'>11-15%</li>
           <li className='abv4'>16-20%</li>
           <li className='abv5'>21-25%</li> 
            </ul>
          ):
          (
            null
          )
          }
  
         </div>
  
      );
    }
  }
  
  export default ABV;

