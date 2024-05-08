import {NextPage} from "next";
import LoginPage from "src/view/pages/login";

type TypeProps = {}
const Login: NextPage<TypeProps> = () => {
    return (
        <LoginPage/>
    );
};

export default Login;