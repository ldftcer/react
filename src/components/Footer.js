import './Footer.css'
import inst from '../insface/inst.png'
import face from '../insface/facebook.png'
import teleg from '../insface/Telegram-removebg-preview.png'
import phone from '../insface/360_F_361064765_RP4yD79gKFMdHiaDmTUWiPES6aoAKPkb-removebg-preview.png'
export default function Footer() {
    return (
        <div className='Footer'>
            <footer>
                <div className='left'>
                    <h1>Logo</h1>
                    <div className='imgflx'>
                        <img src={inst} alt='' />
                        <img src={face} alt='' />
                        <img src={teleg} alt='' />
                    </div>
                    <p>All Right resiveq</p>
                </div>
                <div className='center'>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Products</li>
                        <li>Reviews</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='Right'>
                    <img src={phone} alt=''/>
                    <a href="tel:+3747723049">+3747723049</a>
                    <a href="tel:+3747723049">+3747723049</a>
                    <p>Desing my Meline </p>
                </div>
            </footer>
        </div>
    )
}
