/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import '../index';
import { CTA_TYPE } from '../../cta/defs';

import {
  hrefsForType,
  typeOptions,
} from '../../cta/__stories__/ctaTypeConfig';


const defaultArgs = {
    length: 2,
    ctaType: 'local'
}

let controls = {
  length: {
    control: 'number',
    description: 'Number of buttons'
  },
  ctaType: {
    control: 'select',
    description: 'CTA type (cta-type)',
    options: typeOptions
  },
};


export const Default = {
  args: defaultArgs,
  argTypes: controls,
  render: ({ length, ctaType}) => {
    return html`
    <c4d-video-cta-container>
      <c4d-button-group>

        ${Array.from({length}).map((e, index) =>
          html`
          <c4d-button-group-item
              href="${hrefsForType[ctaType]}"
              cta-type="${ctaType}"
              download="IBM_Annual_Report_2019.pdf"
              >Button ${index+ 1}</c4d-button-group-item
            >
          `)}
      </c4d-button-group>
    </c4d-video-cta-container>
  `}
};

export default {
  title: 'Components/Button group',
  decorators: [
    (story) => html`
      <div class="cds--grid">
        <div class="cds--row">
          <div class="cds--col-sm-16 cds--col-md-6 cds--col-lg-16">
            ${story()}
          </div>
        </div>
      </div>
    `,
  ],
  parameters: {
    hasStoryPadding: true,
    propsSet: {
      default: {
        ButtonGroup: {
          buttons: [
            {
              ctaType: CTA_TYPE.LOCAL,
              copy: 'Lorem Ipsum',
            },
            {
              ctaType: CTA_TYPE.LOCAL,
              copy: 'Lorem Ipsum',
            },
          ],
        },
      },
    },
  },
};
