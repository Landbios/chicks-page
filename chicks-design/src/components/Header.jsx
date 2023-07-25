
import chickslogo from '../assets/chicks-logo-large.svg'
import '../style/header.css'


const Header = () => {
  return (
    <div className='headerCont'>
        <div className='HeaderSubCont1'>
            <div className='Col'>
                <img src={chickslogo} alt="" />
            </div>
            <div className='ColSub1'>
                <a>Currency</a>
            </div>
            <div className='ColSub1'>
                <a>Items</a>
            </div>
            <div className='ColSub1'>
                <a>Account</a>
            </div>
            <div className='ColSub1'>
                <a>Services</a>
            </div>
            <div className='ColSub1'>
                <a>Swap</a>
            </div>
            <div className='ColSub1'>
                <a>Sell</a>
            </div>
        </div>
        <div className='HeaderSubcont2'>
            <div className='="ColSub2'>
                <a>USD</a>
            </div>
            <div className='="ColSub2'>
                <a>Cart(5)</a>
            </div>
            <div className='="ColSub2'>
                <button className='sign_button'>SIGN IN</button>
            </div>
        </div>

    </div>
  )
}

export default Header