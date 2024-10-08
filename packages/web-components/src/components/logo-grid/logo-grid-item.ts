/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { html } from 'lit';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import styles from './logo-grid.scss';
import C4DImage from '../image/image';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import { carbonElement as customElement } from '../../internal/vendor/@carbon/web-components/globals/decorators/carbon-element';

const { stablePrefix: c4dPrefix } = settings;

/**
 * Logo-grid-item.
 *
 * @element c4d-logo-grid-item
 * @csspart logo - the logo container - Usage: `4d-logo-grid-item::part(logo)`
 */
@customElement(`${c4dPrefix}-logo-grid-item`)
class C4DLogoGridItem extends StableSelectorMixin(C4DImage) {
  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader

  static get stableSelector() {
    return `${c4dPrefix}--logo-grid-item`;
  }

  render() {
    return html`
      <div class="cds--logo-grid__logo" part="logo">${super.render()}</div>
    `;
  }
}

console.warn(
  'The logo-grid-item component has been deprecated in favor of the content-section/block and image-group component. ' + //TODO confirm new image-group or images in grid
    'See content-section/block and image-group documentation for more information.'
);

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DLogoGridItem;
