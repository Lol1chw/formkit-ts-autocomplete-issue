<script setup lang="ts">
import { createInput } from '@formkit/vue';
import MyRadio from './components/MyRadio.vue';

import type { Options } from './types/type';
async function submit() {
  await new Promise(r => setTimeout(r, 1000))
  alert('Submitted! 🎉')
}

const myRadio = createInput<{type: 'myRadio'}>(MyRadio, {
  props: ['myOptions']
})

const options: Options[] = [{ title: '1' }, { title: '2' }]
</script>

<template>
  <div class="bg-white rounded-xl shadow-xl p-8 mx-auto my-16 max-w-[450px]">
    <img
      src="https://pro.formkit.com/logo.svg"
      alt="FormKit Logo"
      width="244"
      height="50"
      class="mx-auto mb-8 w-48"
    >
    <FormKit
      type="form"
      #default="{ value }"
      @submit="submit"
    >
      <FormKit
        type="text"
        name="name"
        label="Name"
        help="What do people call you?"
      />
      <FormKit
        type="checkbox"
        name="flavors"
        label="Favorite ice cream flavors"
        :options="{
          'vanilla': 'Vanilla',
          'chocolate': 'Chocolate',
          'strawberry': 'Strawberry',
          'mint-chocolate-chip': 'Mint Chocolate Chip',
          'rocky-road': 'Rocky Road',
          'cookie-dough': 'Cookie Dough',
          'pistachio': 'Pistachio',
        }"
        validation="required|min:2"
      />

      <FormKit
        type="checkbox"
        name="agree"
        label="I agree FormKit is the best form authoring framework."
      />

      <FormKit
      :type="myRadio"
      name="myRadio"
      :myOptions="options"
      />

      <pre class="font-mono text-sm p-4 bg-slate-100 mb-4">{{ value }}</pre>
    </FormKit>
  </div>
</template>
