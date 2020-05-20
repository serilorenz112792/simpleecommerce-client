import React, { useState, useEffect } from 'react'
import { Grid, TextField, Button, Snackbar } from '@material-ui/core'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { registerAction } from './action'
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    textField: {
        maxWidth: 500
    },
    btn: {
        maxWidth: 500,
    },
    btnSubmitGrid: {
        paddingTop: 50
    },
    btnRegisterGrid: {
        paddingTop: 70
    }

})
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const RegisterPage = (props) => {
    const classes = useStyles()
    const { register, Register } = props
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [openSnack, setOpenSnack] = useState(false)
    const [msg, setMsg] = useState('')
    const [severity, setSeverity] = useState('')

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };

    useEffect(() => {
        if (register.msg.id === 'REGISTER_FAILED') {
            setSeverity('error')
            setOpenSnack(true)
            setMsg(register.msg.content.msg)
            setError(true)
        }
        else {
            if (register.msg.content !== "") {
                setSeverity('success')
                setOpenSnack(true)
                setMsg(register.msg.msg)
                setError(false)
            }
        }
    }, [register])
    const handleSubmit = () => {
        const newUser = {
            name,
            email,
            password
        }
        Register(newUser)
    }
    const handleFocus = () => {
        setError(false)
    }
    return (
        <Grid>
            <Grid container justify="center" item xs={12} style={{ paddingTop: 50 }} >
                <TextField onFocus={handleFocus} error={error} className={classes.textField} onChange={(e) => setName(e.target.value)} autoFocus type="text" id="name" fullWidth placeholder="Name" label="Name" />
            </Grid>
            <Grid container justify="center" item xs={12}>
                <TextField onFocus={handleFocus} error={error} className={classes.textField} onChange={(e) => setEmail(e.target.value)} type="email" id="email" fullWidth placeholder="Email" label="Email" />
            </Grid>
            <Grid container justify="center" item xs={12}>
                <TextField onFocus={handleFocus} error={error} className={classes.textField} onChange={(e) => setPassword(e.target.value)} type="password" id="password" fullWidth placeholder="Password" label="Password" />
            </Grid>
            <Grid className={classes.btnSubmitGrid} container justify="center" item xs={12}>
                <Button onClick={handleSubmit} className={classes.btn} variant="contained" color="primary" fullWidth>Submit</Button>
            </Grid>
            <Snackbar open={openSnack} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity={severity}>
                    {msg}
                </Alert>
            </Snackbar>
        </Grid>
    )
}

RegisterPage.propTypes = {
    register: PropTypes.any,
    Register: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    register: state.register
})
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        Register: registerAction
    }, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)