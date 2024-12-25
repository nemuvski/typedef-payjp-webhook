/**
 * @see {@link https://pay.jp/docs/api/#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%A8webhook}
 */

/**
 * Group: charge/dispute
 */
const EventIdentifierCharge = {
  // 支払いの成功
  ChargeSucceeded: 'charge.succeeded',
  // 支払いの失敗
  ChargeFailed: 'charge.failed',
  // 支払いの更新
  ChargeUpdated: 'charge.updated',
  // 支払いの返金
  ChargeRefunded: 'charge.refunded',
  // 支払いの確定
  ChargeCaptured: 'charge.captured',
  // チャージバック発生
  DisputeCreated: 'dispute.created',
} as const
export type EventIdentifierChargeType = (typeof EventIdentifierCharge)[keyof typeof EventIdentifierCharge]

/**
 * Group: customer
 */
const EventIdentifierCustomer = {
  // 顧客の作成
  CustomerCreated: 'customer.created',
  // 顧客の更新
  CustomerUpdated: 'customer.updated',
  // 顧客の削除
  CustomerDeleted: 'customer.deleted',
} as const
export type EventIdentifierCustomerType = (typeof EventIdentifierCustomer)[keyof typeof EventIdentifierCustomer]

/**
 * Group: customer.card
 */
const EventIdentifierCustomerCard = {
  // 顧客のカード作成
  CustomerCardCreated: 'customer.card.created',
  // 顧客のカード更新
  CustomerCardUpdated: 'customer.card.updated',
  // 顧客のカード削除
  CustomerCardDeleted: 'customer.card.deleted',
} as const
export type EventIdentifierCustomerCardType =
  (typeof EventIdentifierCustomerCard)[keyof typeof EventIdentifierCustomerCard]

/**
 * Group: plan
 */
const EventIdentifierPlan = {
  // プランの作成
  PlanCreated: 'plan.created',
  // プランの更新
  PlanUpdated: 'plan.updated',
  // プランの削除
  PlanDeleted: 'plan.deleted',
} as const
export type EventIdentifierPlanType = (typeof EventIdentifierPlan)[keyof typeof EventIdentifierPlan]

/**
 * Group: subscription
 */
const EventIdentifierSubscription = {
  // 定期課金の作成
  SubscriptionCreated: 'subscription.created',
  // 定期課金の更新
  SubscriptionUpdated: 'subscription.updated',
  // 定期課金の削除
  SubscriptionDeleted: 'subscription.deleted',
  // 定期課金の停止
  SubscriptionPaused: 'subscription.paused',
  // 定期課金の再開
  SubscriptionResumed: 'subscription.resumed',
  // 定期課金のキャンセル
  SubscriptionCanceled: 'subscription.canceled',
  // 定期課金の期間更新
  SubscriptionRenewed: 'subscription.renewed',
} as const
export type EventIdentifierSubscriptionType =
  (typeof EventIdentifierSubscription)[keyof typeof EventIdentifierSubscription]

/**
 * Group: token
 */
const EventIdentifierToken = {
  // トークンの作成
  TokenCreated: 'token.created',
} as const
export type EventIdentifierTokenType = (typeof EventIdentifierToken)[keyof typeof EventIdentifierToken]

/**
 * Group: transfer
 */
const EventIdentifierTransfer = {
  // 入金内容の確定 (通常加盟店、プラットフォーマー)
  TransferSucceeded: 'transfer.succeeded',
} as const
export type EventIdentifierTransferType = (typeof EventIdentifierTransfer)[keyof typeof EventIdentifierTransfer]

/**
 * Group: tenant
 */
const EventIdentifierTenant = {
  // テナント情報の更新、本番申請(初回・更新含む)、弊社による審査結果反映
  TenantUpdated: 'tenant.updated',
} as const
export type EventIdentifierTenantType = (typeof EventIdentifierTenant)[keyof typeof EventIdentifierTenant]

/**
 * Group: tenant_transfer
 */
const EventIdentifierTenantTransfer = {
  // テナントの入金内容の確定
  TenantTransferSucceeded: 'tenant_transfer.succeeded',
} as const
export type EventIdentifierTenantTransferType =
  (typeof EventIdentifierTenantTransfer)[keyof typeof EventIdentifierTenantTransfer]

export const PayjpWebhookEventTypeIdentifier = {
  ...EventIdentifierCharge,
  ...EventIdentifierCustomer,
  ...EventIdentifierCustomerCard,
  ...EventIdentifierPlan,
  ...EventIdentifierSubscription,
  ...EventIdentifierToken,
  ...EventIdentifierTransfer,
  ...EventIdentifierTenant,
  ...EventIdentifierTenantTransfer,
} as const
