# VSCODE Snippets

```json
  "GarciaFrameworkComponent": {
    "prefix": "gcp",
    "body": [
      "import { Box, Text } from \"@chakra-ui/react\";",
      "",
      "function ${1:${TM_FILENAME_BASE}}() {",
      "  return (",
      "    <Box>",
      "      <Text>${1:${TM_FILENAME_BASE}}</Text>",
      "    </Box>",
      "  );",
      "}",
      "",
      "export default ${1};",
      ""
    ],
    "description": "NextChakra"
  },
  "GarciaFrameworkComponentProps": {
    "prefix": "gcpp",
    "body": ["type ${1:${TM_FILENAME_BASE}}Props = {", "  ", "};"],
    "description": "GarciaFrameworkComponentProps"
  },
```
