
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders,faCaretDown,faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons'
import Card from './Card'


const CardList = () => {

  const repeat = 15;
  const Cards = []
  for (let index = 0; index < repeat; index++) {
    Cards.push(<Card/>);
  }

  return (
    <div className='CardList'>
        <div className='Cardlist_top'>
            <p className='Cardlist_Para'>Showing 20 from 125</p>
            <div className='SortDiv'>
                <FontAwesomeIcon icon={faSliders} style={{color: "#39e29d",}} />
                <div className='Sort_Texts'>
                    <p className='Carlist_TopSort'>Sort By</p>
                    <p className='Carlist_BottomSort'>Features</p>
                    
                </div>
                <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}} />

            </div>

            
        </div>
        <div className='Cards_cont'>
          
        {Cards}


        </div>
        <div className='Paginator'>
          <ul className='PagesList'>
            <li className='PaginatorArrow'><FontAwesomeIcon icon={faChevronLeft} style={{color: "#ffffff",}} /> </li>
            <li className='ActiveLi'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>...</li>
            <li>11</li>
            <li className='PaginatorArrow'><FontAwesomeIcon icon={faChevronRight} style={{color: "#ffffff",}} /> </li>
          </ul>

         
        </div>

        
    </div>
  )
}

export default CardList