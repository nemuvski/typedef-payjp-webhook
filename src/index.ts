import type { Card, Charge, Customer, Plan, Subscription, Tenant, TenantTransfer, Token, Transfer } from 'payjp'
import { PayjpWebhookEventTypeIdentifier } from './types/event-identifier'
import type {
  EventIdentifierChargeType,
  EventIdentifierCustomerType,
  EventIdentifierCustomerCardType,
  EventIdentifierPlanType,
  EventIdentifierSubscriptionType,
  EventIdentifierTenantTransferType,
  EventIdentifierTenantType,
  EventIdentifierTokenType,
  EventIdentifierTransferType,
} from './types/event-identifier'
import type { EventWebhookRequestBody } from './types/request-body'

export namespace PayjpWebhook {
  export type RequestBody =
    | EventWebhookRequestBody<EventIdentifierChargeType, Charge>
    | EventWebhookRequestBody<EventIdentifierCustomerType, Customer>
    | EventWebhookRequestBody<EventIdentifierCustomerCardType, Card>
    | EventWebhookRequestBody<EventIdentifierPlanType, Plan>
    | EventWebhookRequestBody<EventIdentifierSubscriptionType, Subscription>
    | EventWebhookRequestBody<EventIdentifierTokenType, Token>
    | EventWebhookRequestBody<EventIdentifierTransferType, Transfer>
    | EventWebhookRequestBody<EventIdentifierTenantType, Tenant>
    | EventWebhookRequestBody<EventIdentifierTenantTransferType, TenantTransfer>

  export type EventTypeIdentifier = {
    Charge: EventIdentifierChargeType
    Customer: EventIdentifierCustomerType
    CustomerCard: EventIdentifierCustomerCardType
    Plan: EventIdentifierPlanType
    Subscription: EventIdentifierSubscriptionType
    Token: EventIdentifierTokenType
    Transfer: EventIdentifierTransferType
    Tenant: EventIdentifierTenantType
    TenantTransfer: EventIdentifierTenantTransferType
  }

  export const EventTypeIdentifier = PayjpWebhookEventTypeIdentifier
}
