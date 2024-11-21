import './About.css';
import a from '../forimage/all/slidEffect.png';
import b from '../forimage/all/slidEffect.png';
import c from '../forimage/all/slidEffect.png';
import d from '../forimage/all/slidEffect.png';
import e from '../forimage/all/slidEffect.png';

export default function About() {
    const slicePicture = [a,b,c,d,e];
    
  return (
    <div className='about'>
        <section>
            <h2>About Us</h2>
            <div className="aboutInfo">
                <div className="sliceImage">
                    {
                        slicePicture.map((elem, index) => {
                            return (
                                <div className="image" key={index} style={{background : `url(${elem})`}}></div>
                            )
                        })
                    }
                </div>
                <div className="information">
                    <h2>Skin care is important for everyone</h2>
                    <p>
                         Skin care is a part of the treatment of wound healing,
                         radiation therapy andsome medications . Skin care or
                         skincare is a ranfe of practices that support skin integrity,
                         enhance its appeatance, andrelieve skin conditions.
                    </p>
                    <p>
                        They can include nutrition, avoidanceof excessive sun exposure
                        and apporpriate use of emollients. Skin care is a routine
                        daily procedure in many settings, such as
                        skin that os either too dry or too moist, and prevention of
                        dermatitsand preventation of skin injuries.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}