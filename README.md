# 🏷️ X Name

Check if a package name is available in the https://deno.land/x third-party registry.

[![Test CI](https://github.com/denorg/x-name/workflows/Test%20CI/badge.svg)](https://github.com/denorg/x-name/actions)

```ts
import { checkIfNameIsAvailable } from "https://raw.githubusercontent.com/denorg/x-name/master/mod.ts";

await checkIfNameIsAvailable("abc"); // false
await checkIfNameIsAvailable("your-package-name"); // true
```

Required permissions:

1. `--allow-net`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-net
```

## 📄 License

MIT © [Denorg](https://den.org.in)
