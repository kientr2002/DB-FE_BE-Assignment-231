import {Fragment} from 'react'
import Header from '../Header/index'
import Navbar from '../Navbar/index'
const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <Navbar />
                {props.children}
        </Fragment>
    )
}
export default Layout;