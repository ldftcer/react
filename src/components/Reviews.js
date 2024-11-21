import './Reviews.css';
import { reviewslist } from './revievslist';



export default function Reviews() {
  return (
    <div className='reviews'>
      <section>
        <h2>Reviews</h2>
      </section>
      <section>
        {
          reviewslist.map((elem, index) => {
            return (
              <div className='block '>
                <img src={elem.img} alt="" key={elem.id} />
                <h3>Name</h3>
                <p>lorem ipsum has been industry`
                  sstandart dummy tyeext every since 
                  the 1500s
                </p>
              </div>
            )
          })
        }
      </section>
    </div>
  )
}