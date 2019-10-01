import { ReactNode, createElement } from 'react'
import Select from 'react-select'
import { Input } from '@ui/input'

export interface SelectUiProps {}

export interface SelectProps extends SelectUiProps {
  selectedOption: string
}

export default ({
  selectedOption,
  onChange,
  options,
  placeholder
}) =>
  createElement(
    Select,
    {
      value: selectedOption ? options.find(option => option.value === selectedOption) : null,
      onChange: ({ value }: { value: string }) => onChange(value),
      options,
      placeholder,
      isSearchable: false,
      styles: {
        container: () => ({
          width: '30%'
        })
      },
      menuPortalTarget: document.querySelector('body'),
    }
  )
