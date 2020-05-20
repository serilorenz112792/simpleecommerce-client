import React from 'react'
import { Grid, Typography, Container } from '@material-ui/core'
import WelcomeImg from '../../images/welcomeImg.jpg'
const WelcomePage = () => {
    return (
        <Container>
            <Grid>
                <Grid style={{ paddingBottom: 10 }} container justify="center" item xs={12}>
                    <Typography style={{ fontFamily: 'cursive', color: '#1c6beb' }} variant="h2" >Welcome! We got it all for you ;)</Typography>
                </Grid>
                <Grid container justify="center" item xs={12}>
                    <div>
                        <img src={WelcomeImg} alt="img" />
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default WelcomePage