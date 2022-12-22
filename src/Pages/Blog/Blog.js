import React from "react";
import useTitle from "../../Hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="sm:mx-32 mx-2 mb-5">
      {/* Question 1 */}
      <div className="mt-3">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  ">
          Difference between SQL and NoSQL
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full text-sm sm:text-md">
            <thead>
              <tr>
                <th>SQL</th>
                <th>NoSQL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                <td>Non-relational or distributed database system.</td>
              </tr>

              <tr className="active">
                <td>
                  These databases have fixed or static or predefined schema
                </td>
                <td>They have dynamic schema</td>
              </tr>

              <tr>
                <td>
                  These databases are not suited for hierarchical data storage.
                </td>
                <td>
                  These databases are best suited for hierarchical data storage.
                </td>
              </tr>
              <tr className="active">
                <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Question 2 */}
      <div className="mt-8">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  ">
          What is JWT, and how does it work?
        </h1>
        <h3 className="text-lg sm:text-xl  font-semibold">What is JWT ?</h3>
        <p className="sm:text-lg">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <h3 className="text-lg sm:text-xl  font-semibold mt-3">
          How does it work ?
        </h3>
        <p className="sm:text-lg">
          Authentication server verifies the credentials and issues a jwt signed
          using either a secret salt or a private key. User's Client uses the
          JWT to access protected resources by passing the JWT in HTTP
          Authorization header. Resource server then verifies the authenticity
          of the token using the secret salt/ public key.
        </p>
      </div>
      {/* Question 3 */}
      <div className="mt-8">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  ">
          What is the difference between javascript and NodeJS?
        </h1>
        <p className="sm:text-lg">
          JavaScript is a simple programming language that can be used with any
          browser that has the JavaScript Engine installed. Node. js, on the
          other hand, is an interpreter or execution environment for the
          JavaScript programming language.
        </p>
      </div>
      {/* Question 4 */}
      <div className="mt-8">
        <h1 className="text-xl sm:text-3xl font-serif font-semibold mb-3  ">
          How does NodeJS handle multiple requests at the same time?
        </h1>

        <p className="sm:text-lg">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
