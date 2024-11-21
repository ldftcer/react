import './Contactus.css'

export default function Contactus() {
    return (
        <div className='Contactus'>
            <section>
                <h1> Contact US</h1>
            </section>
            <section>
                <div className='left'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155.20343558557613!2d-0.06783043632064151!3d51.50853813181923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sam!4v1732223312535!5m2!1sru!2sam" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
                <div className='right'>
                    <form>
                        <input type="text" id="name"  placeholder='Full Name' />
                        <input type="email" id="email"  placeholder='E-mail' />

                        <input type="tel" id="phone"  placeholder='Phone'/>
                        
                        <input type="text" id='comment' placeholder='Message' />
                        
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
