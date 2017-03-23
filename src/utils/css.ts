
type Falsy = false | 0 | null | undefined

function addDot(className: string) {
  return className[0] === '.'
    ? className
    : '.' + className
}

export function merge(...classes: Array<string | Falsy>) {
  return classes.filter(Boolean).map(addDot).join(' ')
}
