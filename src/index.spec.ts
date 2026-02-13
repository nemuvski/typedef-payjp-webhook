import type {
  Balance,
  Card,
  Charge,
  Customer,
  Plan,
  Statement,
  Subscription,
  Tenant,
  TenantTransfer,
  Term,
  Token,
  Transfer,
} from 'payjp'
import { describe, expectTypeOf, test } from 'vitest'
import type { PayjpWebhook } from '.'

describe.concurrent('RequestBody', () => {
  test('Charge', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.ChargeSucceeded
      data: Charge
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()

    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.DisputeCreated
      data: Charge
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('Customer', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.CustomerCreated
      data: Customer
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('Card', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.CustomerCardCreated
      data: Card
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('Plan', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.PlanCreated
      data: Plan
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('Subscription', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.SubscriptionCreated
      data: Subscription
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('Token', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.TokenCreated
      data: Token
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('Transfer', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.TransferSucceeded
      data: Transfer
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('Tenant', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.TenantCreated
      data: Tenant
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('TenantTransfer', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.TenantTransferSucceeded
      data: TenantTransfer
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('Term', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.TermCreated
      data: Term
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('Statement', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.StatementCreated
      data: Statement
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })

  test('Balance', () => {
    expectTypeOf<{
      id: string
      type: typeof PayjpWebhook.EventTypeIdentifier.BalanceMerged
      data: Balance
      livemode: boolean
      object: 'event'
      pending_webhooks: number
      created: number
    }>().toExtend<PayjpWebhook.RequestBody>()
  })
})
