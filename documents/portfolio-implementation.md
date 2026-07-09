# Megumi Karaki | AI Portfolio
## Portfolio Implementation Guide

最終更新日：2026-07-09  
目的：Claude Code 実装用指示書  
優先事項：2026-07-12提出に間に合う完成状態を最優先する

---

# 1. この実装指示書の目的

このファイルは、AI講師ポートフォリオサイトを Claude Code で実装するための指示書です。

`portfolio-specification.md` に記載されたデザイン方針・サイト構成・掲載内容をもとに、HTML / CSS / JavaScript で静的サイトとして制作してください。

今回の最優先は、完璧な作り込みではなく、提出できる完成状態にすることです。

---

# 2. 実装の大前提

## 優先順位

1. サイト全体が最後まで表示されること
2. PC・スマホで大きく崩れないこと
3. 作品が見られること
4. Bloom English LPをHTML/CSSのLPとして実装すること
5. ショート動画2本を掲載すること
6. Contact導線を設置すること

## 後回しでよいもの

- 複雑なアニメーション
- 高度なモーダル
- CMS化
- 多ページの作り込みすぎ
- ロゴ制作
- 完璧なSEO対策

---

# 3. 使用技術

以下で実装してください。

- HTML
- CSS
- JavaScript

フレームワークは使用しなくてよいです。

提出優先のため、シンプルな静的サイトとして作成してください。

---

# 4. 推奨フォルダ構成

現在、ユーザー側で作成済みのフォルダは以下です。

```txt
AI-Portfolio-2026/
├── assets/
└── documents/
```

Claude Code側で、以下のように必要なファイル・フォルダを作成してください。

```txt
AI-Portfolio-2026/
├── index.html
├── bloom-english.html
├── css/
│   ├── style.css
│   └── bloom-english.css
├── js/
│   └── script.js
├── assets/
│   ├── profile.png
│   ├── 01-hero.png
│   ├── 02-problem.png
│   ├── 03-feature.png
│   ├── 04-flow.png
│   ├── 05-voice.png
│   ├── 06-plan.png
│   ├── 07-faq.png
│   ├── 08-cta.png
│   └── short-movie files
└── documents/
    ├── portfolio-specification.md
    └── portfolio-implementation.md
```

動画ファイル名は、実際に `assets` フォルダ内を確認して使用してください。

---

# 5. 実装するページ

## 5-1. index.html

ポートフォリオ本体。

掲載セクション：

1. Hero
2. About
3. What I Can Support
4. AI & Tools
5. Works
6. Workflow
7. Contact
8. Message
9. Footer

## 5-2. bloom-english.html

Bloom English LP作品ページ。

Canva画像をそのまま縦に並べるのではなく、HTML/CSSでLPとして実装してください。

ただし、提出期限を優先するため、Canva版の雰囲気を再現しながら、シンプルなHTML/CSSで問題ありません。

---

# 6. 共通デザイン指定

## カラー

```css
:root {
  --color-base: #F8F7F3;
  --color-main: #0F2A44;
  --color-accent: #3A7BD5;
  --color-sub: #EDE4D7;
  --color-text: #1F2933;
  --color-muted: #6B7280;
  --color-white: #FFFFFF;
}
```

## フォント

Google Fontsで Noto Sans JP を読み込んでください。

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
```

## 基本レイアウト

```css
body {
  font-family: 'Noto Sans JP', sans-serif;
  background: var(--color-base);
  color: var(--color-text);
  line-height: 1.8;
}

.section {
  padding: 96px 24px;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
}
```

## レスポンシブ

スマホでは以下を基本としてください。

```css
@media (max-width: 768px) {
  .section {
    padding: 64px 20px;
  }
}
```

---

# 7. index.html セクション詳細

---

## 7-1. Header

固定ヘッダーでも通常ヘッダーでもよいです。  
提出優先のため、シンプルなナビゲーションで実装してください。

### 表示内容

左：

```txt
Megumi Karaki
```

右：

- About
- Works
- Workflow
- Contact

スマホでは横並びが難しい場合、メニューを簡略化してよいです。

---

## 7-2. Hero

### レイアウト

PC：

- 左：テキスト
- 右：プロフィール画像

SP：

- テキスト → 画像 の1カラム

### テキスト

肩書き：

```txt
AI Instructor / Portfolio
```

メインコピー：

```txt
AIを、仕事で使える力に。
```

本文：

```txt
初心者にも分かりやすく、一人ひとりに寄り添いながら、AIを仕事や暮らしに活かす方法をお伝えしています。
```

ボタン：

- 制作実績を見る → `#works`
- お問い合わせ → `#contact`

画像：

```txt
assets/profile.png
```

---

## 7-3. About

### 見出し

```txt
About
```

### サブ見出し

```txt
AIを、もっと身近で頼れるパートナーに。
```

### 本文

```txt
AIは難しいものではなく、仕事や暮らしをより豊かにしてくれる心強いパートナーだと考えています。

私は、初心者の方にも分かりやすく、一人ひとりの状況に寄り添いながら、実務で活かせるAI活用をお伝えしています。

新しい技術を学び続けながら、AIを「使える知識」として届けられる講師を目指しています。
```

### 補足カード

- 初心者にも分かりやすく
- 仕事で活用できる形に
- 一人ひとりに寄り添う
- 学び続ける姿勢を大切に

---

## 7-4. What I Can Support

### 見出し

```txt
What I Can Support
```

### サブ見出し

```txt
AI活用を、実務につながる形でサポートします。
```

### カード

#### 01. AI活用レクチャー

ChatGPTや生成AIの基本操作から、仕事で使うための考え方まで、初心者にも分かりやすくサポートします。

#### 02. Canva・デザイン制作サポート

Canvaを使ったLPデザイン、バナー、SNS投稿画像など、見やすく伝わるデザイン制作をサポートします。

#### 03. LP・Web構成作成

ターゲットや目的に合わせて、LPやWebページの構成、キャッチコピー、セクション設計を行います。

#### 04. ショート動画制作サポート

広告用ショート動画やSNSリール動画の構成、台本、テロップ設計、改善提案を行います。

#### 05. 生成AIを使った業務改善

文章作成、情報整理、資料作成、リサーチ補助など、日々の業務にAIを取り入れる方法を提案します。

#### 06. 学習・制作プロセスの伴走

完成物だけでなく、考え方や制作の流れも大切にしながら、継続的に改善できる形でサポートします。

---

## 7-5. AI & Tools

### 見出し

```txt
AI & Tools
```

### サブ見出し

```txt
目的に合わせて、複数のAI・制作ツールを活用しています。
```

### 表示ツール

タグ形式で表示してください。

- ChatGPT
- Claude
- Claude Code
- Canva
- CapCut
- Vrew
- Higgsfield
- Gamma
- Perplexity
- Google Workspace
- Visual Studio Code

---

## 7-6. Works

### 見出し

```txt
Works
```

### サブ見出し

```txt
AIを活用して制作したLP・ショート動画をご紹介します。
```

### Work 01

タイトル：

```txt
Bloom English LP Design
```

カテゴリー：

```txt
LP Design
```

概要：

```txt
AI英会話サービス「Bloom English」の無料体験申し込みを目的としたランディングページです。構成設計・コピーライティング・デザインまで一貫して制作しました。
```

使用ツール：

- ChatGPT
- Canva

表示方法：

- Worksカードとして表示
- サムネイル画像は `assets/01-hero.png` を使用
- ボタン「LPを見る」を設置
- ボタンリンクは `bloom-english.html`

### Work 02

タイトル：

```txt
Bloom English Short Movie
```

カテゴリー：

```txt
Short Movie
```

概要：

```txt
Bloom Englishの無料体験申し込みへつなげるための広告動画です。短時間でサービスの魅力が伝わるよう、構成・台本・AI動画生成・編集まで行いました。
```

使用ツール：

- ChatGPT
- Higgsfield
- CapCut

表示方法：

- assets内のmp4をvideoタグで表示
- ファイル名は実際のassetsフォルダを確認して使用
- controls / muted / playsinline を指定

### Work 03

タイトル：

```txt
Bloom English Short Movie Vol.2
```

カテゴリー：

```txt
Short Movie
```

概要：

```txt
AIとの英会話を、もっと身近に感じてもらうことを目的に制作したショート動画です。
```

使用ツール：

- ChatGPT
- Higgsfield
- CapCut

表示方法：

- assets内のmp4をvideoタグで表示
- ファイル名は実際のassetsフォルダを確認して使用
- controls / muted / playsinline を指定

---

## 7-7. Workflow

### 見出し

```txt
Workflow
```

### サブ見出し

```txt
目的整理から制作・改善まで、プロセスを大切にしています。
```

### ステップ

1. 目的整理
2. 構成設計
3. コピー作成
4. デザイン制作
5. AI活用
6. 改善

各ステップはカードまたは縦のタイムラインで表示してください。

---

## 7-8. Contact

### 見出し

```txt
Contact
```

### サブ見出し

```txt
AI活用や制作について、お気軽にご相談ください。
```

### 本文

```txt
AI講座、AI活用サポート、LP構成、デザイン制作、ショート動画制作など、目的に合わせてご相談いただけます。
```

### ボタン

```txt
メールで相談する
```

リンクは仮で以下にしてください。

```txt
mailto:example@example.com
```

---

## 7-9. Message

### 見出し

```txt
Message
```

### 本文

```txt
AIは日々進化し、新しい可能性を広げ続けています。

だからこそ、私自身も学び続けながら、一人ひとりに寄り添い、「仕事で活かせるAI活用」をお伝えしていきたいと考えています。

AIは難しいものではなく、仕事や暮らしをより豊かにしてくれる心強いパートナーです。

このポートフォリオを通して、私の想いや取り組みが少しでも伝わり、「AIを始めてみたい」「もっと活用してみたい」と感じていただけたら嬉しいです。
```

---

## 7-10. Footer

```txt
Megumi Karaki | AI Portfolio
© 2026 Megumi Karaki
```

---

# 8. bloom-english.html 実装詳細

Bloom English LPは、ポートフォリオ内の作品詳細ページとして実装してください。

## 重要

Canvaで作成した8枚の画像をそのまま縦に並べるのではなく、HTML/CSSでランディングページとして再現してください。

ただし提出優先のため、完全再現よりも以下を優先してください。

- LPとして読めること
- 申し込み導線が分かること
- Canva版の雰囲気が伝わること
- スマホでも崩れないこと

---

## LP全体の方向性

### サービス名

Bloom English

### 目的

無料体験レッスンへの申し込み

### ターゲット

- 忙しくて英語学習が続かない人
- 英会話に苦手意識がある初心者
- AIを使って気軽に英語を練習したい人
- すきま時間で学習したい人

### デザイン方向

- やさしい
- 清潔感
- 初心者にも安心
- 余白多め
- 丸みのあるカード
- 親しみやすい英会話サービス

---

## LPセクション

### 1. Hero

見出し：

```txt
忙しい毎日でも、英語は続けられる。
```

本文：

```txt
AIとの会話で、すきま時間に気軽に英語を練習。初心者でも安心して始められる、新しい英会話レッスンです。
```

CTA：

```txt
無料体験レッスンに申し込む
```

参考画像：

```txt
assets/01-hero.png
```

---

### 2. Problem

見出し：

```txt
こんなお悩みはありませんか？
```

内容：

- 英語を話したいけれど、何から始めたらいいか分からない
- 忙しくて学習時間が取れない
- 英会話スクールは緊張してしまう
- 一人だと続けられない
- 使える英語を身につけたい

参考画像：

```txt
assets/02-problem.png
```

---

### 3. Feature

見出し：

```txt
Bloom Englishでできること
```

カード：

1. AIといつでも会話練習
2. すきま時間で続けやすい
3. 初心者にもやさしいステップ
4. 実際に使える英語表現を学べる

参考画像：

```txt
assets/03-feature.png
```

---

### 4. Flow

見出し：

```txt
レッスンの流れ
```

ステップ：

1. 無料体験に申し込む
2. 目標やレベルを確認
3. AI英会話を体験
4. 自分に合う学習方法を知る

参考画像：

```txt
assets/04-flow.png
```

---

### 5. Voice

見出し：

```txt
受講生の声
```

カード例：

```txt
英語を話すことに苦手意識がありましたが、AIとの練習なので気軽に始められました。
```

```txt
忙しい日でも5分だけ練習できるので、無理なく続けられています。
```

```txt
間違えても大丈夫だと思えるようになり、英語へのハードルが下がりました。
```

参考画像：

```txt
assets/05-voice.png
```

---

### 6. Plan

見出し：

```txt
プラン
```

プランは2つ表示してください。

#### Basic Plan

```txt
まずは気軽に英語を始めたい方向け
```

#### Support Plan

```txt
学習を習慣化し、しっかり続けたい方向け
```

CTA：

```txt
無料体験レッスンに申し込む
```

参考画像：

```txt
assets/06-plan.png
```

---

### 7. FAQ

見出し：

```txt
よくある質問
```

Q&A：

Q. 英語が苦手でも大丈夫ですか？  
A. はい。初心者の方にも分かりやすく進められる内容です。

Q. 忙しくても続けられますか？  
A. すきま時間で取り組めるため、無理なく続けやすい設計です。

Q. AI英会話は難しくありませんか？  
A. 難しい操作は必要ありません。気軽に会話練習ができます。

参考画像：

```txt
assets/07-faq.png
```

---

### 8. CTA

見出し：

```txt
今日から、英語を話す一歩を。
```

本文：

```txt
AIとの会話で、英語学習をもっと気軽に。まずは無料体験レッスンで、自分に合う学び方を体験してみませんか？
```

ボタン：

```txt
無料体験レッスンに申し込む
```

参考画像：

```txt
assets/08-cta.png
```

---

# 9. JavaScript

最低限でよいです。

実装する場合：

- スムーススクロール
- スクロールフェードイン
- FAQ開閉
- ヘッダーの簡単な動き

複雑なJSは不要です。

---

# 10. アニメーション

## 使用してよいもの

- fade-in
- hover
- transform translateY
- opacity

## 避けるもの

- 派手な動き
- 点滅
- 強い回転
- 読み込みが重い演出

---

# 11. 動画表示

mp4は `assets` フォルダ内を確認し、2本をWorksに掲載してください。

HTML例：

```html
<video controls muted playsinline>
  <source src="assets/実際のファイル名.mp4" type="video/mp4">
</video>
```

---

# 12. 最終チェック項目

実装後、以下を確認してください。

## 表示確認

- index.html が開ける
- bloom-english.html が開ける
- profile.png が表示される
- LPサムネイルが表示される
- 動画2本が表示される
- Contactボタンがある

## レスポンシブ確認

- PCで大きく崩れない
- スマホ幅で1カラムになる
- 文字が小さすぎない
- ボタンが押しやすい
- 動画が画面幅からはみ出さない

## 導線確認

- HeroからWorksへ移動できる
- WorksからBloom English LPへ移動できる
- LPページからポートフォリオトップへ戻れる
- Contactへ移動できる

---

# 13. 実装後の理想状態

最終的に、以下の状態になっていれば提出可能です。

- AI講師としての信頼感が伝わる
- Aboutで人柄が伝わる
- Worksで制作物が見られる
- Bloom English LPがWebページとして見られる
- ショート動画2本が見られる
- スマホでも確認できる
- Contact導線がある

完璧な作り込みより、提出できる完成状態を優先してください。
