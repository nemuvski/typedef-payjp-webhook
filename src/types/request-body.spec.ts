import { expectTypeOf, test } from 'vitest'
import type { EventWebhookRequestBody } from './request-body'

test('EventWebhookRequestBody', () => {
  expectTypeOf<{
    id: string
    type: 'test-event'
    data: { id: string }
    livemode: boolean
    object: 'event'
    pending_webhooks: number
    created: number
  }>().toMatchTypeOf<EventWebhookRequestBody<'test-event', { id: string }>>()
})
