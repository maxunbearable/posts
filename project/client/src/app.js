import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Posts from './components/posts/posts';
import Form from './components/form/form';
import memories from './images/memories.png';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    return (
        <Container maxWidth="lg">
            <AppBar backgroundColor="" className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} vatiant="h2" align="center">Posts</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;