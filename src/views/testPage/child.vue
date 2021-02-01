<template>
    <div>
      <slot>
        <span>插槽后备内容</span>
      </slot>
      <slot name="first" >
        first插槽
      </slot>
      <slot name="last" testProp="子组件的值" >
        <h3>last插槽</h3>
      </slot>
    </div>
</template>