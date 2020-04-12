describe('video#play', () => {
  // <<: beforeEach
  const video = {
    play() { return true },
  }
  // :>>

  // <<: call
  it('should play a video', () => {
    const spy = jest.spyOn(video, 'play')
    const isPlaying = video.play()

    expect(spy).toHaveBeenCalled()
    expect(isPlaying).toBe(true)

    spy.mockRestore()
  })
  // :>>

  // <<: callFake
  it('should allow a fake implementation', () => {
    const spy = jest.spyOn(video, 'play')
      .mockImplementation(() => false)
    const isPlaying = video.play()

    expect(spy).toHaveBeenCalled()
    expect(isPlaying).toBe(false)

    spy.mockRestore()
  })
  // :>>
})
