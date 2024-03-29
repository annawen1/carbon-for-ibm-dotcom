/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import '../horizontal-rule';
import readme from './README.stories.mdx';

const types = {
  solid: undefined,
  dashed: 'dashed',
};

const sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  fluid: undefined,
};

const contrasts = {
  strong: 'strong',
  subtle: 'subtle',
};

const weights = {
  thin: undefined,
  thick: 'thick',
};

const controls = {
  type: {
    control: 'select',
    description: 'Type (type)',
    options: types,
  },
  size: {
    control: 'select',
    description: 'Size (size)',
    options: sizes,
  },
  contrast: {
    control: 'select',
    description: 'Contrast (contrast)',
    options: contrasts,
  },
  weight: {
    control: 'select',
    description: 'Weight (weight)',
    options: weights,
  },
};

const defaultArgs = {
  type: types.solid,
  size: sizes.fluid,
  contrast: contrasts.strong,
  weight: weights.thin,
};

export const Default = {
  argTypes: controls,
  args: defaultArgs,
  render: ({ type, size, contrast, weight }) => {
    return html`
      <c4d-hr
        type="${type}"
        size="${size}"
        contrast="${contrast}"
        weight="${weight}">
      </c4d-hr>
    `;
  },
};

const meta = {
  title: 'Components/Horizontal rule',
};

export default meta;
