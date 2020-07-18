# types-kintone-plugin-lib

- kintone プラグイン開発用の型定義ファイル
- [@kintone/dts-gen](https://github.com/kintone/dts-gen) から `kintone.d.ts` を修正してコピー
  - グローバルではなくモジュール形式に変更
    - 明示的にインポートして使用する
  - `kintone.$PLUGIN_ID` を追加
- `cybozu.d.ts` は SG謹製

## install

- `yarn add --dev @types/kintone-plugin@https://github.com/SonicGarden/types-kintone-plugin`
