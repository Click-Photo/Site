import { Button as ButtonUI, ButtonProps as ButtonPropsUI } from './ui/button'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'h-max rounded-full p-4 text-base font-bold uppercase transition-all',
  variants: {
    variantColor: {
      primary:
        'bg-gray-light-click text-black hover:bg-white focus:bg-white disabled:bg-white/500',
      secondary:
        'bg-transparent text-gray-light-click border-gray-light-click border-2 hover:bg-white hover:text-black disabled:border-white/500 disabled:text-white/500 focus:text-black focus:bg-white focus:border-white',
      tertiary: 'bg-black-click text-white hover:bg-black focus:bg-black',
    },
  },
  defaultVariants: {
    variantColor: 'primary',
  },
})

type ButtonVariants = VariantProps<typeof button>

type ButtonProps = ButtonPropsUI & ButtonVariants

export function Button({
  className,
  variantColor,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonUI className={button({ variantColor, className })} {...rest}>
      {children}
    </ButtonUI>
  )
}
