import { defineMessages } from 'react-intl'

const namespace: string = 'profile'

export default defineMessages({
  profile: {
    id: `${namespace}.profile`,
    defaultMessage: 'Профиль',
  },
  firstName: {
    id: `${namespace}.firstName`,
    defaultMessage: 'Имя',
  },
  enterFirstName: {
    id: `${namespace}.enterFirstName`,
    defaultMessage: 'Введите имя',
  },
  lastName: {
    id: `${namespace}.lastName`,
    defaultMessage: 'Фамилия',
  },
  enterLastName: {
    id: `${namespace}.enterLastName`,
    defaultMessage: 'Введите фамилию',
  },
  edit: {
    id: `${namespace}.edit`,
    defaultMessage: 'Редактировать',
  },
  cancel: {
    id: `${namespace}.cancel`,
    defaultMessage: 'Отмена'
  },
  save: {
    id: `${namespace}.save`,
    defaultMessage: 'Сохранить',
  },
})
