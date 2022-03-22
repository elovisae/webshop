import React from 'react';
import Nav from '../all/Nav'
import Footer from '../all/Footer'
import './newIn.css'
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

const NewIn = () => {
  return (
    <div>
        <Nav/>
        <article className="new-in-wrapper">
            <aside>
                Yobro
            </aside>
            <main className='text-left'>
                <h2>New in</h2>
                <article className='new-in-collage'>
                    <div className="card">
                        <img src={blueShorts} alt="blue shorts" />
                        <p>Blue shorts</p>
                        <p className='prize'>299 sek</p>
                    </div>
                    <div className="card">
                        <img src={pinkBlazer} alt="pink blazer" />
                        <p>Pink blazer</p>
                        <p className='prize'>499 sek</p>
                    </div>
                    <div className="card">
                        <img src={widePants} alt="pink dress" />
                        <p>Wide beige pants</p>
                        <p className='prize'>699 sek</p>
                    </div>
                    <div className="card">
                        <img src={pinkPants} alt="pink pants" />
                        <p>Suit up pink pants</p>
                        <p className='prize'>499 sek</p>
                    </div>
                    <div className="card">
                        <img src={tote} alt="tote bag" />
                        <p>Tote bag</p>
                        <p className='prize'>199 sek</p>
                    </div>
                    <div className="card">
                        <img src={greenPants} alt="green blazer" />
                        <p>Green pants</p>
                        <p className='prize'>299 sek</p>
                    </div>
                    <div className="card">
                        <img src={blueVest} alt="blue vest" />
                        <p>Blue vest</p>
                        <p className='prize'>299 sek</p>
                    </div>
                    <div className='card'>
                        <img src={dressPattern} alt="mini dress with colorful pattern" />
                        <p>Mini dress</p>
                        <p className='prize'>179 sek</p>
                        
                    </div>
                </article>
            </main>
        </article>
        <Footer/>
    </div>
  )
}

export default NewIn