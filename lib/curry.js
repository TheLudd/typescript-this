import _apply from './_apply'
import _concat from './_concat'
import _slice from './_slice'

/**
 * Curries a function according to the following rules:
 *
 * Given that `f` is a function that takes `n` arguments, if the curried `f` is called with:
 *   * **fewer than n agruments**: return a curried function that accepts the remaining arguments
 *   * **exactly n arguments**: apply the function to the arguments and return the result,
 *     if the result is a function, apply curry to it
 *   * **more than n arguments**: apply the function to the first n arguments,
 *     assume the result is a function, curry it and apply it to the remaining arguments. If the result
 *     of applying f to the first n arguments is not a function, it is considered an error.
 *
 * @function curry
 * @arg f {function} The function to curry
 *
 */
function curry (f) {
  const length = f.length
  return length === 0 ? f : curryOfLength(length, f)
}

function curryOfLength (length, f) {
  const name = f.name || 'anonymous'
  function curried (...args) {
    const diff = length - args.length
    if (args.length === 0) {
      return curried
    } else if (diff === 0) {
      const result = _apply(f, args)
      return isFunction(result) ? curry(result) : result
    } else if (diff > 0) {
      const newFn = function (...innerArgs) {
        const fullArgs = _concat(args, innerArgs)
        return _apply(f, fullArgs)
      }
      return curryOfLength(diff, newFn)
    } else {
      const neededArgs = _slice(0, length, args)
      const remainingArgs = _slice(length, args.length, args)
      const result = _apply(f, neededArgs)
      return _apply(curry(result), remainingArgs)
    }
  }
  return curried
}

function isFunction (v) {
  return typeof v === 'function'
}

export default curry
