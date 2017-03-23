import { svg } from '@cycle/dom'

export function TomskJSLogo() {
  const attrs = {
    width: 200,
    height: 200,
    viewBox: '0 0 200 200',
  }
  return svg({ attrs, props: { innerHTML: require('./logo.svg') } })
}
