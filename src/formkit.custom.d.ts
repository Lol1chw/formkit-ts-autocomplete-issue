import type { FormKitInputs } from '@formkit/inputs'
import type { Options } from './src/types/type'
import type { MyRadioProps } from './components/MyRadio.vue'

declare module '@formkit/inputs' {
  interface FormKitInputProps<Props extends FormKitInputs<Props>> {
    myRadio: MyRadioProps

  }
}

export {}