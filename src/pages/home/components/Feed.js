import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) =>({
    root:{
    }
}));

const posts = [
    {
        id: 1,
        author:{
            id: 1,
            name: 'Thiago Torres',
            username: 'mevzin',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: 'Criando um app do zero usando React JS',
        date: ' April 7, 2020',
        description: 'Fala dev, qual o framework preferido de vocês?',
        hashtags: '#dotnet, #javascript, #reactjs, #developer',
        image: '/images/posts/post1.png'
    },
    {
        id: 2,
        author:{
            id: 1,
            name: 'Thiago Torres',
            username: 'mevzin',
            avatar: '/images/avatars/avatar_1.jpeg'
        },
        title: 'Comparativo entre react js e vue',
        date: ' April 7, 2020',
        description: 'Quero criar um bootcamp gratuito para passar um pouco de minha experiencia pra vcs! Quem topa ?',
        hashtags: '#dotnet, #javascript, #reactjs, #developer',
        image: '/images/posts/post2.png'
    }
];

function Feed(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            { 
                posts.map(post =>(
                    <PostCard key={post.id} post={post}/>
                ))
            }
        </div>
    )
}

export default Feed;