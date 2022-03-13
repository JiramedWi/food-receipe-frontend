import { Navigate } from 'react-router-dom';
import { useContextAuthManager } from '.';

const PrivateRouter = ({path, children, ...props}) => {
    const {isLoggedIn, publicPath} = useContextAuthManager()

    if(!publicPath) {
        throw new Error('You need to provide a public path for AuthManager')
    }

    if(!isLoggedIn) {
        return <Navigate to={publicPath} />
    }

    return children
}

export default PrivateRouter