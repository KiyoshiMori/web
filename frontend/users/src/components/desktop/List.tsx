import React, { Fragment } from 'react'
import { injectIntl, InjectedIntl } from 'react-intl'
import { Column, Layout, Row } from '@ui/layout'
import { Space, Text } from '@ui/text'
import { ClickWrapper } from '@ui/helpers'
import messages from '../../messages'
import { RowType, SortTypes } from '../../reducers/list'

interface Props {
  intl: InjectedIntl
  rows: RowType[]
  onSort: (sortBy: SortTypes) => void
}

const List = ({ rows, onSort, intl }: Props) => (
  <Column>
    <Layout basis={60} />
    <Row>
      <Layout basis='10%' />
      <Text weight='medium' size='l'>
        {intl.formatMessage(messages.users)}
      </Text>
      <Layout basis='10%' />
    </Row>
    <Layout basis={20} />
    <Row>
      <Layout basis='10%' />
      <Layout basis={300}>
        <Layout basis={8} />
        <ClickWrapper onClick={onSort('name')}>
          <Text size='s' weight='bold' transform='uppercase'>
            {intl.formatMessage(messages.name)}
          </Text>
        </ClickWrapper>
      </Layout>
      <Layout basis={200}>
        <ClickWrapper onClick={onSort('email')}>
          <Text size='s' weight='bold' transform='uppercase'>
            {intl.formatMessage(messages.email)}
          </Text>
        </ClickWrapper>
      </Layout>
      <Layout basis={180}>
        <ClickWrapper onClick={onSort('registrated')}>
          <Text size='s' weight='bold' transform='uppercase'>
            {intl.formatMessage(messages.registered)}
          </Text>
        </ClickWrapper>
      </Layout>
      <Layout basis={160}>
        <ClickWrapper onClick={onSort('lastLogin')}>
          <Text size='s' weight='bold' transform='uppercase'>
            {intl.formatMessage(messages.lastLogin)}
          </Text>
        </ClickWrapper>
      </Layout>
      <Layout basis='10%' />
    </Row>
    <Layout basis={8} />
    {rows.map(({ id, profile, email, registeredAt, lastLogonAt }) => (
      <Fragment key={id}>
        <Row>
          <Layout basis='10%' />
          <Layout basis={8} />
          <Layout basis={280}>
            <Text size='s'>
              {profile ? profile.firstName : 'None'}
              <Space />
              {profile ? profile.lastName : ''}
            </Text>
          </Layout>
          <Layout basis={12} />
          <Layout basis={188}>
            <Text size='s'>{email}</Text>
          </Layout>
          <Layout basis={12} />
          <Layout basis={168}>
            <Text size='s'>{intl.formatDate(registeredAt)}</Text>
          </Layout>
          <Layout basis={12} />
          <Text size='s'>
            {intl.formatDate(lastLogonAt)}
            <Space />
            {intl.formatMessage(messages.at)}
            <Space />
            {intl.formatTime(lastLogonAt)}
          </Text>
          <Layout basis='10%' />
        </Row>
        <Layout basis={12} />
      </Fragment>
    ))}
  </Column>
)

export default injectIntl(List)
