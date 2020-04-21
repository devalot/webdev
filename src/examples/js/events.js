// section 1
{
  document.getElementById('click-type')
    .addEventListener('click', () => { console.log('clicked') })

  document.getElementById('change-type')
    .addEventListener('change', (e) => {
      console.log('change', e.target.value)
    })

  document.getElementById('checked-type')
    .addEventListener('change', (e) => {
      console.log('change', e.target.checked)
    })

  document.getElementById('keydown-type')
    .addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        console.log('=== You Pressed Enter! ===')
      } else {
        console.log('key', e.key, 'keydown', e.target.value)
      }
    })

  document.getElementById('submit-type')
    .addEventListener('submit', (e) => {
      e.preventDefault()
      console.log('submitting')
      const data = new FormData(e.currentTarget)
      for (const [name, value] of data.entries()) {
        console.log(`${name} = ${value}`)
      }
    })
}

// section 2
{
  document.getElementById('add-option')
    .addEventListener('click', () => {
      const ul = document.getElementsByTagName('ul')[0]
      const li = document.createElement('li')
      li.innerText = 'Option 4'
      ul.appendChild(li)
    })

  document.getElementById('add-to-li')
    .addEventListener('click', () => {
      // <<: multiple-handlers
      Array.from(document.getElementsByTagName('li'))
        .forEach((li, i) => {
          li.addEventListener('click', () => {
            console.log(`Clicked option ${i + 1}`)
          })
        })
      // :>>
    })

  document.getElementById('add-to-parent')
    .addEventListener('click', () => {
      // <<: parent-delegation
      const ul = document.getElementsByTagName('ul')[0]
      ul.addEventListener('click', (e) => {
        console.log(ul === e.currentTarget) // true
        console.log(`Clicked ${e.target.innerText}`)
      })
      // :>>
    })
}

// section 3
{
  const update = (id) => (e) => {
    document.getElementById(id).innerText = e.target.value
  }

  const updateDebounced = debounce(update('debounced'), 1000)
  const updateThrottled = throttle(update('throttled'), 1000)

  document.getElementById('event-limiting').addEventListener('keyup', update('unlimited'))
  document.getElementById('event-limiting').addEventListener('keyup', updateDebounced)
  document.getElementById('event-limiting').addEventListener('keyup', updateThrottled)
}

const exampleLimitingCode = () => {
  // <<: event-limiting
  const throttledHandler = throttle(handleFn, 300)
  const debouncedHandler = debounce(handleFn, 300)
  // :>>
}

// Copied implementation of `debounce` from
// https://raw.githubusercontent.com/component/debounce/master/index.js
// Normally you'd access this from a package such as `lodash.debounce`
// But it's annoying make modules work without webpack, and I wanted to keep this simple. :-)

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear'
 * that is a function which will clear the timer to prevent previously scheduled executions.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result
  if (null == wait) wait = 100

  function later() {
    var last = Date.now() - timestamp

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        context = args = null
      }
    }
  }

  var debounced = function () {
    context = this
    args = arguments
    timestamp = Date.now()
    var callNow = immediate && !timeout
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }

  debounced.clear = function () {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  debounced.flush = function () {
    if (timeout) {
      result = func.apply(context, args)
      context = args = null

      clearTimeout(timeout)
      timeout = null
    }
  }

  return debounced
}

// https://github.com/component/throttle/blob/master/index.js
function throttle(func, wait) {
  var ctx, args, rtn, timeoutID // caching
  var last = 0

  return function throttled() {
    ctx = this
    args = arguments
    var delta = new Date() - last
    if (!timeoutID) {
      if (delta >= wait) {
        call()
      } else {
        timeoutID = setTimeout(call, wait - delta)
      }
    }
    return rtn
  }

  function call() {
    timeoutID = 0
    last = +new Date()
    rtn = func.apply(ctx, args)
    ctx = null
    args = null
  }
}
