import auth0 from 'auth0-js'
const auth0Client = new auth0.WebAuth({
    domain: 'houyunting.us.auth0.com',
    audience: 'https://houyunting.us.auth0.com/userinfo',
    clientID: 'OaZnsSYH4IXXY3za6gu1TavdObFuXqOX',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile email'
})

export function handleAuthentication() {
    return new Promise((resolve, reject) => {
        auth0Client.parseHash((err, authResult) => {
            if (err) {
                return reject(err)
            }
            if (!authResult || !authResult.idToken) {
                return reject(err)
            }
            const idToken = authResult.idToken
            const profile = authResult.idTokenPayload

            const expiresAt = authResult.idTokenPayload.exp * 1000
            resolve({
                authenticated: true,
                idToken,
                profile,
                expiresAt
            })
        })
    })
}

export function signIn() {
    auth0Client.authorize()
}

export function signOut() {
    auth0Client.logout({
        returnTo: 'http://localhost:3000',
        clientID: 'OaZnsSYH4IXXY3za6gu1TavdObFuXqOX'
    })
}
