import { list } from './list';
import './Product.css';

export default function Product() {
  return (
    <div className='product'>
        <section>
            <h2>Product</h2>
        </section>
        <section>
            {
                list.map((elem, index)=> {
                    return (
                        <div className="miniBlock" key={elem.id}>
                            <img src={elem.img} alt="" />
                            <h3>Lorem ipsum</h3>
                            <p>
                                lorem ipsum is not
                                simply random text
                            </p>
                            <h3>50$</h3>
                        </div>
                    )  
                })
            }
        </section>
    </div>
  )
}
