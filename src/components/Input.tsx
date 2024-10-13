import { Input as InputUI, InputProps as InputPropsUI } from './ui/input'

import { tv, type VariantProps } from 'tailwind-variants'

const input = tv({
  base: 'flex-1 rounded-full border-none text-base h-max px-4 py-4 bg-gray-dark-click transition-all focus-visible:ring-gray-light-click focus-visible:ring-transparent focus-visible:ring-offset-2 placeholder:text-gray-light-click/50 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
  variants: {
    variant: {
      icon: 'pl-14',
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
      <div className="relative flex h-max flex-1 items-center">
        {icon && (
          <div className="pointer-events-none absolute left-6 h-max w-max">
            {icon}
          </div>
        )}
        <InputUI className={input({ variant, className })} {...rest} />
      </div>
    </>
  )
}
