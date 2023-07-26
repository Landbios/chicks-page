
import chickslogo from '../assets/chicks-logo-large.svg'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faCartShopping,faUser,faBars} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <>
   
        <div className='headerCont'>
            <div className='HeaderSubCont1'>
                <div className='Col'>
                    <img src={chickslogo} alt="" />
                </div>
                <div className='ColSub1'>
                    <a>Currency <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /></a>
                </div>
                <div className='ColSub1'>
                    <a>Items <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /></a>
                </div>
                <div className='ColSub1'>
                    <a>Account <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /></a>
                </div>
                <div className='ColSub1'>
                    <a>Services <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /></a>
                </div>
                <div className='ColSub1'>
                    <a>Swap <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /></a>
                </div>
                <div className='ColSub1'>
                    <a>Sell <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /></a>
                </div>
            </div>
            <div className='HeaderSubcont2'>
                <div className='="ColSub2'>
                    <a>USD <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /></a>
                </div>
                <div className='="ColSub2'>
                    <a><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /> CART(5)</a>
                </div>
                <div className='="ColSub2'>
                    <button className='sign_button'> <FontAwesomeIcon icon={faUser} style={{color: "#303141",}} />  SIGN IN</button>
                </div>
            </div>

        </div>
        <div className='MobileHeader'>
            <div className='Mo_Col'>
                    <img src={chickslogo} alt="" />
            </div>
            <div className='Mo_Col'>
                <FontAwesomeIcon icon={faBars} size='lg' style={{color: "#ffffff",}} />
            </div>
        </div>
    </>
  )
}

export default Header