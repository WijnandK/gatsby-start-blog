import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Header from "../components/header"

export default () => {
  const data = useStaticQuery(graphql`
    {
      allFile {
        totalCount
        edges {
          node {
            relativePath
            size
            birthTime
            extension
          }
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div>
        <h3>Image file data</h3>
        <table>
          <thead>
            <tr>
              <th>Relative path</th>
              <th>Size of Image</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.relativePath}</td>
                <td>{node.size}</td>
                <td>{node.extension}</td>
                <td>{node.birthTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        Hellooo from page 33333 <h1> PAGE 3 </h1>
      </div>
    </>
  )
}
