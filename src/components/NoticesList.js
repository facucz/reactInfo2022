import { React, useState, useEffect } from 'react';
import Notice from './Notice';
import LoadingSpinner from './LoadingSpinner';
import * as newsApi from '../utils/newsApi';
import Pages from './Pages';

function NoticesList(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const calculateTotalPages = (totalResults) => {
        setTotalPages(Math.ceil(totalResults / 10)); 
    }

    const calculateActualNotices = (totalResults) => {
        const defaultQuantity = 10
        if (totalResults < defaultQuantity) {
            return totalResults;
        }
        return defaultQuantity;
    }

    useEffect(() => {
        if (props.input) {
            setLoading(true);
            newsApi.getNotices(props.input, currentPage)
            .then(res => {
                console.log('response: ', res.data);
                setData(res.data.articles);
                setTotalResults(res.data.totalResults);
                calculateTotalPages(res.data.totalResults);
                setLoading(false);
            })
            .catch(e => {
                setError(e);
                setLoading(false);
            });
        }
    }, [props.input, currentPage]);

    if (loading) {
        return(
            <LoadingSpinner></LoadingSpinner>
        )
    }

    if (error) {
        return(
            <>
                <h2>Ha ocurrido un error con la noticia que se busco: {props.input}</h2>
                <h2>{error.message}</h2>
            </>   
        )
    }

    if (!data) {
        return(
            <h2>Ingrese la noticia que desea buscar</h2>
        )
    }

    if (data.articles > 0) {
        return(
            <h2>No se encontraron noticias relacionadas al texto que se busco: {props.input}</h2>
        )
    }

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    console.log('TOTAL PAGES: ', totalPages);
    console.log('CURRENT PAGE: ', currentPage);
    return (
        <>
            <h3>Está viendo {calculateActualNotices(totalResults)} noticias de {totalResults} resultados</h3>
            <Pages
                totalPages={totalPages}
                paginate={paginate}
                page={currentPage}
            >
            </Pages>
            <ul>
                {data.map((article) => {
                    return (
                        <Notice title={article.title}
                            description={article.description}
                            imgUrl={article.urlToImage}
                            publishedAt={article.publishedAt}
                            urlLink={article.url}
                            source={article.source.name}
                        ></Notice>
                    )
                })}
            </ul> 
        </>
    )
}

export default NoticesList;