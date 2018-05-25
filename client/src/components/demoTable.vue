<template lang="pug">
  div
    h1 container
    div header route {{$route.path}}
    router-view
</template>

<script>
export default {
  name: 'Table'
};
</script>
