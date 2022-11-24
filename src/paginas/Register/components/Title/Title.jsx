import React from 'react';
import  './Title.css'


const Title = ({ text }) => {
	return(
		  <div className="tc Tcontainer">
        	<label className="Tlabel"> {text}</label>
        </div>

		);
}
export default Title;