import React, {Fragment} from 'react';

//function Header(props) { se le pasan argumentos props
function Header({titulo}) {
    return(
        <Fragment>
            <h1>{ titulo }</h1>
        </Fragment>
    )
}

/*const Header2 = ({titulo}) => {
    return (
        <Fragment>
        <h1>{ titulo }</h1>
        </Fragment>
    );
}*/

export default Header;