<template>
<div>
  
  
  <h1>import check</h1>
  <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
          <Boxes msg="Hello World!"/>
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
          <ClearButton msg="Hello World!"/>
        </div>
      </div>
    </article>
  </div>
</div>
</div>
</template>

<script>
import Boxes from './Boxes.vue'
import ClearButton from './ClearButton.vue'

export default {
  name: 'Summarize',
  components: {
    Boxes,
    ClearButton
  }
}
</script>

<style>
</style>