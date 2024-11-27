import { Input as InputUI, InputProps as InputPropsUI } from './ui/input'

import { tv, type VariantProps } from 'tailwind-variants'

const input = tv({
  base: 'flex-1 rounded-full border-none text-base h-max px-4 py-4 bg-gray-dark-click transition-all focus-visible:ring-gray-light-click focus-visible:ring-transparent focus-visible:ring-offset-2 placeholder:text-gray-light-click/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
  variants: {
    variant: {
      icon: 'pl-10 md:pl-14',
      ghost:
        'border-black border-2 bg-transparent border-solid text-black placeholder:text-gray-dark-click',
      'icon-white':
        'pl-10 md:pl-14 border-2 bg-gray-light-click border-solid text-black',
    },
  },
})

type InputVariants = VariantProps<typeof input>

type InputProps = InputPropsUI &
  InputVariants & {
    icon?: JSX.Element
  }

export function Input({ className, variant, icon, ...rest }: InputProps) {
  return (
    <>
      <div className="relative flex h-max items-center">
        {icon && (
          <div className="pointer-events-none absolute left-4 h-max w-max md:left-6">
            {icon}
          </div>
        )}
        <InputUI className={input({ variant, className })} {...rest} />
      </div>
    </>
  )
}
