# 🏷️ X Name

Check if a package name is available in the https://deno.land/x third-party Deno modules registry.

[![Test CI](https://github.com/denorg/x-name/workflows/Test%20CI/badge.svg)](https://github.com/denorg/x-name/actions)

```ts
import { checkIfNameIsAvailable, checkIfNameExists } from "https://deno.land/x/x_name/mod.ts";

await checkIfNameIsAvailable("abc"); // false
await checkIfNameIsAvailable("your-package-name"); // true

await checkIfNameExists("abc"); // true
await checkIfNameExists("your-package-name"); // false
```

Alternatively, you can use it directly from the CLI by using `deno run`:

```bash
deno run --allow-net https://deno.land/x/x_name/cli.ts available <your-package-name>
deno run --allow-net https://deno.land/x/x_name/cli.ts exists <your-package-name>
```

You can also install it globally using the following:

```bash
deno install --allow-net -n x-name https://deno.land/x/x_name/cli.ts
```

Then, the package is available to run:

```bash
x-name available <your-package-name>
x-name exists <your-package-name>
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
