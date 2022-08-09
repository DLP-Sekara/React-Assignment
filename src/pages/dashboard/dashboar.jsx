import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component,Fragment } from "react";
import { styleSheet } from "./dashboardStyle";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../components/common/Button";
import Grid from '@mui/material/Grid';
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { classes } = this.props
        return (
            <div className={classes.container}>
                <div className={classes.title__container}>
                    <GDSEButton
                        variant="contained"
                        label="Dashboard"
                        onClick={() => {

                        }}
                    />
                    <GDSEButton
                        variant="contained"
                        label="Cart"
                        onClick={() => {

                        }}
                    />
                    <GDSEButton
                        variant="contained"
                        label="Product"
                        color="primary"
                        onClick={() => {

                        }}
                    />
                    <GDSEButton
                        variant="contained"
                        label="User"
                        onClick={() => {

                        }}
                    />
                    <Typography variant="h6" className={classes.title__body}>
                       Lahiru
                    </Typography>
                </div>
                <div className={classes.form__container}>
                    <div className={classes.left__form}>
                        <Typography variant="h3" className={classes.productTxt}>
                            Product
                        </Typography>
                        <Typography variant="h3" className={classes.productTxt}>
                           20
                        </Typography>
                    </div>
                    <div className={classes.right__form}>
                        <Typography variant="h3" className={classes.cartTxt}>
                            Cart
                        </Typography>
                        <Typography variant="h3" className={classes.cartTxt}>
                            30
                        </Typography>
                    </div>
                    <div className={classes.center__form}>
                        <Typography variant="h3" className={classes.userTxt}>
                            User
                        </Typography>
                        <Typography variant="h3" className={classes.userTxt}>
                            40
                        </Typography>
                    </div>
                </div>
            </div >
        )
    }
}
export default withStyles(styleSheet)(Dashboard)

