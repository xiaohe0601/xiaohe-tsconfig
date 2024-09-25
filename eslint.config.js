import defineConfig from "@antfu/eslint-config";

export default defineConfig({
  type: "lib",
  markdown: false
}, {
  rules: {
    "style/semi": ["error", "always"],
    "style/indent": ["error", 2],
    "style/quotes": ["error", "double", {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    "style/eol-last": ["error", "never"],
    "style/brace-style": ["error", "1tbs"],
    "style/comma-dangle": ["error", "never"],
    "style/arrow-parens": ["error", "always"],
    "style/member-delimiter-style": ["error", {
      singleline: {
        delimiter: "semi",
        requireLast: true
      },
      multiline: {
        delimiter: "semi",
        requireLast: true
      },
      multilineDetection: "brackets"
    }]
  }
});