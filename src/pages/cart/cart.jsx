import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./cartStyle";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../components/common/Button"

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather', year: 1972 },
                { label: 'The Godfather: Part II', year: 1974 },
                { label: 'The Dark Knight', year: 2008 },
                { label: '12 Angry Men', year: 1957 },
            ]
        }

    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className={classes.cartPage}>
                <Typography variant="h4" className={classes.pageTopic1}>
                    Cart Manage
                </Typography>
                <div  className={classes.formArea}>

                    <div   className={classes.userName2}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="User Name" />}
                            getOptionLabel={
                                (option) => option.label
                            }
                            onChange={(e, value) => {
                                console.log(value.label + " " + value.year);
                            }}
                            size="small"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div   className={classes.productName2}>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={this.state.top100Films}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Product Name" />}
                            getOptionLabel={
                                (option) => option.label
                            }
                            onChange={(e, value) => {
                                console.log(value.label + " " + value.year);
                            }}
                            size="small"
                            style={{ width: '100%' }}
                        />
                    </div>
                    <div   className={classes.date2} >
                        <TextField id="outlined-basic" placeHolder="Date" label="Date" variant="outlined" size="small"
                                   style={{width: '100%'}} />
                    </div>
                    <div   className={classes.qty2} >
                        <TextField id="outlined-basic" placeHolder="Qty" label="Quantity" variant="outlined" size="small"
                                   style={{width: '100%'}}
                        />
                    </div>
                        <GDSEButton className={classes.saveBtn1} size="small" variant="contained" label="save"/>
                        <GDSEButton className={classes.saveBtn2} size="small" variant="contained" color={"warning"} label="clear"/>
                </div>
                </div>
            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(Cart)