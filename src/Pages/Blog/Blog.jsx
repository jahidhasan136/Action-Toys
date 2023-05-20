import UseTitles from "../../Share/Hooks/UseTitles";


const Blog = () => {
    UseTitles('Blogs')
    return (
        <div className="my-24 max-w-[1240px] space-y-4 mx-auto p-10">
            <div>
                <h1 className="font-bold"><span className="text-red-500 text-2xl">1.Qus:</span> What is an access token and refresh token? How do they work and where should we store them on the client-site?</h1>
                <div className="ml-5 mt-2 text-justify">
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
            <div>
                <h1 className="font-bold"><span className="text-red-500 text-2xl">2.Qus:</span> Compare SQL and NoSQL databases?</h1>
                <div className="ml-5 mt-2 text-justify">
                    <p><spa className="text-green-400 font-bold text-xl">Ans: </spa>
                        Compare between SQL and NoSQL database </p>
                    <div className="ml-5 space-y-3">
                        <li>SQL database are relational, and NoSQL databases are non-relational.</li>
                        <li>SQL database use structured query language (SQL) and have a predefined schema. NoSQL database have dynamic schemas forunstructured data.</li>
                        <li>SQL database are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stored.</li>
                        <li>SQL databases are better for multi-row transaction, while NoSQL is better for unstructured data like documents or JSON.</li>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="font-bold"><span className="text-red-500 text-2xl">3.Qus:</span> What is express js? What is Nest JS?</h1>
                <div className="ml-5 mt-2 text-justify">
                    <p><spa className="text-green-400 font-bold text-xl">Ans: </spa></p>
                    <div className="ml-5 space-y-3">
                        <div>
                            <p>Express js</p>
                            <li>
                                Express.js is a minimal and flexible web application framework for Node.js. It provides a lightweight set of features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, and managing middleware. It is known for its simplicity, flexibility, and extensive ecosystem of middleware and plugins. Express.js allows developers to quickly build web applications and RESTful APIs using JavaScript on the server side.
                            </li>
                        </div>
                        <div>
                            <p>Next js</p>
                            <li>
                            Nest.js, on the other hand, is a progressive Node.js framework for building scalable and maintainable server-side applications. It is built on top of Express.js and provides an additional layer of abstraction and structure to create robust and scalable applications. Nest.js is heavily influenced by Angular and adopts many of its concepts such as decorators, modules, and dependency injection. It encourages the use of TypeScript, which adds static typing and other advanced features to JavaScript.
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="font-bold"><span className="text-red-500 text-2xl">4.Qus:</span> What is MongoDB aggregate and how does it work?</h1>
                <div className="ml-5 mt-2 text-justify">
                    <p><spa className="text-green-400 font-bold text-xl">Ans: </spa> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. While there are other methods of obtaining aggregate data in MongoDB, the aggregation framework is the recommended approach for most work.</p>
                    <div className="ml-5 mt-3 space-y-3">
                            <li>
                                <span className="border border-red-500 hover:bg-red-500 hover:text-white px-2 rounded">$match</span> stage - filters those documents we need to work with, those that fit our needs
                            </li>
                            <li>
                                <span className="border border-red-500 hover:bg-red-500 hover:text-white px-2 rounded">$group</span> stage - does the aggregation job
                            </li>
                            <li>
                                <span className="border border-red-500 hover:bg-red-500 hover:text-white px-2 rounded">$sort</span> stage - sorts the resulting documents the way we require (ascending of descending)
                            </li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;