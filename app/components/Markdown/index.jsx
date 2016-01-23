import React, { PropTypes } from 'react'
import Link from 'components/Link'


import MDReactComponent from 'markdown-react-js'

function handleIterate(Tag, props, children) {
  const { href } = props // eslint-disable-line

  if (Tag === 'a') {
    if (!/^https?:/.test(href)) {
      return <Link {...{ ...props, to: href }}>{children}</Link>
    }
    return <Link {...props}>{children}</Link>
  }

  return <Tag {...props}>{children}</Tag>
}


export default function Markdown({ children }) {
  return <MDReactComponent text={children} onIterate={handleIterate} />
}

Markdown.propTypes = {
  children: PropTypes.node,
}
