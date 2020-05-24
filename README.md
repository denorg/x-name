# 🏷️ X Name

Check if a package name is available in the https://deno.land/x third-party Deno modules registry.

[![Test CI](https://github.com/denorg/x-name/workflows/Test%20CI/badge.svg)](https://github.com/denorg/x-name/actions)

## ⭐ Getting started

Import the `checkIfNameIsAvailable` or `checkIfNameExists` function and use it:

```ts
import { checkIfNameIsAvailable, checkIfNameExists } from "https://deno.land/x/x_name/mod.ts";

await checkIfNameIsAvailable("abc"); // false
await checkIfNameIsAvailable("your-package-name"); // true

await checkIfNameExists("abc"); // true
await checkIfNameExists("your-package-name"); // false
```

### CLI with [DPX](https://github.com/denorg/dpx)

After [installing DPX](https://github.com/denorg/dpx), you can directly use the CLI using the `dpx` command:

```bash
dpx x_name available <your-package-name> --allow-net
# true

dpx x_name exists <your-package-name> --allow-net
# false
```

### CLI

Alternatively, you can use it directly from the CLI by using `deno run`:

```bash
deno run --allow-net https://deno.land/x/x_name/cli.ts available <your-package-name>
deno run --allow-net https://deno.land/x/x_name/cli.ts exists <your-package-name>
```

You can also install it globally using the following:

```bash
deno install --allow-net -n x_name https://deno.land/x/x_name/cli.ts
```

Then, the package is available to run:

```bash
x_name available <your-package-name>
x_name exists <your-package-name>
```

### Configuration

Required permissions:

1. `--allow-net`

## 👩‍💻 Development

Run tests:

```bash
deno test --allow-net
```

## 📄 License

MIT © [Denorg](https://den.org.in)

<p align="center">
  <a href="https://den.org.in">
    <img width="100" alt="" src="https://raw.githubusercontent.com/denorg/denorg/master/logo.svg">
  </a>
</p>
<p align="center">
  <sub>A project by <a href="https://den.org.in">Denorg</a>, the world's first Deno-focused community<br>organization and consulting company. <a href="https://den.org.in">Work with us →</a></sub>
</p>
