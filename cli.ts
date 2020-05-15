import {
  checkIfNameIsAvailable,
  checkIfNameExists
} from "https://deno.land/x/x_name/mod.ts";

if (Deno.args.length) {
  const command = Deno.args[0];
  if (command === "available") {
    checkIfNameIsAvailable(Deno.args[1])
      .then((result) => console.log(result));
    return;
  } else {
    checkIfNameExists(Deno.args[1])
      .then((result) => console.log(result));
  }
}
