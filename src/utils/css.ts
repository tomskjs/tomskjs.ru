
type Falsy = false | 0 | null | undefined | ''

function addDot(className: string) {
  return className[0] === '.'
    ? className
    : '.' + className
}

export function dotify<T extends any>(classes: T): T {
  return Object.keys(classes).reduce((classesMap, className) => {
    return { ...classesMap, [className]: addDot(classes[className]) }
  }, {} as any)
}

export function merge(...classes: Array<string | Falsy>) {
  return classes.filter(Boolean).map(addDot).join('')
}
