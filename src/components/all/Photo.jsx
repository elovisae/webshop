import React from 'react'
import {
    beigeBag,
    blueMiniDress,
    blueShorts,
    blueVest,
    dressPattern,
    greenBlazer,
    greenDress,
    greenPants,
    pinkBlazer,
    pinkDress,
    pinkPants,
    tote,
    widePants

} from '../../img/clothing/clothing';

const Photo = (props) => {
    switch (props.url) {
        case 'beigeBag':
            return(
                <img className="item-img" src={beigeBag} alt="Green pants" />
               )
        case 'blueMiniDress':
            return(
                <img className="item-img" src={blueMiniDress}/>
            )
        case 'blueShorts':
            return(
                <img className="item-img" src={blueShorts}/>
            )
        case 'blueVest':
            return(
                <img className="item-img" src={blueVest}/>
            )
        case 'dressPattern':
            return(
                <img className="item-img" src={dressPattern} alt="Green pants" />
                )
        case 'greenBlazer':
            return(
                <img className="item-img" src={greenBlazer} alt="Green pants" />
                )
        case 'greenDress':
            return(
                <img className="item-img" src={greenDress} alt="Green pants" />
                )
        case 'greenPants':
            return(
                <img className="item-img" src={greenPants} alt="Green pants" />
                )
        case 'pinkBlazer':
            return(
                 <img className="item-img" src={pinkBlazer} alt="Green pants" />
                )
        case 'pinkDress':
            return(
                <img className="item-img" src={pinkDress}/>
            )
        case 'pinkPants':
            return(
                <img className="item-img" src={pinkPants}/>
            )
        case 'tote':
            return(
                <img className="item-img" src={tote}/>
            )
        case 'widePants':
            return(
                <img className="item-img" src={widePants}/>
            )
        default:
            return <p>No image found</p>
    }

   
}

export default Photo