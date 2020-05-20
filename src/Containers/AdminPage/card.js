import React, { useState, useEffect } from 'react'

import {
    Container, Grid, Card, CardMedia, CardContent, CardActionArea, Collapse,
    Typography, TextField, Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'
import { currency } from '../../util/currency'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
const useStyles = makeStyles({
    actionTypography: {
        fontFamily: 'fantasy',
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: 'center',
        color: 'orange',
        fontWeight: 'bold',
        cursor: 'pointer',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            color: 'red'
        }
    },
    details: {
        textAlign: 'center',
        fontFamily: 'fantasy'
    },
    root: {
        padding: 25
    },
    editBtn: {
        fontStyle: 'italic',
        color: 'white',
        backgroundColor: 'violet',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            backgroundColor: 'pink'
        }
    },
    deleteBtn: {
        color: 'orange',
        "&:hover": {
            //you want this to be the same as the backgroundColor above
            color: 'red'
        },
        top: 0,
        right: 0,
        position: 'absolute'
    },
    title: {
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
})

const Cards = (props) => {

    const classes = useStyles()
    const { item, handleEditModal, handleDeleteModal } = props
    const [collapse, setCollapse] = useState(false)
    const handleCollapse = () => {
        setCollapse(!collapse)

    }
    useEffect(() => {

    }, [props, item])
    return (
        <Card >
            <CardContent>
                <Typography className={classes.title} variant="h6">{item.productName}</Typography>
                <CardMedia
                    component="img"
                    alt="item img"
                    height="150"
                    width="150"
                    image={`http://localhost:3999/${item.imgPath}`}
                    title={item.productName} />

                <Typography onClick={handleCollapse} className={classes.actionTypography} variant="body1">{!collapse ? 'Edit or Delete?' : 'Hide Details'}</Typography>

            </CardContent>
            <CardActionArea className={classes.root}>
                <Collapse in={collapse} timeout="auto" unmountOnExit>

                    <Grid >
                        <Typography className={classes.details} variant="body1">Product Name: {item.productName}</Typography>
                        <Typography className={classes.details} variant="body1">Price: {currency(item.price)}</Typography>
                        <Typography className={classes.details} variant="body1">Qty: {item.quantity}</Typography>
                    </Grid>


                    <Grid container justify="center">
                        <Button onClick={handleEditModal} className={classes.editBtn} variant="contained">
                            Edit<EditIcon />
                        </Button>
                        <Button onClick={handleDeleteModal} className={classes.deleteBtn} variant="text"><DeleteForeverIcon /></Button>
                    </Grid>
                </Collapse>

            </CardActionArea>
        </Card >
    )
}

export default Cards