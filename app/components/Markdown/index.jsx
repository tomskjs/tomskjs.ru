import React, { PropTypes } from 'react'
import Link from 'components/Link'
import { default as typogr } from 'utils/typographify'


import MDReactComponent from 'markdown-react-js'

function handleIterate(Tag, props, children) {
  const { href } = props // eslint-disable-line

  if (Tag === 'a') {
    if (!/^https?:\/\//.test(href) && !/^\/\//.test(href)) {
      return <Link {...{ ...props, to: href }}>{children}</Link>
    }
    return <Link target='_blank' {...props}>{children}</Link>
  }

  return <Tag {...props}>{children}</Tag>
}

export default function Markdown({ children, typographify }) {
  return <MDReactComponent text={typographify ? typogr(children) : children} onIterate={handleIterate} />
}

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
  typographify: PropTypes.bool,
}

Markdown.defaultProps = {
  typographify: false,
}
