import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'
import { ButtonProps, ElButton } from 'element-plus'

export interface ColumnAttrs<T> {
  row: T,
  column: TableColumnCtx<T>,
  rowIndex: number;
}

export type SlotButtonProps = Partial<ButtonProps>

export const useSlotButton = (text: string, onClick?: () => void, props: SlotButtonProps = {}) => {
  const defaultProps: SlotButtonProps = {
    link: true,
    type: 'primary',
    size:'small'
  }
  return h(
    ElButton,
    {
      ...defaultProps,
      ...props,
      onClick
    },
    {
      default: () => text || '按钮'
    }
  )
}
