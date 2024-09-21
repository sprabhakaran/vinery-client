import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function VineyardCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://media.istockphoto.com/id/1343881049/photo/weinberg-in-rheinhessen-bei-sonnenuntergang.jpg?s=2048x2048&w=is&k=20&c=4qPZZRG-M1dI6Ij1WGkc2YTC31V0IXxfNNTtI68Y5nA="
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.address}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Geo Location
                </Button>
            </CardActions>
        </Card>
    );
}