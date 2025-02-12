import { it, describe, expect } from 'vitest';


import work from '../script.js';
import { html } from './htmlForTest.js';
import { output } from './outputTest.js';

/**
 * Mock Default.
*
* @returns {void}
*/
const mockDefault = () => {

}

describe('🐛 spec script', () => {
  it('🧪 default', () => {
    expect.hasAssertions();
    // ☣️  Arrange (всякие моки)
    mockDefault();

    // 🧹 clear mock


    //🔥 Act
    const res = work(html, {
      VALUE_STR_NUM: 7,
      HEADER_STR_NUM: 7,
      START_HEADER_STR_NUM: 0
    });

    //❓ Assert
    expect(res).toStrictEqual(output);
  })

})

