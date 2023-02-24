import { describe, expect, it } from 'vitest';
import { tagToPromptString } from './tagToPromptString';
// The two tests marked with concurrent will be run in parallel
describe('tagToPromptString', () => {
  it('basic', async () => {
    const data = ['a', 'b'];
    const expected = `a, b`;
    expect(tagToPromptString(data)).toBe(expected)
  })
  it(`one empty`, () => {
    const data = [`a`, ``, `b`];
    const expected = `a, b`;
    expect(tagToPromptString(data)).toBe(expected)
  });
})
