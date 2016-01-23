const pretexts = ['в', 'на', 'для', 'и']

export default function typographify(text) {
  const textWithQuotes = text
    .replace(/(\W)"/, '$1«')
    .replace(/"(\W)/, '»$1')

  return pretexts.reduce(
    (t, pretext) => t.replace(new RegExp(` (${pretext}) `, 'ig'), `&nbsp;$1&nbsp;`),
    textWithQuotes,
  )
}
