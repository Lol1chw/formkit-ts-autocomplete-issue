<script setup lang="ts">
import type { Options } from '../types/type'
import type { FormKitFrameworkContext } from '@formkit/core';

export type MyRadioProps = {
    type: 'myRadio'
    myOptions: Options[]
}

    const props = defineProps<{
        context: FormKitFrameworkContext & MyRadioProps
    }>()

    const options = props.context.myOptions

    const click = (newValue: string): void => {
        props.context.node.input(newValue)
    }
</script>

<template>
    <template v-for="option in options" :key="option.title">
        <div @click="click(option.title)">
            <label :for="option.title">{{ option.title }}</label>
            <input
            :id="option.title"
            :value="option.title"
            type="radio"
            name="group"
            />
        </div>
    </template>
</template>