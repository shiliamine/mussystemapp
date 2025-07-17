
import { Link } from 'react-router-dom';
import img404 from '../../assets/LearLogo1.png';
import './page404.css';
import { Button, Flex } from 'antd';
import React from 'react';



function P404(rams) 
{
return(

    <div>
    <div className="number404">
        <span>4</span>
        <img src={img404} alt="Logo" className="image404" />
        <span>4</span>
      </div>
     
         <Link to="/">
        <Button type="primary" className="btnn">
          GO BACK HOME
        </Button>
      </Link>
     
    </div>
    
)

}
export default P404;