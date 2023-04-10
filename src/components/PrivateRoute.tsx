import * as React from 'react'
import { useAuth } from '../providers/AuthContext'
import { PrivateRouteProps } from '../types/utils';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, authorize = null, unauthorized = null }) => {
    const { state: { role } } = useAuth();
    const [authorized, setAuthorized] = React.useState<boolean|null>(null);

    React.useEffect(() => {
        if (authorize) {
            const authorizedRoles = authorize.split(',');
            const isAuthorized = authorizedRoles.includes(role);

            setAuthorized(isAuthorized)
        } else {
            setAuthorized(null)
        }
    }, [authorize])

    if (authorized == null) return null;

    if (authorized == false) return unauthorized;

    return children;
};

export default PrivateRoute
