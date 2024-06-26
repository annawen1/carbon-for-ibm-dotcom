/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

describe('cds-content-block-card-static', () => {
  // TODO: find out why components are getting double imported in parcel
  xit('should load the default content-block-card-static example', () => {
    cy.visit('/content-block-card-static');

    // Take a snapshot for visual diffing
    cy.percySnapshot('cds-content-block-card-static | default');
  });
});
