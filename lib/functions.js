import curry from './curry'

// (a -> b) -> [a] -> [b]
export const map = curry((fn, list) => {
  const out = []
  for (const item of list) {
    out.push(fn(item))
  }
  return out
})

// Number -> Number -> Number
export const add = curry((a, b) => a + b)

// Number -> Boolean
export const isEven = curry((n) => n % 2 === 0)

// (a -> Boolean) -> [a] -> [a]
export const filter = curry((predicate, list) => {
  const out = []
  for (const item of list) {
    if (predicate(item)) {
      out.push(item)
    }
  }
  return out
})
