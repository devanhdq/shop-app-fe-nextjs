import * as React from 'react';

// import Material-UI
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// import Next
import {NextPage} from "next";

// import React Hook Form
import {Controller, useForm} from "react-hook-form"

// import Yup
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import CustomTextField from "src/components/text-field";

type TypeProps = {};

const LoginPage: NextPage<TypeProps> = () => {
    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().required("Password is required"),
    })
    const {
        handleSubmit,
        control,
        formState: {errors}
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })
    const onSubmit = (data: {
        email: string;
        password: string;
    }) => {
        console.log(data)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete={'false'}>
                    <Box>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <CustomTextField
                                    required
                                    fullWidth
                                    label="Email"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="Enter your email"
                                    error={Boolean(errors?.email)}
                                />
                            )}
                            name="email"
                        />
                        {errors.email && <Typography>{errors?.email?.message}</Typography>}
                    </Box>
                    <Box>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({field: {onChange, onBlur, value}}) => (
                                <CustomTextField
                                    required
                                    fullWidth
                                    label="Password"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    placeholder="Enter your password"
                                    error={Boolean(errors?.password)}
                                />
                            )}
                            name="password"
                        />
                        {errors.password && <Typography>{errors?.password?.message}</Typography>}
                    </Box>


                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default LoginPage;