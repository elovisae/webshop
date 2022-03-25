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
                <img src={beigeBag} alt="Green pants" />
               )
        case 'blueMiniDress':
            return(
                <img src={blueMiniDress}/>
            )
        case 'blueShorts':
            return(
                <img src={blueShorts}/>
            )
        case 'blueVest':
            return(
                <img src={blueVest}/>
            )
        case 'dressPattern':
            return(
                <img src={dressPattern} alt="Green pants" />
                )
        case 'greenBlazer':
            return(
                <img src={greenBlazer} alt="Green pants" />
                )
        case 'greenDress':
            return(
                <img src={greenDress} alt="Green pants" />
                )
        case 'greenPants':
            return(
                <img src={greenPants} alt="Green pants" />
                )
        case 'pinkBlazer':
            return(
                 <img src={pinkBlazer} alt="Green pants" />
                )
        case 'pinkDress':
            return(
                <img src={pinkDress}/>
            )
        case 'pinkPants':
            return(
                <img src={pinkPants}/>
            )
        case 'tote':
            return(
                <img src={tote}/>
            )
        case 'widePants':
            return(
                <img src={widePants}/>
            )
        default:
            return <p>No image found</p>
    }

   
}

export default Photo