import React from 'react';
import './style.css';

class Style extends React.Component {
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
          <div  className="dropdown1">
           <div className="button1" onClick={this.showDropdownMenu}> Beer Style </div>
  
            { this.state.displayMenu ? (
            <ul>   
           <li className='style1'>American-Style Amber/Red Ale</li>
           <li className='style2'>American-Style India Black Ale</li>
           <li className='style3'>American-Style Brown Ale</li>
           <li className='style4'>American-Style Cream Ale or Lager</li>
           <li className='style5'>American-Style Imperial Stout</li> 
           <li className='style6'>American-Style India Pale Ale</li>
           <li className='style7'>American-Style Lager</li>   
           <li className='style8'>American-Style Pale Ale</li>
           <li className='style9'>American-Style Stout</li>
           <li className='style10'>Baltic-Style Porter</li>
           <li className='style11'>Belgian-Style Fruit Lambic</li>
           <li className='style12'>Belgian-Style Pale Ale</li>
           <li className='style13'>Belgian-Style Quadrupel</li>
           <li className='style14'>Belgian-Style White</li>
           <li className='style15'>Fruit Beer</li>
           <li className='style16'>German-Style Oktoberfest</li>
           <li className='style17'>Imperial or Double India Pale Ale</li>
           <li className='style18'>Imperial or Double Red Ale</li>
           <li className='style19'>Irish-Style Red Ale</li>
           <li className='style20'>Light American Wheat Ale or Lager</li>
           <li className='style21'>Other Belgian-Style Ales</li>
           <li className='style22'>South German-Style Hefeweizen</li>
           <li className='style23'>Traditional German-Style Bock</li>
           <li className='style24'>Vienna-Style Lager</li>
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
  
  export default Style;

