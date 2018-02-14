import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {
    Button,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    Paper,
    TextField,
    Typography
} from "material-ui";
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class LoginView extends Component {

    state = {
        name: '',
        password: '',
        showPassword: false,
    };

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword});
    };

    render() {
        const {classes} = this.props;

        return (
            <form name="f" action="/login" method="POST" noValidate autoComplete="off">
                <Paper className={classes.root} elevation={4}>
                    <Typography variant="headline" component="h3">
                        Login
                    </Typography>
                    <TextField
                        id="name"
                        label="Name"
                        type={'text'}
                        name={'username'}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        style={{width: '100%'}}
                    />
                    <FormControl style={{width: '100%'}}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="adornment-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            name={'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={this.handleClickShowPassword}
                                        onMouseDown={this.handleMouseDownPassword}
                                    >
                                        {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <Button
                        variant="raised"
                        color="primary"
                        style={{width: '100%'}}
                        type={'submit'}
                    >
                        Login
                    </Button>
                </Paper>
            </form>
        );
    }
}

LoginView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginView);
