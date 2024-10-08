# `c4d-content-block-simple`

## `Misc attributes`

####   `should render with minimum attributes`

```
<div
  class="cds--content-layout"
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
    <slot>
    </slot>
    <slot name="media">
    </slot>
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

####   `should render with various attributes`

```
<div
  class="cds--content-layout cds--content-layout--with-complementary cds--layout--border"
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
    <slot>
    </slot>
    <slot name="media">
    </slot>
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

