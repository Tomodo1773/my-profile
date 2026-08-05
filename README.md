# my-profile

ともどの個人プロフィールページ。NFCカードから開かれる前提の、静的なリンク集です。

## Commands

```bash
sfw pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm format
pnpm check
pnpm preview
```

`pnpm build` は `dist/` に静的ファイルを出力します。

## Deploy (Cloudflare Workers Static Assets)

`dist/` を Cloudflare Workers の静的アセットとして配信します。設定は `wrangler.jsonc`。

- 本番デプロイとブランチ/PR ごとのプレビュー URL は、Cloudflare ダッシュボードの
  **Git 連携**（Workers &amp; Pages → リポジトリを接続）で自動化する。
  - ビルドコマンド: `pnpm build`
  - デプロイコマンド: `npx wrangler deploy`
  - `main` への push で本番デプロイ、その他ブランチ/PR でプレビュー URL を自動生成。
- ローカルから手動でデプロイする場合は `pnpm deploy`（`wrangler login` 済みが前提）。

## Files

- `components/profile.tsx`: 表示本体
- `index.html`: メタタグ
- `src/main.tsx`: Vite のエントリ
