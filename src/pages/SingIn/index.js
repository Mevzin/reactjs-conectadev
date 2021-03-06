import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '100vh'
    },
    image:{
        backgroundImage: 'url(/images/background.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    avatar:{
        background: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },
    button:{
        marginTop: theme.spacing(1),
    },
    form:{
        margin: theme.spacing(2, 4)
    },
    copyright:{
        marginTop: '30%'
    }
}));

function Copyright(){
    return(
        <Typography variant="body2" aling="center">
            {'Copyright © '}
            <a color="inherit" href="https://www.github.com/mevzin">
                Thiago Torres
            </a>{' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

function SingIn() {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid 
            item 
            container 
            direction="column"
            justify="center"
            alignItems="center"
            md={7}
            className={classes.image}>
                <Typography style={{color: '#fff', fontSize:35, lineHeight:'45px'}}>
                    <strong>Simplificando a forma de conectar desenvolvedores de software!</strong>
                </Typography>
                <Typography variant="body2" style={{color:'rgb(255,255,255, 0.7)', marginTop:30, fontSize:15, lineHeight:'30px'}}>
                    Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software.
                </Typography>
            </Grid>
            <Grid 
            item 
            md={5}>
                <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                mt={8}
                >
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant="h5">
                        Acesso
                    </Typography>
                    <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="email"
                        label="E-mail"
                        id="email"
                        autoComplete="email"
                        autoFocus
                        />
                        <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                        <Button fullWidth
                        color="primary"
                        variant="contained"
                        className={classes.button}>
                        Entrar
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link>Esqueceu sua senha ?</Link>
                            </Grid>
                            <Grid item>
                                <Link>Não tem uma conta ? Registre-se</Link>
                            </Grid>
                        </Grid>
                    </form>
                    <Copyright/> 
                </Box>
            </Grid>
        </Grid>
    )
}

export default SingIn