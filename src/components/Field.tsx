import { FormItem } from './ui/form'
import { cn } from '@/lib/utils'

type FieldProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export function Field({ children, className, ...rest }: FieldProps) {
  return (
    <FormItem
      className={cn(
        'flex h-max flex-1 flex-col gap-2 text-white/50 transition-all focus-within:text-white',
        className,
      )}
      {...rest}
    >
      {children}
    </FormItem>
  )
}
