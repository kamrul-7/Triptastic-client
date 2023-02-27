import React from "react";
import { Tooltip } from "antd";

const Blog: React.FC = () => (
    <div className="pt-32 text-black mx-8">
        <Tooltip>
            <span className="text-white text-xl lg:text-2xl font-bold">1. Difference between SQL and NoSQL</span>
        </Tooltip>

        <div className="bg-gray-100 rounded-md mb-12"
            style={{
                border: "1px solid black",
                marginTop: 64,
                overflowY: "scroll",
                height: 300
            }}
        >
            <div style={{ height: "180%", padding: 32 }}>
                <Tooltip>
                    <span>SQL (Structured Query Language) databases are relational databases that store data in tables with predefined schemas. SQL databases are based on a set of rules for interacting with the database called ACID (Atomicity, Consistency, Isolation, Durability), which ensures that the data is accurate and consistent. SQL databases are best suited for applications that require complex data relationships, transactions, and consistency. Examples of SQL databases include MySQL, Oracle, and Microsoft SQL Server.</span>
                    <p className="mt-8">NoSQL (Not only SQL) databases, on the other hand, are non-relational databases that store data in various formats such as key-value pairs, document-based, or graph-based models. NoSQL databases are highly scalable, flexible, and designed to handle large amounts of unstructured or semi-structured data. NoSQL databases do not adhere to the ACID rules and are best suited for applications that require high-performance, scalability, and agility. Examples of NoSQL databases include MongoDB, Cassandra, and Couchbase.

                    </p>
                </Tooltip>
            </div>
        </div>


        <Tooltip>
            <span className="text-white text-xl lg:text-2xl font-bold">2. What is JWT, and how does it work?</span>
        </Tooltip>

        <div className="bg-gray-100 rounded-md mb-12"
            style={{
                border: "1px solid black",
                marginTop: 64,
                overflowY: "scroll",
                height: 300
            }}
        >
            <div style={{ height: "180%", padding: 32 }}>
                <Tooltip>
                    <span>JWT stands for JSON Web Token, which is an open standard for securely transmitting information between parties as a JSON object. JWTs are commonly used for authentication and authorization in web applications.

                        <p className="mt-8">
                            A JWT consists of three parts: the header, the payload, and the signature. The header contains information about the type of token and the hashing algorithm used to sign the token. The payload contains the data being transmitted, such as the user ID or any other metadata related to the user or the request. The signature is created by hashing the header and payload using a secret key that is known only to the server.
                        </p>

                        The process of creating and verifying a JWT involves the following steps:

                        <p className="mt-8"> The client sends a request to the server with its credentials.
                            The server verifies the credentials and creates a JWT, which contains the user ID and any other necessary information.
                            The server sends the JWT back to the client.
                            The client stores the JWT, typically in a cookie or local storage.
                            For each subsequent request, the client sends the JWT along with the request.
                            The server verifies the JWT by checking the signature and decoding the payload to retrieve the user ID and any other necessary information.
                            JWTs are useful because they allow for stateless authentication and can be easily transmitted between different systems and platforms. However, it is important to ensure that the secret key used to sign the token is kept secure and that the payload does not contain any sensitive information that could be exploited by an attacker.</p>



                    </span>

                </Tooltip>
            </div>
        </div>
        <Tooltip>
            <span className="text-white text-xl lg:text-2xl font-bold">3. What is the difference between javascript and NodeJS?</span>
        </Tooltip>

        <div className="bg-gray-100 rounded-md mb-12"
            style={{
                border: "1px solid black",
                marginTop: 64,
                overflowY: "scroll",
                height: 300
            }}
        >
            <div style={{ height: "180%", padding: 32 }}>
                <Tooltip>
                    <span>JavaScript and Node.js are both programming languages used for web development, but they have different use cases and environments.

                        JavaScript is a client-side scripting language that runs in the browser. It is primarily used for creating interactive web pages and user interfaces, adding functionality to web applications, and manipulating the Document Object Model (DOM) to change the content and behavior of web pages.</span>

                    <p className="mt-8">Node.js, on the other hand, is a server-side JavaScript runtime environment. It allows developers to write server-side code using JavaScript, which can handle HTTP requests and responses, perform I/O operations, and interact with databases and other services. Node.js is built on the Chrome V8 JavaScript engine and provides an event-driven, non-blocking I/O model that makes it highly scalable and efficient.</p>

                    In summary, JavaScript is a client-side scripting language used for web development in the browser, while Node.js is a server-side runtime environment that allows developers to use JavaScript to build scalable, efficient, and performant server-side applications.
                    Regenerate response

                </Tooltip>
            </div>
        </div>
        <Tooltip>
            <span className="text-white text-xl lg:text-2xl font-bold">4. How does NodeJS handle multiple requests at the same time?</span>
        </Tooltip>

        <div className="bg-gray-100 rounded-md mb-12"
            style={{
                border: "1px solid black",
                marginTop: 64,
                overflowY: "scroll",
                height: 300
            }}
        >
            <div style={{ height: "200%", padding: 32 }}>
                <Tooltip>
                    <span>Node.js uses an event-driven, non-blocking I/O model to handle multiple requests at the same time. This means that Node.js can handle many concurrent connections without blocking the execution of other code.

                        Node.js uses an event loop to process requests asynchronously. When a request is received, Node.js adds it to a queue and continues to process other requests. As each request is processed, Node.js checks the queue for any pending requests and processes them in the same way.
                    </span>
                    <p className="mt-8">
                        The event loop in Node.js works by listening for events and executing callback functions when those events occur. This allows Node.js to handle I/O operations asynchronously, without blocking the execution of other code. For example, when a request is made to a database, Node.js will not wait for the database to respond before moving on to the next request. Instead, Node.js will register a callback function to be executed when the database responds, and continue to process other requests in the meantime.
                    </p>
                    In addition to the event loop, Node.js also uses a thread pool to handle CPU-bound tasks. CPU-bound tasks are tasks that require significant computational resources, such as complex mathematical calculations. When a CPU-bound task is encountered, Node.js will delegate the task to a separate thread in the thread pool, allowing the main event loop to continue processing other requests.

                    In summary, Node.js uses an event-driven, non-blocking I/O model and a thread pool to handle multiple requests at the same time. This allows Node.js to handle many concurrent connections without blocking the execution of other code, making it highly scalable and efficient.
                </Tooltip>
            </div>
        </div>
    </div >
);

export default Blog;