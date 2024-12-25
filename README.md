# typedef-payjp-webhook

PAY.JPのWebhookのリクエストボディの型定義を提供します。

TypeScriptで開発しているプロジェクトにて、PAY.JPのイベントWebhookエンドポイントの作成時に役立ちます。


## 導入

```bash
# npm
npm install typedef-payjp-webhook

# yarn
yarn add typedef-payjp-webhook
```

※ [payjp](https://www.npmjs.com/package/payjp) は別途インストールが必要です。


## 利用例

```typescript
import { PayjpWebhook } from 'typedef-payjp-webhook'

export async function sampleHandler(req) {
  const body: PayjpWebhook.RequestBody = req.body

  switch (body.type) {
    case PayjpWebhook.EventTypeIdentifier.CustomerCreated:
      // この時、body.dataはPayjp.Customerのオブジェクトと型推測できる
      break

    case PayjpWebhook.EventTypeIdentifier.PlanCreated:
      // この時、body.dataはPayjp.Planのオブジェクトと型推測できる
      break
  }

  return { statusCode: 200, body: 'OK' }
}
```
