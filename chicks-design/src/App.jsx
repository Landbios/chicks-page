import { useState } from 'react'
import Header from './components/Header'
import './style/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faCaretDown,faMagnifyingGlass,faSackDollar,faFeatherPointed} from '@fortawesome/free-solid-svg-icons'
import CardList from './components/CardList'
import Footer from './components/Footer'


function App() {
  const [Cards, setCards] = useState([]);
  
  


  return (
    <>
     <Header/>
      <div className='Main_Box'>
        <h1>Condimentum consectetur </h1>
        <div className='SelectorsCont'>
         
            <div className='Selectors1'>
              <FontAwesomeIcon icon={faLeaf} size='lg' style={{color: "#ffffff",}} />
              <p className='GSelectP'>Select a game</p>
              <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}} />
            </div>
            <div className='Selectors2'>

              <div className='searchbox'>

                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
                <input className='Search_inp' placeholder='Search' type="text" name="search" />

              </div>
              <div className='PriceCont'>
              <FontAwesomeIcon icon={faSackDollar} size='lg' style={{color: "#39e29d",}} />
              <div className='bottomAndTop2'>
                <p className='toptext'>price</p>
                <p className='bottomtext'>All</p>
              </div>
              <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}} />

              </div>
              <div className='ItemCont'>
                <FontAwesomeIcon icon={faFeatherPointed} style={{color: "#39e29d",}} />
                <div className='bottomAndTop3'>
                  <p className='toptext'>Item Type</p>
                  <p className='bottomtext'>All</p>
                </div>
                <FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff",}} />

              </div>

            </div>
         
        </div>

        <CardList/>
        
        
      </div>
      <Footer/>


     
    </>
  )
}

export default App
