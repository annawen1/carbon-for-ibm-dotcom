# `c4d-content-block-headlines`

## `Misc attributes`

####   `should render with minimum attributes`

```
<div
  class="cds--content-layout cds--content-layout--with-headlines cds--layout--border"
  part="content-layout"
>
  <slot name="heading">
  </slot>
  <div
    class="cds--content-layout__body"
    hidden=""
    part="body"
  >
    <slot name="copy">
    </slot>
    <div
      class="cds--content-block-headlines__item-container"
      hidden=""
    >
      <slot>
      </slot>
    </div>
    <div
      class="false"
      grid-mode=""
      hidden=""
      part="footer"
      style=""
    >
      <slot name="footer">
      </slot>
    </div>
  </div>
  <slot name="complementary">
  </slot>
</div>

```

