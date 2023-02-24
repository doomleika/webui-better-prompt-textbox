
import { describe, expect, it } from 'vitest';
import { isValidTag } from './isValidTag';

describe(`isValidTag`, async () => {
  it(`should not have comma`, async () => {
    const data = 'iwejr,23';
    expect(isValidTag(data)).toBe(false);
  });
  it(`rando tag`, async () => {
      const data = `web`;
      expect(isValidTag(data)).toBe(true);
  })
  describe(`last item past comma should be number`, async () => {
    it(`not a number`, async () => {
      const data = `wij234:aaa`
      expect(isValidTag(data)).toBe(false);
    })
  })
})
