import { vi, it, describe, expect } from 'vitest';


import work from '../script.js';
import { html } from './htmlForTest.js';
import { output } from './output.js';

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
    const res = work(html);

    //❓ Assert
    expect(res).toStrictEqual(output);
  })

})

