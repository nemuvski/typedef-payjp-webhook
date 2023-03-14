/**
 * @see {import('payjp').Event}
 * @see {@link https://pay.jp/docs/api/#event%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88}
 */
export interface EventWebhookRequestBody<EVENT_TYPE extends string, EVENT_DATA> {
  /**
   * evnt_で始まる一意なオブジェクトを示す文字列
   *
   * @example evnt_5328acdbdb5294d6fc9cc903f8c
   */
  id: string
  /**
   * イベントのタイプ
   */
  type: EVENT_TYPE
  /**
   * イベントに関連したリソースオブジェクト
   */
  data: EVENT_DATA
  /**
   * ライブモードかのフラグ
   */
  livemode: boolean
  /**
   * オブジェクトの種類
   */
  object: 'event' | string
  /**
   * まだWebhookが正常に受信されていない送信先URLの数を示す
   *
   * @example 1
   */
  pending_webhooks: number
  /**
   * イベント発生日時(UTCタイムスタンプ)
   *
   * @example 1442212986
   */
  created: number
}
