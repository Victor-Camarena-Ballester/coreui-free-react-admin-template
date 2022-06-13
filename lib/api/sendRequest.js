import getRootUrl from './getRootUrl';
import { setCookies, getCookies, removeCookies } from 'cookies-next';

export default async function sendRequest(path, opts = {}) {
 
    let authToken = getCookies('eccauthToken')?.eccauthToken ? getCookies('eccauthToken')?.eccauthToken : '';

    const headers = Object.assign({}, opts.headers || {}, {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + authToken,
        'X-ShopId' : '1'
    });

    const response = await fetch(
        `${path}`,
        Object.assign({ method: 'POST', credentials: 'same-origin' }, opts, { headers }),
    );
    
    if (!response.ok) {
        if (response.status === 401 || response.status === 110 ) {
            removeCookies('ecc_auth_email');
            removeCookies('eccauthToken');
            window.location.href='/auth/login';
        }
        /*Here we should use sentry!!! */
        const message = `An error has occured: ${response.status}`;
        console.log(response)
        throw new Error(message);
    }else{
        return await response.json();
    }        
}