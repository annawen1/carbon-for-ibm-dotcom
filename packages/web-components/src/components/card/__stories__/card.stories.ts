/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import '@carbon/web-components/es/components/tag/tag.js';
import '../index';
import ArrowRight20 from '../../../internal/vendor/@carbon/web-components/icons/arrow--right/20';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import imgXlg4x3 from '../../../../.storybook/storybook-images/assets/1312/fpo--4x3--1312x984--003.jpg';
import logoMicrosoft2x1 from '../../../../.storybook/storybook-images/assets/logos/logo-microsoft--2x1.png';
import { PICTOGRAM_PLACEMENT } from '../defs';

import { CTA_TYPE } from '../../cta/defs';

import {
  knobNamesForType,
  typeOptions,
  types,
} from '../../cta/__stories__/ctaTypeConfig';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const tagGroupContent = html`
  <div>
    <cds-tag type="green"> Most popular </cds-tag
    ><cds-tag type="purple"> Enterprise </cds-tag>
    <div></div>
  </div>
`;

const defaultArgs = {
  aspectRatio: '2:1',
  ctaType: types[CTA_TYPE.LOCAL],
  customVideoTitle: null,
  disabled: false,
  eyebrow: 'Industry',
  heading: 'Aerospace and defence',
  href: "https://example.com",
  image: false,
  copy: '',
  alt: 'Image alt text',
  defaultSrc: imgXlg4x3,
  tagGroup: false,
  cardStyles: 'none',
};

const controls = {
  aspectRatio: {
    control: 'select',
    description: 'Aspect ratio (aspect-ratio)',
    options: ['1:1', '2:1', '3:2', '4:3', '16:9', '1:1'],
  },
  ctaType: {
    control: 'select',
    description: 'CTA type (cta-type)',
    options: typeOptions,
  },
  customVideoTitle: {
    control: 'text',
    description: 'Custom video title',
    if: { arg: 'ctaType', eq: `${CTA_TYPE.VIDEO}` },
  },
  disabled: {
    control: 'boolean',
    description: 'Disabled',
  },
  eyebrow: {
    control: 'text',
    description: 'Eyebrow',
  },
  image: {
    control: 'boolean',
    description: 'Add image'
  },
  heading: {
    control: 'text',
    description: 'Heading',
    if: { arg: 'ctaType', neq: `${CTA_TYPE.VIDEO}` },
  },
  tagGroup: {
    control: 'boolean',
    description: 'Add tags',
  },
  cardStyles: {
    control: 'select',
    description: 'Card style',
    options: ['Inverse card', 'none'],
  },
};

export const Default = {
  argTypes: controls,
  args: defaultArgs,
  render: ({
    aspectRatio,
    ctaType,
    disabled,
    noPoster,
    image,
    href,
    alt,
    defaultSrc,
    heading,
    eyebrow,
    tagGroup,
    copy,
    cardStyles,
    customVideoTitle,
  }) => {
    let videoCopy;
    let videoFooterCopy;

    if (ctaType === CTA_TYPE.VIDEO) {
      const card = document.querySelector('c4d-card') as any;
      const duration = card?.videoTitle?.match(/\((.*)\)/)?.pop();

      if (!customVideoTitle) {
        videoCopy = card?.videoTitle;
      } else {
        videoCopy = customVideoTitle;
      }

      videoFooterCopy = duration;
    }

    const copyComponent = document
      .querySelector('c4d-card')
      ?.querySelector('p');
    if (copyComponent) {
      copyComponent!.innerHTML = copy;
    }

    return html`
      <c4d-video-cta-container>
        <c4d-card
          ?disabled=${disabled}
          aspect-ratio=${aspectRatio}
          ?no-poster=${noPoster}
          cta-type=${ctaType}
          color-scheme=${cardStyles === 'Inverse card' ? 'inverse' : ''}
          href=${ifDefined(href || undefined)}>
          ${image
            ? html`
                <c4d-image
                  slot="image"
                  alt="${ifDefined(alt)}"
                  default-src="${ifDefined(defaultSrc)}"></c4d-image>
              `
            : ``}
          <c4d-card-eyebrow>${eyebrow}</c4d-card-eyebrow>
          <c4d-card-heading>${videoCopy ?? heading}</c4d-card-heading>
          ${copy ? html`<p></p>` : ``}
          ${tagGroup ? html` ${tagGroupContent} ` : ``}
          ${ctaType === CTA_TYPE.VIDEO
            ? html` <c4d-card-footer> ${videoFooterCopy} </c4d-card-footer> `
            : html`<c4d-card-footer></c4d-card-footer>`}
        </c4d-card>
      </c4d-video-cta-container>
    `;
  },
};

const pictogramPlacements = {
  [PICTOGRAM_PLACEMENT.TOP]: PICTOGRAM_PLACEMENT.TOP,
  [PICTOGRAM_PLACEMENT.BOTTOM]: PICTOGRAM_PLACEMENT.BOTTOM,
};

const pictogramDefaultArgs = {
  copy: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation.`,
  pictogramPlacement: pictogramPlacements.bottom,
  heading: 'Aerospace and defence',
  href: 'https://example.com',
  cardStyles: 'none'
};

const pictogramControls = {
  copy: {
    control: 'text',
    description: 'Body copy',
  },
  pictogramPlacement: {
    control: 'select',
    description: 'Pictogram position',
    options: pictogramPlacements,
  },
  heading: {
    control: 'text',
    description: 'Heading',
  },
  href: {
    control: 'text',
    description: 'Href',
  },
  cardStyles: {
    control: 'select',
    description: 'Card style',
    options: ['Inverse card', 'none'],
  }
};

export const Pictogram = {
  args: pictogramDefaultArgs,
  argTypes: pictogramControls,
  render: ({ href, heading, copy, tagGroup, pictogramPlacement, cardStyles }) => html`
    <c4d-card
      pictogram-placement="${pictogramPlacement}"
      href=${ifDefined(href || undefined)}
      color-scheme=${cardStyles === 'Inverse card' ? 'inverse' : ''}>
      <c4d-card-heading>${heading}</c4d-card-heading>
      ${copy ? unsafeHTML(`<p>${copy}</p>`) : ``}
      ${tagGroup ? html` ${tagGroupContent} ` : ``}
      <svg
        slot="pictogram"
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        data-autoid="c4d--card__pictogram"
        aria-label="Pictogram description"
        width="48"
        height="48"
        viewBox="0 0 32 32"
        role="img"
        class="cds--card__pictogram">
        <path
          id="desktop_1_"
          d="M23,29.36H9v-0.72h6.64v-4.28H3c-1.301,0-2.36-1.059-2.36-2.36V5c0-1.301,1.059-2.36,2.36-2.36h26
          c1.302,0,2.36,1.059,2.36,2.36v17c0,1.302-1.059,2.36-2.36,2.36H16.36v4.279H23V29.36z M1.36,19.36V22c0,
          0.904,0.736,1.64,1.64,1.64h26c0.904,0,1.64-0.735,1.64-1.64v-2.64H1.36z M1.36,
          18.64h29.28V5c0-0.904-0.735-1.64-1.64-1.64H3C2.096,3.36,1.36,4.096,1.36,5V18.64z" />
      </svg>
    </c4d-card>
  `
};

const staticDefaultArgs = {
  alt: 'Image alt text',
  defaultSrc: imgXlg4x3,
  image: false,
  eyebrow: 'SPSS Statistics',
  heading: 'Free trial',
  copy: 'Enjoy full SPSS Statistics capabilities including all add-ons. All trial registrants are restricted to one free trial per computer per user.',
  tagGroup: false,
  cta: false,
  ctaCopy: ''
};

const staticControls = {
  alt: {
    control: 'text',
    description: 'Image alt text'
  },
  defaultSrc: {
    table: {
      disable: true,
    },
  },
  image: {
    control: 'boolean',
    description: 'Add image'
  },
  eyebrow: {
    control: 'text',
    description: 'Eyebrow'
  },
  heading: {
    control: 'text',
    description: 'Heading'
  },
  copy: {
    control: 'text',
    description: 'Body copy'
  },
  tagGroup: {
    control: 'boolean',
    description: 'Add tags'
  },
  cta: {
    control: 'boolean',
    description: 'Add CTA'
  },
  ctaCopy: {
    control: 'text',
    description: 'CTA copy',
    if: { arg: 'cta', eq: true }
  }
};

export const Static = {
  args: staticDefaultArgs,
  argTypes: staticControls,
  render: ({
    image,
    alt,
    defaultSrc,
    eyebrow,
    heading,
    copy,
    tagGroup,
    cta,
    ctaCopy,
  }) => html`
    <c4d-card>
      ${image
        ? html`
            <c4d-image
              slot="image"
              alt="${ifDefined(alt)}"
              default-src="${ifDefined(defaultSrc)}"></c4d-image>
          `
        : ``}
      ${eyebrow ? html` <c4d-card-eyebrow>${eyebrow}</c4d-card-eyebrow> ` : ``}
      <c4d-card-heading>${heading}</c4d-card-heading>
      ${copy ? unsafeHTML(`<p>${copy}</p>`) : ``}
      ${tagGroup ? html` ${tagGroupContent} ` : ``}
      ${cta
        ? html`
            <c4d-card-footer href="https://www.example.com">
              ${ctaCopy}${ArrowRight20({ slot: 'icon' })}
            </c4d-card-footer>
          `
        : ``}
    </c4d-card>
  `
};

const linkDefaultArgs = {
  disabled: false,
  customVideoTitle: null,
  ctaType: types[CTA_TYPE.LOCAL],
  heading: 'Aerospace and defence',
  copy: '',
  alt: 'Image alt text',
  defaultSrc: imgXlg4x3,
  href: ''
};

const linkControls = {
  disabled: {
    control: 'boolean',
    description: 'Disabled'
  },
  customVideoTitle: {
    control: 'text',
    description: 'Custom video title',
    if: { arg: 'ctaType', eq: `${CTA_TYPE.VIDEO}` }
  },
  ctaType: {
    control: 'select',
    description: 'CTA type (cta-type)',
    options: typeOptions
  },
  heading: {
    control: 'text',
    description: 'Heading',
    if: { arg: 'ctaType', neq: `${CTA_TYPE.VIDEO}` }
  },
  copy: {
    control: 'text',
    description: 'Body copy'
  },
  alt: {
    control: 'text',
    description: 'Image alt text'
  },
  defaultSrc: {
    table: {
      disable: true
    }

  },
  href: {
    control: 'text',
    description: knobNamesForType[CTA_TYPE.REGULAR]
  }
};


export const Link = {
  args: linkDefaultArgs,
  argTypes: linkControls,
  render: ({ disabled, ctaType, href, heading, copy, customVideoTitle }) => {
    let videoCopy;

    if (ctaType === CTA_TYPE.VIDEO) {
      const card = document.querySelector('c4d-card') as any;
      const duration = card?.videoTitle?.match(/\((.*)\)/)?.pop();

      if (!customVideoTitle) {
        videoCopy = card?.videoTitle;
      } else {
        videoCopy = customVideoTitle;
      }

      card.querySelector('c4d-card-footer')!.innerHTML = duration ?? '';
    }

    return html`
      <c4d-video-cta-container>
        <c4d-card
          ?disabled=${disabled}
          link
          no-poster=${ctaType === CTA_TYPE.VIDEO}
          cta-type=${ctaType}
          href=${ifDefined(href || undefined)}>
          <c4d-card-heading>${videoCopy ?? heading}</c4d-card-heading>
          ${copy ? unsafeHTML(`<p>${copy}</p>`) : ``}
          <c4d-card-footer></c4d-card-footer>
        </c4d-card>
      </c4d-video-cta-container>
    `
  }
};

const logoDefaultArgs = {
  alt: 'Image alt text',
  defaultSrc: logoMicrosoft2x1,
  tagGroup: true,
  eyebrow: 'Microsoft',
  heading: '',
  copy: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  href: 'https://example.com'
};

const logoControls = {
  alt: {
    control: 'text',
    description: 'Image alt text'
  },
  defaultSrc: {
    table: {
      disable: true
    }
  },
  tagGroup: {
    control: 'boolean',
    description: 'Add tags',
    group: 'logo'
  },
  eyebrow: {
    control: 'text',
    description: 'Card Eyebrow',
    group: 'logo'
  },
  heading: {
    control: 'text',
    description: 'Card Heading (optional)',
    group: 'logo'
  },
  copy: {
    control: 'text',
    description: 'Card body copy',
    group: 'logo'
  },
  href: {
    control: 'text',
    description: 'Href'
  }
};

export const Logo = {
  args: logoDefaultArgs,
  argTypes: logoControls,
  render: ({ alt, defaultSrc, eyebrow, heading, href, copy, tagGroup } ) => html`
    <c4d-card logo href=${ifDefined(href || undefined)}>
      <c4d-image-logo
        slot="image"
        alt="${ifDefined(alt)}"
        default-src="${ifDefined(defaultSrc)}"></c4d-image-logo>
      ${eyebrow ? html` <c4d-card-eyebrow>${eyebrow}</c4d-card-eyebrow> ` : ``}
      ${heading ? html` <c4d-card-heading>${heading}</c4d-card-heading> ` : ``}
      ${copy ? unsafeHTML(`<p>${copy}</p>`) : ``}
      ${tagGroup ? html` ${tagGroupContent} ` : ``}

      <c4d-card-footer></c4d-card-footer>
    </c4d-card>
  `
};


export default {
  title: 'Components/Card',
  decorators: [
    (story) => html`
      <div class="cds--grid">
        <div class="cds--row">
          <div
            class="cds--col-sm-4 cds--col-md-3 cds--col-lg-6 cds--col-xlg-4 cds--no-gutter">
            ${story()}
          </div>
        </div>
      </div>
    `,
  ],
  parameters: {
    hasStoryPadding: true,
    controls: {
      exclude:/defaultSrc|eyebrow|heading|href|copy|alt/g
    }
  },
};
