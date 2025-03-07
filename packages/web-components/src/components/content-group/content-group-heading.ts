/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, render } from 'lit';
import { property } from 'lit/decorators.js';
import settings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import StableSelectorMixin from '../../globals/mixins/stable-selector';
import styles from './content-group.scss';
import { carbonElement as customElement } from '@carbon/web-components/es/globals/decorators/carbon-element.js';

const { stablePrefix: c4dPrefix } = settings;

/**
 * The heading content in content group.
 *
 * @element c4d-content-group-heading
 * @csspart heading - The Heading. Usage: `c4d-content-group-heading::part(heading)`
 */
@customElement(`${c4dPrefix}-content-group-heading`)
class C4DContentGroupHeading extends StableSelectorMixin(LitElement) {
  /**
   * The shadow slot this logo UI should be in.
   */
  @property({ reflect: true })
  slot = 'heading';

  /**
   * Render the heading tag into the light DOM of this component.
   */
  protected _renderHeading() {
    const template = document.createElement('template');
    template.innerHTML = `<h3>${this.innerHTML.trim()}</h3>`;
    this.innerHTML = '';
    const heading = template.content.firstChild;
    render(html`${heading}`, this);
  }

  connectedCallback() {
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'heading');
    }
    if (!this.hasAttribute('aria-level')) {
      this.setAttribute('aria-level', '3');
    }
    super.connectedCallback();
  }

  firstUpdated() {
    this._renderHeading();
  }

  render() {
    return html`<slot></slot>`;
  }

  static get stableSelector() {
    return `${c4dPrefix}--content-group__heading`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

/* @__GENERATE_REACT_CUSTOM_ELEMENT_TYPE__ */
export default C4DContentGroupHeading;
