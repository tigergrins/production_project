type Mods = Record<string, string | boolean>

export function classNames(className: string, mods: Mods = {}, additional: string[] = []) {
  return [
    className,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
  ].join(' ')
}
