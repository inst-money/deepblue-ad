<template>

  <div>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
const { t,locale } = useI18n()
useHead({
  titleTemplate: `Deep Blue`,
})



</script>
<style>
@import url('./app.css');
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: var(--color-text);
  text-decoration: none;
}
:root {
  --color-text: #000;
  --color-high-text: #e325dc;
  --color-tint: #e1e1e1;
  --background: #049ee4;
  --font-size: 16px;
  --line-height: 1.5
} */

</style>