import React from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Text } from '@ui/text'
import { Input } from '@ui/input'
import { Button } from '@ui/button'
import messages from '../../messages'

interface Props {
    intl: InjectedIntl
}

const Profile = ({
  errors,
  intl,
  firstName,
  lastName,
  onChangeFirstName,
  onChangeLastName,
  isEditing,
  onEditClick,
  onSaveClick,
  onCancelEditingClick
}: Props) => (
    <Column align='center'>
        <Layout basis={60} />
        <Text size='2xl' height='xs' weight='bold'>
            {intl.formatMessage(messages.profile)}
        </Text>
        <Layout basis={40} />
        <Row justify='center'>
          <Layout basis={360}>
            <Text size='s' weight='bold' transform='uppercase'>
              {intl.formatMessage(messages.firstName)}
            </Text>
          </Layout>
        </Row>
        <Layout basis={12} />
        <Row justify='center'>
          <Layout basis={300}>
            {isEditing
              ? (
                <Input
                  border='lightGray'
                  error={errors && errors.firstName}
                  value={firstName}
                  onChange={onChangeFirstName}
                  placeholder={intl.formatMessage(messages.enterFirstName)}
                />
              ) : (
              <Text size='m' weight='medium'>
                {firstName}
              </Text>
              )
            }
          </Layout>
        </Row>
        <Layout basis={12} />
        <Row justify='center'>
            <Layout basis={360}>
                <Text size='s' weight='bold' transform='uppercase'>
                    {intl.formatMessage(messages.lastName)}
                </Text>
            </Layout>
            <Layout basis={12} />
        </Row>
        <Row justify='center'>
          <Layout basis={300}>
            {isEditing
              ? (
                <Input
                  border='lightGray'
                  error={errors && errors.lastName}
                  value={lastName}
                  onChange={onChangeLastName}
                  placeholder={intl.formatMessage(messages.enterLastName)}
                />
              ) : (
                <Text size='m' weight='medium'>
                  {lastName}
                </Text>
              )
            }
          </Layout>
        </Row>
        <Layout basis={24} />
        <Row justify='center'>
          <Layout basis={360}>
            <Button
              text
              disabled={isEditing ? (!firstName || !lastName) : false}
              onClick={isEditing ? onSaveClick : onEditClick}
              color={isEditing ? 'green' : undefined}
            >
              {isEditing ? intl.formatMessage(messages.save) : intl.formatMessage(messages.edit)}
            </Button>
            {isEditing && (
              <Button
                text
                onClick={onCancelEditingClick}
              >
                {intl.formatMessage(messages.cancel)}
              </Button>
            )}
          </Layout>
        </Row>
    </Column>
)

export default injectIntl(Profile)