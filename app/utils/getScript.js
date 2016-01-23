export default function getScript(source) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    const prior = document.getElementsByTagName('script')[0]
    script.async = 1
    prior.parentNode.insertBefore(script, prior)
    script.onerror = reject
    script.onload = script.onreadystatechange = (_, isAbort) => {
      if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
        script.onload = script.onreadystatechange = null
        script = undefined

        if (!isAbort) {
          resolve()
        }
      }
    }

    script.src = source
  })
}
