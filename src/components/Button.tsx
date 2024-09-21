import {
  Button as ButtonUI,
  ButtonProps as ButtonPropsUI,
} from '@/components/ui/button'

type ButtonProps = ButtonPropsUI

export function Button({ children, ...rest }: ButtonProps) {
  return <ButtonUI {...rest}>{children}</ButtonUI>
}
