import {Fragment} from 'react'
import Header from '../Header/index'
import Navbar from '../Navbar/index'
const LoginLayout = (props) => {
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}
export default LoginLayout;