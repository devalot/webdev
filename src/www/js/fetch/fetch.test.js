import { getArtists } from './fetch'

describe('getArtists', () => {
  // Placeholder for the response object:
  let response

  // Install mock fetch API:
  beforeEach(() => {
    window.fetch = jest.fn((url, options = {}) => {
      const json = () => Promise.resolve({ url, options })
      response = { json, ok: true, status: 200 }

      jest.spyOn(response, 'json')
      return Promise.resolve(response)
    })
  })

  // Make sure the function returns a promise:
  it('should call fetch and return a promise', () => {
    const p = getArtists()
    expect(window.fetch).toHaveBeenCalled()
    expect(p.constructor).toBe(Promise)

    return p.then(() => {
      expect(response.json).toHaveBeenCalled()
    })
  })

  // Make sure the URL for all artists is correct:
  it('should request all artists', () => {
    return getArtists()
      .then((result) => {
        expect(Object.keys(result)).toContain('url')
        expect(result.url).toBe('/api/artists')
      })
  })

  // Make sure the URL for a single artist is correct:
  it('should request a single artist', () => {
    return getArtists(1)
      .then((result) => {
        expect(Object.keys(result)).toContain('url')
        expect(result.url).toBe('/api/artists/1')
      })
  })
})
