import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle,faCaretUp,faCaretDown,faCartShopping} from '@fortawesome/free-solid-svg-icons'
import thumbnail from '../assets/item-icon.png'
import tomNook from '../assets/Tom-nook.svg'

const Card = () => {
  return (
    <div className='Card'>
      <div className='CardTopSection'>
        <div className='OnsaleCont'>
          <div className='dotAndText'>
            <FontAwesomeIcon className='saledot' icon={faCircle}   style={{color: "#39e29d", }} /> <p className='OnsaleText'>ON SALE</p>
          </div>
          <button className='StockBadge'>in stock</button>
        </div>
        <div className='QuantityInpCard'>
          <p className='quantNumberPara'>1</p>
          <div className='UpAndDownQuant'>
            <div>
              <FontAwesomeIcon icon={faCaretUp} style={{color: "#ffffff",}} />
            </div>
            <div>
              <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}} />
            </div>
            

          </div>

        </div>

      </div>
      <div className='ItemThumb'>
        <img className='Item_Thumbnail' src={thumbnail} alt="" />
      </div>
      <div className='itemTitleCont'>
          <p className='ItemTitle'>Wooden Table</p>
          <div className='TomCircle'>
            <img className='tomIcon' src={tomNook} alt="" />
          </div>
        
      </div>
      <div className='PriceAndPriceOld'>
        <p className='NewPrice'>$450  <span className='OldPrice'> $522</span></p>

      </div>
      <div className='DescCont'>
        <p  className='ItemDesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
      </div>
      <div className='ItemButtonsCont'>
        <button className='DetailsButton'>DETAILS</button>
        <button className='AddButton'>ADD <span className='CardIconCont'><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /></span></button>
      </div>

    </div>
  )
}

export default Card