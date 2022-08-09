import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./userStyle";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../components/common/Button"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    Name: string,
    Username: string,
    Email: string,
    City: string,
    Contact: string,
) {
    return { Name, Username, Email, City, Contact };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
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
                <div className={classes.userPage}>
                    <Typography variant="h4" className={classes.pageTopic1}>
                        User Registration
                    </Typography>
                    <div  className={classes.formArea}>
                        <div   className={classes.firstName}>
                            <TextField id="outlined-basic" placeHolder="First name" label="First name" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.lastName}>
                            <TextField id="outlined-basic" placeHolder="Last Name" label="Last Name" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.newUsername}>
                            <TextField id="outlined-basic" placeHolder="Username" label="Username" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.newPassword}>
                            <TextField id="outlined-basic" placeHolder="Password" type={"password"} label="Password" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.email}>
                            <TextField id="outlined-basic" placeHolder="Email" label="Email" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.city}>
                            <TextField id="outlined-basic" placeHolder="City" label="city" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.street}>
                            <TextField id="outlined-basic" placeHolder="street" label="street" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.streetNo}>
                            <TextField id="outlined-basic" placeHolder="Street No" label="Street No" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.ZipCode}>
                            <TextField id="outlined-basic" placeHolder="Zip Code" label="Zip Code" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.latvalue}>
                            <TextField id="outlined-basic" placeHolder="Lat Value" label="Lat Value" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.longvalue}>
                            <TextField id="outlined-basic" placeHolder="long Value" label="Long Value" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <div   className={classes.mobileNo}>
                            <TextField id="outlined-basic" placeHolder="Mobile No" label="mobile No" variant="outlined" size="small"
                                       style={{width: '100%'}} />
                        </div>
                        <GDSEButton className={classes.saveBtn1} size="small" variant="contained" label="save"/>
                        <GDSEButton className={classes.saveBtn2} size="small" variant="contained" color={"warning"} label="clear"/>

                        <div className={classes.userTable}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Username</TableCell>
                                            <TableCell align="right">Email</TableCell>
                                            <TableCell align="right">City</TableCell>
                                            <TableCell align="right">Contact</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.Username}</TableCell>
                                                <TableCell align="right">{row.Email}</TableCell>
                                                <TableCell align="right">{row.City}</TableCell>
                                                <TableCell align="right">{row.Contact}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>

                </div>
            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(Cart)