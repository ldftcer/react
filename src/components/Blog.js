import './Blog.css';
import { minilist } from './minilist';
import Zoom from 'react-medium-image-zoom';

export default function Blog() {
  return (
    <div className='blog'>
        <section>
            <h2>Blog</h2>
        </section>
        <section>
            {
                minilist.map((elem, index) => {
                    return (
                        <div className="block" key={elem.id}>
                            <Zoom>
                                <img src={elem.img} alt="" />
                            </Zoom>
                            <h4>Post 1 Headline</h4>
                            <p>
                                it has roots in a piace of classical
                                Latin literature from 45 BC
                            </p>
                            <p>Satm march 28, 2025</p>
                            <button>Read More</button>
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}