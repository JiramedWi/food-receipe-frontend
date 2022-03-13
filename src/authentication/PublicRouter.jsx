import { Navigate } from 'react-router-dom';
import { useContextAuthManager } from '.';

const PublicRouter = ({path, children, ...props}) => {
    const {isLoggedIn, privatePath} = useContextAuthManager()

    if(!privatePath) {
        throw new Error('You need to provide a private path for AuthManager')
    }

    if(isLoggedIn) {
        return <Navigate to={privatePath} />
    }

    return children
}

export default PublicRouter