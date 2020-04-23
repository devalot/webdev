### State

\columnsbegin
\column{.5\textwidth}

~~~ {.javascript}
const doStuff = (str) => {
  const lower = str.toLowerCase()
  const words = lower.split(' ')
  
  words.reverse()

  for (let i in words) {
    words[i] = words[i].trim()
  }
  // ...
~~~

\column{.5\textwidth}

~~~ {.javascript}
  const filtered = []

  for (let i in words) {
    if (words[i].length > 3) {
      keepers.push(words[i])
    }
  }
  
  return keepers.join('')
}
~~~

\columnsend

### State

```javascript
const doStuff = pipe(
  xs => xs.join(''),
  xs => xs.filter(x => x.length > 3),
  xs => [...xs].reverse(),
  xs => xs.map(x => x.trim()),
  x => x.split(' '),
  x => x.toLowerCase()
)
```

### State

```javascript
class AppMailer {
  removeInvalidAddresses() {
    for (let i in this.addresses) {
      if (!this.addresses[i].match(/@/)) {
        this.addresses.splice(i, 1)
      }
    }
  }
  
  sendEmail({ from, to }) {
    this.addresses = to
    this.emailer.setSender(from)
    this.removeInvalidAddresses()
    this.emailer.setRecipients(this.addresses)
    this.emailer.send()
  }
}
```

