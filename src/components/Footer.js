import React from 'react';

function Footer() {
    return(
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row justify-content-center'>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>Hecho para Informatorio - Resistencia - Chaco - 2022</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='font-weight-bold mb-2'>Siguenos:</li>
                            <li className='d-flex justify-content-between'>
                                <a target="_blank" href='https://www.instagram.com/' rel="noreferrer"><i className="bi bi-instagram" /></a>
                                <a target="_blank" href='https://www.facebook.com/' rel="noreferrer"><i className="bi bi-facebook" /></a>
                                <a target="_blank" href='https://twitter.com/home' rel="noreferrer"><i className="bi bi-twitter" /></a>
                                <a target="_blank" href='https://www.youtube.com' rel="noreferrer"><i className="bi bi-youtube" /></a>
                            </li>
                        </ul>
                        <div className='container'>
                            <p className='text-center mb-0 mt-2'>Copyright 2022</p>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer;