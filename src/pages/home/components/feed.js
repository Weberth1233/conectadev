import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard/index'

const userStyles= makeStyles({
    root:{

    }
})

const posts = [
    { id:1, 
      autor:{
          id:1,
          name:'Weberth Erik',
          username:'webe123',
          avatar:'./images/avatars/avatar_1.jpeg'
      },
      title:"Criando um App do Zero com React.js",
      date:"April 7, 2020",
      description:"Fala pessoal!. Tudo blz ?",
      image:"./images/posts/post1.png"
    },
    { id:2, 
        autor:{
            id:2,
            name:'Erik Junior',
            username:'erik22',
            avatar:'/images/avatars/avatar_1.jpeg'
        },
        title:"Criando um App do Zero com Java",
        date:"April 7, 2020",
        description:"Fala pessoal!. Tudo blz ?",
        image:"./images/posts/post1.png"
      }
];

export default function Feed(){
    const classes = userStyles();
    return(
        <div>
            {
                posts.map(post=>(
                    <PostCard key={post.id} post={post}/>
                ))
            }
        </div>
    )
}