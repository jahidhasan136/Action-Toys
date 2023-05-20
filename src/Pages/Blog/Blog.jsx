

const Blog = () => {
    return (
        <div className="my-24 max-w-[1240px] mx-auto p-10">
            <div>
                <h1 className="font-bold"><span className="text-red-500 text-2xl">1.Qus:</span> What is an access token and refresh token? How do they work and where should we store them on the client-site?</h1>
                <div className="ml-5 text-justify">
                    <p><spa className="text-green-400 font-bold text-xl">Ans: </spa>An access token and a refresh token are both components of an authentication system commonly used in web applications.</p>
                    <div className="ml-5 space-y-3">
                    <li>Access Token: <br />
                        An access token is a credential that is issued by an authentication server to a client (such as a web browser or a mobile app) after successful authentication. It is a string of characters that represents the clients authorization to access protected resources on a server. Access tokens are time-limited and typically have a relatively short expiration time, such as a few minutes to a few hours.

                        When a client makes a request to a server to access a protected resource, it includes the access token in the request. The server then verifies the token to determine if the client has the necessary permissions to access the requested resource. If the access token is valid and the client is authorized, the server processes the request and returns the requested data.</li>
                    <li>
                        Refresh Token: <br />
                        A refresh token is also issued by the authentication server, along with the access token, during the initial authentication process. The refresh token has a longer expiration time compared to the access token, typically lasting several days to weeks. It is used to obtain a new access token when the current one expires.

                        When the access token expires, the client can make a request to the server using the refresh token. The server verifies the refresh token and, if it is valid, issues a new access token without requiring the user to re-authenticate. This process allows the client to maintain an active session without frequently prompting the user for their credentials.
                    </li>
                    <li>
                        Storage on the Client-Side: <br />
                        Both the access token and refresh token should be securely stored on the client-side to prevent unauthorized access. Storing them in a secure manner is crucial to protect user data and prevent token leakage.

                        The recommended approach is to store the access token in a client-side storage mechanism such as browser cookies or browser session storage. These storage options provide some level of built-in security and can be accessed by the client application when making API requests.

                        On the other hand, the refresh token should be stored in a more secure manner. It should not be accessible to client-side code or scripts. The recommended approach is to store the refresh token in an HTTP-only secure cookie. HTTP-only cookies cannot be accessed by JavaScript, reducing the risk of token theft through cross-site scripting (XSS) attacks.

                        By securely storing the access token and refresh token on the client-side, you can ensure the integrity of the authentication process and protect user data.
                    </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;