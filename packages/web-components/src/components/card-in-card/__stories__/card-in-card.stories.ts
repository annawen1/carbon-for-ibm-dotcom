/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '../../card/index';
import '../../image/image';
import '../index';
import '../../cta/card-cta-footer';
import '../../cta/video-cta-container';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import imgXlg16x9 from '../../../../.storybook/storybook-images/assets/1312/fpo--16x9--1312x738--005.jpg';
import imgMd16x9 from '../../../../.storybook/storybook-images/assets/960/fpo--16x9--960x540--005.jpg';
import imgSm4x3 from '../../../../.storybook/storybook-images/assets/480/fpo--4x3--480x360--005.jpg';

const defaultArgs = {
  video: false,
  alt: 'Image alt text',
  defaultSrc: imgSm4x3,
  heading: 'Standard Bank Group prepares to embrace Africa’s AI opportunity',
  href: 'https://example.com',
  eyebrow: 'Label',
};

const controls = {
  video: {
    control: 'boolean',
    description: 'Video',
  },
  alt: {
    control: 'text',
    description: 'Image alt text (alt)',
    if: { arg: 'video', eq: false },
  },
  defaultSrc: {
    control: 'text',
    description: 'Image src (defaultSrc)',
    if: { arg: 'video', eq: false },
  },
  heading: {
    control: 'text',
    description: 'Card Heading (heading)',
    if: { arg: 'video', eq: false },
  },
  href: {
    control: 'text',
    description: 'Card Href (href)',
    if: { arg: 'video', eq: false },
  },
  eyebrow: {
    control: 'text',
    description: 'Card Eyebrow (eyebrow)',
  },
};

export const Default = {
  args: defaultArgs,
  argTypes: controls,
  render: ({ video, eyebrow, heading, defaultSrc, alt, href }) => {
    if (video) {
      const card = document.querySelector('c4d-card') as any;
      const videoCopy = card?.videoTitle;

      return html`
        <c4d-video-cta-container>
          <c4d-card-in-card href="0_ibuqxqbe" cta-type="video">
            <c4d-card-eyebrow>${eyebrow}</c4d-card-eyebrow>
            <c4d-card-heading>${videoCopy ?? heading}</c4d-card-heading>
            <c4d-card-footer></c4d-card-footer>
          </c4d-card-in-card>
        </c4d-video-cta-container>
      `;
    }
    return html`
      <c4d-card-in-card href=${ifDefined(href || undefined)} cta-type="local">
        <c4d-card-in-card-image
          slot="image"
          alt="${ifDefined(alt)}"
          default-src="${ifDefined(defaultSrc)}">
          <c4d-image-item media="(min-width: 1312px)" srcset="${imgXlg16x9}">
          </c4d-image-item>
          <c4d-image-item media="(min-width: 672px)" srcset="${imgMd16x9}">
          </c4d-image-item>
          <c4d-image-item media="(min-width: 320px)" srcset="${imgSm4x3}">
          </c4d-image-item>
        </c4d-card-in-card-image>
        <c4d-card-eyebrow>${eyebrow}</c4d-card-eyebrow>
        <c4d-card-heading>${heading}</c4d-card-heading>
        <c4d-card-footer></c4d-card-footer>
      </c4d-card-in-card>
    `;
  },
};

export default {
  title: 'Components/Card in card',
  decorators: [
    (story) => html`
      <div class="cds--grid">
        <div class="cds--row">
          <div class="cds--col-lg-12 cds--no-gutter">${story()}</div>
        </div>
      </div>
    `,
  ],
  parameters: {
    percy: {
      skip: true,
    },
    hasStoryPadding: true,
    controls: {
      exclude: /defaultSrc|eyebrow|heading|href|copy|alt/g,
    },
  },
};
