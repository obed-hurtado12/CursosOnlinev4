import React, { Component } from 'react'
import Forms from 'components/Forms/Form.js';
import"./wizzard.css";
export default class Wizzuno extends Component {
    render() {
      return <div >
  
        <Forms />

        
<br/>
    <p className='main__boton'><button onClick={this.props.nextStep}>Siguiente paso</button></p>
      
      </div>
    }
  }