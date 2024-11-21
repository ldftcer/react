import './Header.css';

export default function Header() {
  return (
    <header>
        <div className="up">
          <nav>
              <p>Logo</p>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Products</li>
                <li>Reviews</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
          </nav>
        </div>
        <div className="down">
          <section>
            <h2>
              Lets take care
              about <span style={{background : 'orangered', color : 'white'}}>our skin</span>
            </h2>
            <p>
              lorem ipsum is simply dummy <br />
              text of the printing and typesetting
              industry. Lorem ipsum has been the
              industrys standard dummy
            </p>
            <button>Read More</button>
          </section>
        </div>
    </header>
  )
}
