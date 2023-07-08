import { classNames } from './classNames'

describe('classNames', () => {
  test('with only the first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('additional', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('mods', () => {
    const expected = 'someClass class1 class2 hidden hovered'
    expect(classNames(
      'someClass',
      { hidden: true, hovered: true },
      ['class1', 'class2']
    ))
      .toBe(expected)
  })

  test('a mod with false', () => {
    const expected = 'someClass class1 class2 hidden'
    expect(classNames(
      'someClass',
      {
        hidden: true,
        hovered: false
      },
      ['class1', 'class2']))
      .toBe(expected)
  })

  test('a mod with undefined', () => {
    const expected = 'someClass class1 class2 hidden'

    expect(classNames(
      'someClass',
      {
        hidden: true,
        hovered: undefined
      },
      ['class1', 'class2']
    ))
      .toBe(expected)
  })
})
