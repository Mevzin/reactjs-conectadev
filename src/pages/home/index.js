import React from 'react';
import Header from './components/Header';
//import './style.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        display: 'flex',
        flexDirection: 'column'
        }
})

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <main className="main">
                <div className="navbar">Navbar</div>
                <div className="feed">feed</div>
            </main>
        </div>
    )
}

export default Home;