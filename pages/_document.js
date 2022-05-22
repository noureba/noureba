import React from 'react'
import {Html, NextScript, Main , Head} from 'next/document'

function document() {
  return (
    <Html lang="en">
        <Head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Front-end developer | noureddine bachikh</title>
        </Head>
        <div>
            <Main/>
            <NextScript/>
        </div>
    </Html>
  )
}

export default document;