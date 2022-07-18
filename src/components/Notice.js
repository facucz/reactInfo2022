import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions, Button } from '@mui/material';
import * as dateUtils from '../utils/dateUtils';


function Notice(props) {
    return (
        <Card style={{marginBottom: "20px"}} sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={props.imgUrl}
                alt="Image not found"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Publicado el: {dateUtils.getCustomDate(props.publishedAt)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Fuente: {props.source}
                </Typography>
                <CardActions>
                    <Button size="small" target="_blank" href={props.urlLink}>Ir a la noticia</Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default Notice;