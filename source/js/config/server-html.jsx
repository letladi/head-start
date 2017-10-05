import React from 'react'
import ReactDOMServer from 'react-dom/server'
import PropTypes from 'prop-types'
import { APPLICATION_NAME } from 'constants/names'
import { outputFiles } from '../../../webpack/output-files'

const ServerHtml = ({ appHtml, dehydratedState }) => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0' />

      <title>{APPLICATION_NAME}</title>

      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css' />
      <link rel='stylesheet' href={`/${ outputFiles.css }`} />
    </head>
    <body>
      <div
        id='root'
        dangerouslySetInnerHTML={{ __html: appHtml }} // eslint-disable-line
      />
      <script
        dangerouslySetInnerHTML={{ __html: `var __DEHYDRATED_STATE = ${dehydratedState};` }} // eslint-disable-line
      />
      <script type='text/javascript' src={`/${ outputFiles.vendor }`} />
      <script type='text/javascript' src={`/${ outputFiles.client }`} />
    </body>
  </html>
)

ServerHtml.propTypes = {
  appHtml: PropTypes.string,
  dehydratedState: PropTypes.string,
}

const getServerHtml = (appHtml, dehydratedState = null) => {
  return `<!doctype html>${ ReactDOMServer.renderToString(<ServerHtml appHtml={appHtml} dehydratedState={dehydratedState} />) }`
}

export default getServerHtml
