import { Ajax } from './ajax'

describe('Ajax', () => {

  // Placeholder for the response object:
  let response

  // Install mock fetch API:
  beforeEach(() => {
    window.fetch = jest.fn((url, options = {}) => {
      let json = () => Promise.resolve({ url, options })
      response = { json, ok: true, status: 200 }

      spyOn(response, 'json').and.callThrough()
      return Promise.resolve(response)
    })
  })

  describe('raw', () => {
    it('should call fetch', () => {
      Ajax.get('/')
      expect(window.fetch).toHaveBeenCalled()
    })

    it('should call the response.json method', async () => {
      await Ajax.get('/')
      expect(response.json).toHaveBeenCalled()
    })

    it('should return a promise', () => {
      let r = Ajax.get('/')

      expect(typeof r).toBe('object')
      expect(r instanceof Promise).toBeTruthy()
    })

    it('should use the correct HTTP method', async () => {
      for (let m of ['get', 'post', 'patch', 'del']) {
        let { url, options } = await Ajax[m]('/')
        if (m === 'del') m = 'delete'

        expect(url).toBe('/')
        expect(options.method).toBe(m.toUpperCase())
      }
    })

    it('should send the correct body as JSON', async () => {
      let data = { a: 1, b: 2 }

      let rs = [
        { method: 'get' },
        { method: 'del' },
        { method: 'post', data },
        { method: 'patch', data },
      ]

      for (let r of rs) {
        let { options } = await Ajax[r.method]('/', r.data)

        if (r.data) {
          expect(options.body).toBe(JSON.stringify(r.data))
        } else {
          expect(options.body).toBeUndefined()
        }
      }
    })
  })
})
