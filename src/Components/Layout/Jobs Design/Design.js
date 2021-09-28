import React from "react";
import classes from './Design.module.css';

// import image1 from '../../../images/eyecam-co.svg';
// import image

const design = (props) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    
      let buttons = null;
    buttons = props.jobRequirements.map(req=>{
        return <button className={classes.btn}
        onClick={props.clicked}>{req}</button>
    })

    let className = ['classes.job'];
    if(!props.jobRequirements.includes[props.searchValue]){
        className.push('classes.not');
    }
    
    return(
        <div className={props.display?classes.job:classes.not}>
          <div className={classes.imgMain}>
              <img src={images[props.image].default} alt='image' className={classes.image}/>
          </div>
          <div className={classes.jobDetails}>
              <p className={classes.cmpName}>{props.compnay}</p>
              <div className={classes.jobReq}>
                <h2>{props.jobTitle}</h2>
                <div>
                {buttons}
                </div>
              </div>
              <div className={classes.duraLoc}>
                  <h4>1d ago</h4>
                  <ul>
                      <li>{props.jobType}</li>
                      <li>{props.location}</li>
                  </ul>
              </div>
          </div>
              </div>
     
    )
}

export default design;