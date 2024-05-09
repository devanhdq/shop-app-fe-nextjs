// import React
import {useState} from 'react';

// import Material-UI
import {
    Box,
    Button,
    Checkbox,
    CssBaseline,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    Typography,
    useTheme
} from "@mui/material";

// import Next
import {NextPage} from "next";
import Image from "next/image";

// import React Hook Form
import {Controller, useForm} from "react-hook-form"

// import Yup
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"

//Custom Icon
import CustomIcon from "src/components/Icon";
import CustomTextField from "src/components/text-field";

// Images
import LoginLight from "/public/images/login-light.png";

type TypeProps = {};

const LoginPage: NextPage<TypeProps> = () => {
    // state
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [isRemember, setIsRemember] = useState<boolean>(false)

    const theme = useTheme()

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

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            backgroundColor: theme.palette.background.paper,
            padding: "40px",
            minWidth: "50vw"
        }}>
            <Box
                display={{
                    xs: "none",
                    md: "flex"
                }}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50%",
                    height: "100%",
                    borderRadius: "20px",
                    backgroundColor: theme.palette.customColors.bodyBg
                }}>
                <Image
                    src={LoginLight}
                    alt="Login image"
                    style={{
                        height: "auto",
                        width: "auto",
                    }}
                />

            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1

            }}>
                <CssBaseline/>
                <Box>
                    <Typography component="h1" variant="h5">
                        Login
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
                                        helperText={errors?.email?.message}
                                    />
                                )}
                                name="email"
                            />
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
                                        helperText={errors?.password?.message}
                                        type={showPassword ? 'text' : 'password'}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton edge="end" onClick={handleShowPassword}>
                                                        {showPassword
                                                            ? <CustomIcon icon="gridicons:visible"/>
                                                            : <CustomIcon icon="gridicons:not-visible"/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                )}
                                name="password"
                            />
                        </Box>

                        <Box sx={{
                            mt: 2,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name={"remember"}
                                        checked={isRemember}
                                        onChange={(e) => setIsRemember(e.target.checked)}
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Box>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                {"Don't have an account? "}
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;