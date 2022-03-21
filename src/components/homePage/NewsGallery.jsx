import React from 'react';
import beigeBag from '../../img/clothing/beige-bag.jpg'
import blueMiniDress from '../../img/clothing/blue-mini-dress.jpg'
import greenBlazer from '../../img/clothing/green-blazer.jpg'

const NewsGallery = () => {
  return (
    <section> 
        <article className="news-gallery">
            <div>
                <img src={beigeBag} alt="Beige bag" />
            </div>
            <div>  
                <img src={blueMiniDress} alt="" />
            </div>
            <div>
                <img src={greenBlazer} alt="" />  
            </div>
        </article>
    </section>
      )
}

export default NewsGallery