
```js
// Recap quiz questions

// TODO: what's wrong with this code?

function Human(name) {
  this.name = name
}

Human.prototype.sayHello = function () {
  console.log(this.name)
}

const andrew = new Human('Andrew')

andrew.sayHello() // undefined

// TODO: What gets printed out?

const failedServerCall = () => Promise.reject('oops')

failedServerCall()
  .then((data) => { console.log('Data', data) })
  .catch((err) => {
    console.error('Something went wrong', err)
    setTimeout(() => {
      return 'yay'
    }, 3000)
  })
  .then((data) => { console.log('Second then', data) })





// TODO: What gets printed out?

const failedServerCall = () => Promise.reject('oops')

// failedServerCall()
//   .then((data) => { console.log('Data', data) })
//   .catch((err) => {
//     console.error('Something went wrong', err)
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('yay')
//       }, 3000)
//     })
//   })
//   .then((data) => { console.log('Second then', data) })

const getSomeData = async () => {
  try {
    const data = await failedServerCall()
  } catch (err) {
    console.error('Something went wrong', err)
    // display an error
    displayError(err)
    // wait 3 seconds
    await wait(3000)
    // clear the error
    clearError(err)
  }
}

const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

const displayError = (err) => {
  console.log('displaying', err)
}

const clearError = (err) => {
  console.log('clearing', err)
}

getSomeData()
```
