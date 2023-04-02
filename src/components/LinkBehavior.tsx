import * as React from 'react'
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps
} from 'react-router-dom';

const LinkBehavior = React.forwardRef<
    HTMLAnchorElement,
    Omit<RouterLinkProps, 'to'> & { to: RouterLinkProps['to']}
>((props, ref) => {
    return <RouterLink ref={ref} {...props} />;
});

export default LinkBehavior
