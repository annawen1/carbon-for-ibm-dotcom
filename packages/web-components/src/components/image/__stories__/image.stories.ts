/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '../image';
import { html } from 'lit';
// eslint-disable-next-line sort-imports
import imgLg16x9 from '../../../../.storybook/storybook-images/assets/720/fpo--16x9--720x405--005.jpg';
import imgLg2x1 from '../../../../.storybook/storybook-images/assets/720/fpo--2x1--720x360--005.jpg';
import imgLg3x2 from '../../../../.storybook/storybook-images/assets/720/fpo--3x2--720x480--005.jpg';
import imgLg4x3 from '../../../../.storybook/storybook-images/assets/720/fpo--4x3--720x540--005.jpg';
import imgLg1x1 from '../../../../.storybook/storybook-images/assets/720/fpo--1x1--720x720--005.jpg';
import imgMd16x9 from '../../../../.storybook/storybook-images/assets/480/fpo--16x9--480x270--005.jpg';
import imgMd2x1 from '../../../../.storybook/storybook-images/assets/480/fpo--2x1--480x240--005.jpg';
import imgMd3x2 from '../../../../.storybook/storybook-images/assets/480/fpo--3x2--480x320--005.jpg';
import imgMd4x3 from '../../../../.storybook/storybook-images/assets/480/fpo--4x3--480x360--005.jpg';
import imgMd1x1 from '../../../../.storybook/storybook-images/assets/480/fpo--1x1--480x480--005.jpg';
import imgSm16x9 from '../../../../.storybook/storybook-images/assets/320/fpo--16x9--320x180--005.jpg';
import imgSm2x1 from '../../../../.storybook/storybook-images/assets/320/fpo--2x1--320x160--005.jpg';
import imgSm3x2 from '../../../../.storybook/storybook-images/assets/320/fpo--3x2--320x213--005.jpg';
import imgSm4x3 from '../../../../.storybook/storybook-images/assets/320/fpo--4x3--320x160--004.jpg';
import imgSm1x1 from '../../../../.storybook/storybook-images/assets/320/fpo--1x1--320x320--005.jpg';
import chartSvg from './chart-svg.js';
import { LIGHTBOX_CONTRAST } from '../image';

const contrasts = {
  light: LIGHTBOX_CONTRAST.LIGHT,
  dark: LIGHTBOX_CONTRAST.DARK,
};

const images = {
  '2:1': imgLg2x1,
  '16:9': imgLg16x9,
  '3:2': imgLg3x2,
  '4:3': imgLg4x3,
  '1:1': imgLg1x1,
  'SVG (transparent background)': chartSvg,
};

const srcsets = {
  '2:1': [imgSm2x1, imgMd2x1, imgLg2x1],
  '16:9': [imgSm16x9, imgMd16x9, imgLg16x9],
  '3:2': [imgSm3x2, imgMd3x2, imgLg3x2],
  '4x3': [imgSm4x3, imgMd4x3, imgLg4x3],
  '1x1': [imgSm1x1, imgMd1x1, imgLg1x1],
};

const controls = {
  defaultSrc: {
    control: 'select',
    description: 'Default image (default-src)',
    options: images,
  },
  border: {
    control: 'boolean',
    description: 'Border (border)',
  },
  lightbox: {
    control: 'boolean',
    description: 'Lightbox (lightbox)',
  },
  lightboxContrast: {
    control: 'select',
    if: { arg: 'lightbox' },
    description: 'Lightbox contrast (lightbox-contrast)',
    options: contrasts,
  },
  longDescription: {
    control: 'boolean',
    description: 'Long description example',
  },
};

const defaultArgs = {
  defaultSrc: images['2:1'],
  border: false,
  lightbox: false,
};

export const Default = {
  argTypes: controls,
  args: defaultArgs,
  decorators: [
    (story) =>
      html`
        <div class="cds--grid">
          <div class="cds--row">
            <div class="cds--col-sm-4 cds--col-lg-8">${story()}</div>
          </div>
        </div>
      `,
  ],
  render: ({
    defaultSrc,
    border,
    lightbox,
    lightboxContrast,
    longDescription,
  }) => {
    // TODO: See if we can fix unwanted `&` to `&amp` conversion upon changing the select knob
    const srcset = srcsets[defaultSrc?.replace(/&amp;/, '&')];
    return html`
      <c4d-image
        alt="Image alt text"
        heading="This is a caption"
        default-src="${defaultSrc}"
        ?border=${border}
        ?lightbox="${lightbox}"
        lightbox-contrast="${lightboxContrast}"
        copy="Lorem ipsum dolor sit amet">
        ${!longDescription
          ? undefined
          : html` <div slot="long-description">${longDescription}</div> `}
        ${!srcset
          ? undefined
          : html`
              <c4d-image-item media="(min-width: 672px)" srcset="${srcset[2]}">
              </c4d-image-item>
              <c4d-image-item media="(min-width: 400px)" srcset="${srcset[1]}">
              </c4d-image-item>
              <c4d-image-item media="(min-width: 320px)" srcset="${srcset[0]}">
              </c4d-image-item>
            `}
      </c4d-image>
    `;
  },
};

const meta = {
  title: 'Components/Image',
};

export default meta;
