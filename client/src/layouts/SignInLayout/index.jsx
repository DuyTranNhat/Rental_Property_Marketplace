
import { Fragment } from "react";
import Header from "~/components/Header";

const SignInLayout = ({ children }) => {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
};

export default SignInLayout;