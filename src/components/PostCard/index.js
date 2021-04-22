import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MessageIcon from '@material-ui/icons/Message';

const userStyles= makeStyles((theme) => ({
    root:{
        marginBottom:theme.spacing(2)
    },
    subheader:{
        display:'flex',
        alignItems:'center'
    },
    caption:{
        marginRight:theme.spacing(1)
    }, 
    image:{
        height:300,
        width:'100%',
        maxWidth:'100%'
    },
    content:{
        padding:0
    },
    favorite:{
        marginLeft:'auto',
    },
    reactions:{

    }
}))
export default function PostCard({ post }){
    const classes = userStyles();
    return (
        <Card className={classes.root}>
            <CardHeader 
                avatar={<Avatar src={post.autor.avatar}/>}
                title={<Typography variante="h6">{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography variante="caption" className={classes.caption}>
                            {'Avaliado por'}
                        </Typography>
                        <Typography variante="subtitle" className={classes.caption}>
                            {post.autor.name}
                        </Typography>
                        <Typography variante="caption" className={classes.caption}>
                            {post.date}
                        </Typography>
                    </div>
                }
                />

            <CardContent className={classes.content}>
                <CardActionArea>
                    <img src={post.image} className={classes.image}></img>
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton>
                    <FavoriteIcon />
                    <Typography
                        style={{cursor:'pointer'}}
                        color="textSecondary"
                        variant="body2">
                            {'10'}
                        </Typography>
                </IconButton> 
                <IconButton aria-label="comment">
                    <MessageIcon />
                    <Typography
                        className={classes.reactions}
                        color="textSecondary"
                        variant="body2">
                            {'30'}
                        </Typography>
                </IconButton> 
                <IconButton aria-label="favorite" className={classes.favorite}>
                    <BookmarkIcon/>
                </IconButton> 
            </CardActions>
        </Card>
    )
}
