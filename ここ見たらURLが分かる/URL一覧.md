# 軽貨物TAKE URL一覧

更新日：2026-04-30

## 本番URL（GitHub Pages）

### 総合トップ
https://takeshimonoseki.github.io/

### お客様専用トップ
https://takeshimonoseki.github.io/delivery/

### ドライバー専用トップ
https://takeshimonoseki.github.io/driver-entry/

### 配送相談・見積依頼フォーム
https://takeshimonoseki.github.io/request/

### 協力ドライバー登録ページ
https://takeshimonoseki.github.io/driver/

### 運賃シミュレーター
https://takeshimonoseki.github.io/simulator/

---

## ローカル確認URL（npm run preview 使用時）

通常は以下です。

### 総合トップ
http://localhost:4173/

### お客様専用トップ
http://localhost:4173/delivery/

### ドライバー専用トップ
http://localhost:4173/driver-entry/

### 配送相談・見積依頼フォーム
http://localhost:4173/request/

### 協力ドライバー登録ページ
http://localhost:4173/driver/

### 運賃シミュレーター
http://localhost:4173/simulator/

---

## 注意

`npm run preview` 実行時に、PowerShellで以下のように出る場合があります。

Port 4173 is in use, trying another one...
Local: http://localhost:4174/

この場合は、4173ではなく4174を使います。

例：
http://localhost:4174/delivery/
http://localhost:4174/driver-entry/

---

## 新しいページが本番で404になる場合

Google登録の問題ではありません。

原因は主に以下です。

1. GitHub DesktopでまだCommitしていない
2. Push originしていない
3. GitHub Pagesの反映待ち
4. GitHub Actionsが失敗している

確認手順：

1. GitHub Desktopを開く
2. Changesに変更が残っていないか見る
3. 残っていたらCommit
4. Push origin
5. 1〜3分待つ
6. 本番URLを開く

---

## GitHub Desktopで公開前に確認する差分

今回の専用トップページ追加・編集で主に見るファイル：

- public/delivery/index.html
- public/driver-entry/index.html

以下が変更に出ている場合は注意：

- src/App.tsx
- src/types.ts
- vite.config.ts

これらは仕組みに関わるため、変更していないか確認すること。
