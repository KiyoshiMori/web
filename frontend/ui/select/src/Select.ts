import { createElement } from 'react'
import Select from 'react-select'

// export interface SelectUiProps {}

// export interface SelectProps extends SelectUiProps {
//   selectedOption: string
//   onChange: (value: string) => void
// }

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
