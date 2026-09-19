/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Dedicated Data Directory - 专用数据目录。留空则用 supportPath/marks-library。 */
  "dataDirectory"?: string,
  /** AI Protocol - Optional direct BYOK service */
  "aiProtocol": "openai-responses" | "openai-compatible" | "anthropic",
  /** AI Base URL - HTTPS endpoint including API prefix, e.g. https://api.openai.com/v1 */
  "aiBaseUrl"?: string,
  /** AI Model - Model supported by your selected service */
  "aiModel"?: string,
  /** Responses API Key - Only sent to your selected endpoint */
  "openaiResponsesKey"?: string,
  /** Chat API Key - Only sent to your selected endpoint */
  "openaiCompatibleKey"?: string,
  /** Anthropic API Key - Only sent to your selected endpoint */
  "anthropicKey"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search` command */
  export type Search = ExtensionPreferences & {}
  /** Preferences accessible in the `add-bookmark` command */
  export type AddBookmark = ExtensionPreferences & {}
  /** Preferences accessible in the `manage-data` command */
  export type ManageData = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search` command */
  export type Search = {}
  /** Arguments passed to the `add-bookmark` command */
  export type AddBookmark = {}
  /** Arguments passed to the `manage-data` command */
  export type ManageData = {}
}

