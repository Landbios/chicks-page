import amex from '../assets/amex.svg'
import crypto from '../assets/crypto.svg'
import visa from '../assets/visa.svg'
import skrill from '../assets/skrill.svg'
import mastercard from '../assets/mastercard.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import discord from '../assets/discord.svg'
import instagram from '../assets/instagram.svg'
import chickslogo from '../assets/chicks-logo-large.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className='FooterCont'>
        <div className='BransSubCont'>
            <div className='Brands'>
                <img src={visa} alt="" />
                <img src={mastercard} alt="" />
                <img src={amex} alt="" />
                <img src={skrill} alt="" />
                <img src={crypto} alt="" />
                <p className='BrandPara'>and 50+ more</p>
            </div>

           
        </div>
        <div className='SocialMediaAndPages'>
            <div className='SocialSubCont'>
                <div className='SocialIcons'>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={discord} alt="" />

                </div>
                <div className='Footer_Columns'>
                    <div className='LogoCol'>
                        <img src={chickslogo} alt="" />
                        <p>support@chicksgold.com</p>
                    </div>
                    <div className='Footer_Col'>
                        <p>Chicks Gold</p>
                        <a>Games</a>
                        <a>About Us</a>
                        <a>Blog</a>
                        <a>Sitemap</a>
                    </div>
                    <div className='Footer_Col'> 
                        <p>Support</p>
                        <a>Contact us</a>
                        <a>FAQ</a>
                        
                    </div>
                    <div className='Footer_Col'>
                        <p>Legal</p>
                        <a>Privacy Policy</a>
                        <a>Term of Services</a>
                        <a >Copyright Policy</a>
                        
                    </div>
                    <div className='Footer_Col5'>
                        <div className='StarContainer'>
                            <span className='Staricon'><FontAwesomeIcon icon={faStar} style={{color: "#ffffff",}} /></span>
                            <span className='Staricon'><FontAwesomeIcon icon={faStar} style={{color: "#ffffff",}} /></span>
                            <span className='Staricon'><FontAwesomeIcon icon={faStar} style={{color: "#ffffff",}} /></span>
                            <span className='Staricon'><FontAwesomeIcon icon={faStar} style={{color: "#ffffff",}} /></span>
                            <span className='Staricon'><FontAwesomeIcon icon={faStar} style={{color: "#ffffff",}} /></span>
                            
                       
                        </div>
                        <p>trustpilot Reviews</p>
                    </div>

                </div>

                <p className='RightsReserved'>© 2017 - 2021 Chicksgold.com. All Rights Reserved</p>
                
           

            </div>
            

        </div>
        
    </div>
  )
}

export default Footer