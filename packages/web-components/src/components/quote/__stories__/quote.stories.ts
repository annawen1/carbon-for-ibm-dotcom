/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import ArrowRight20 from '../../../internal/vendor/@carbon/web-components/icons/arrow--right/20.js';
import { QUOTE_TYPES } from '../quote';
import '../index';
import '../quote-link-with-icon';

const types = {
  [`${QUOTE_TYPES.DEFAULT}`]: QUOTE_TYPES.DEFAULT,
  [`${QUOTE_TYPES.SINGLE_CURVED}`]: QUOTE_TYPES.SINGLE_CURVED,
  [`${QUOTE_TYPES.DOUBLE_ANGLE}`]: QUOTE_TYPES.DOUBLE_ANGLE,
  [`${QUOTE_TYPES.SINGLE_ANGLE}`]: QUOTE_TYPES.SINGLE_ANGLE,
  [`${QUOTE_TYPES.LOW_HIGH_REVERSED_DOUBLE_CURVED}`]:
    QUOTE_TYPES.LOW_HIGH_REVERSED_DOUBLE_CURVED,
  [`${QUOTE_TYPES.CORNER_BRACKET}`]: QUOTE_TYPES.CORNER_BRACKET,
};

const controls = {
  quoteMark: {
    control: 'select',
    description: 'Quote Mark (mark-type)',
    options: types,
  },
};

const defaultArgs = {
  quoteMark: types['double-curved'],
};

export const Default = {
  argTypes: controls,
  args: defaultArgs,
  decorators: [
    (story) => html`
      <div class="cds--grid">
        <div class="cds--row">
          <div class="cds--col-lg-11">${story()}</div>
        </div>
      </div>
    `,
  ],
  render: ({ quoteMark }) => {
    return html`
      <c4d-quote mark-type="${quoteMark}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est
        purus, posuere at est vitae, ornare rhoncus sem. Suspendisse vitae
        tellus fermentum, hendrerit augue eu, placerat magna.
        <c4d-quote-source-heading>
          Lorem ipsum dolor sit amet
        </c4d-quote-source-heading>
        <c4d-quote-source-copy>
          consectetur adipiscing elit
        </c4d-quote-source-copy>
        <c4d-quote-source-bottom-copy> IBM Cloud </c4d-quote-source-bottom-copy>
        <c4d-quote-link-with-icon slot="footer" href="https://example.com">
          Link with Icon ${ArrowRight20({ slot: 'icon' })}
        </c4d-quote-link-with-icon>
      </c4d-quote>
    `;
  },
};

const meta = {
  title: 'Components/Quote',
};

export default meta;
