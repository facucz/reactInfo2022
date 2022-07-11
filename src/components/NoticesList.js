import { React, useState, useEffect } from 'react';
import Notice from './Notice';
import LoadingSpinner from './LoadingSpinner';
import * as newsApi from '../utils/newsApi';

function NoticesList(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (props.input) {
            setLoading(true);
            newsApi.getNotices(props.input, 1)
            .then(res => {
                console.log('response: ', res.data);
                setData(res.data.articles);
                setLoading(false);
            })
            .catch(e => {
                setError(e);
                setLoading(false);
            });
        }
    }, [props.input]);

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

    return (
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
    )
}

export default NoticesList;