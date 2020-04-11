// users.test.js
import { getUsers, invokeDelayed } from '../users'
import * as api from '../api'

jest.mock('../api')

describe('#getUsers', () => {
  it('should fetch users', async () => {
    const response = { data: [{ id: 1, name: 'Andrew' }] }
    api.get.mockImplementation(() => Promise.resolve(response))
    const res = await getUsers()
    expect(res).toEqual([{ id: 1, name: 'Andrew' }])
  })

  it('should use the standard get response', async () => {
    api._setGetResponse(['cats', 'dogs'])
    const res = await getUsers()
    expect(res).toEqual(['cats', 'dogs'])
  })
})

describe('#invokeDelayed', () => {
  jest.useFakeTimers()

  it('should invoke it after time has passed', async () => {
    const stub = jest.fn()
    invokeDelayed(stub, 3000)
    jest.advanceTimersByTime(2000)
    expect(stub).not.toHaveBeenCalled()
    jest.advanceTimersByTime(1000)
    expect(stub).toHaveBeenCalled()
    // await new Promise((res) => {
    //   setTimeout(() => {
    //     expect(stub).toHaveBeenCalled()
    //     res()
    //   }, 3000)
    // })

  })
})
