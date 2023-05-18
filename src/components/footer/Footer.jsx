import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sandra Davis</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                {/* <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li> */}
            </ul>
            <div className="footer__social">
                <a href="https://github.com/Sandra-Davis" className="footer__social-link" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>
                <a href="https://www.instagram.com/_sandra.davis_/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://twitter.com/_Sandra_Davis_?t=xcIB0SjtZV_p0yoAAJoczQ&s=08" className="footer__social-link" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>
            <span className='footer__copy'>&#169;All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer