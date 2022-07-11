import { React, useState, useEffect } from 'react';
import Notice from './Notice';
import * as newsApi from '../utils/newsApi';

function NoticesList(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (props.input) {
            newsApi.getNotices(props.input, 1)
            .then(res => {
                console.log('response: ', res.data);
                setData(res.data.articles);
            })
            .catch(e => {
                setError(e);
            });
        }
    }, [props.input]);

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
            <h2>No se encontraron noticias relacionadas al texto que se busco: {props.input}</h2>
        )
    }

    return (
        <ul>
            {data.map((article) => {
                return (
                    <Notice title={article.title} description={article.description} imgUrl={article.urlToImage}></Notice>
                )
            })}
        </ul>
    )
}

export default NoticesList;