// @ts-check

import { defineFlatConfig } from "@ayingott/eslint-config"

export default defineFlatConfig(
  [
    { ignores: ["**/src-tauri/**"] },
    {
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  {
    react: true,
    prettier: true,
    vue: false,
    unocss: false,
  },
)
