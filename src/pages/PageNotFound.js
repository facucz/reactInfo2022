import '../styles/PageNotFound.css';

function PageNotFound() {
    return(
        <body className='PageNotFound-body'>
        <section className="notFound">
            <div className="img">
                <img src="https://assets.codepen.io/5647096/backToTheHomepage.png" alt="Back to the Homepage" />
                <img src="https://assets.codepen.io/5647096/Delorean.png" alt="El Delorean, El Doc y Marti McFly" />
            </div>
            <div className="text">
                <h1>404</h1>
                <h2>PAGINA NO ENCONTRADA</h2>
                <h3>VOLVER A LA PAGINA PRINCIPAL?</h3>
                <a href="/" className="yes">SI</a>
                <a href="https://www.youtube.com/watch?v=G3AfIvJBcGo">NO</a>
            </div>
        </section>
        </body>
    )
}

export default PageNotFound;