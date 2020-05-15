import {
  checkIfNameIsAvailable,
  checkIfNameExists
} from "https://deno.land/x/x_name/mod.ts";

async function cli() {
  if (Deno.args.length) {
    const command = Deno.args[0];
    if (command === "available") {
      console.log(await checkIfNameIsAvailable(Deno.args[1]));
      return;
    } else {
      console.log(await checkIfNameExists(Deno.args[1]));
    }
  }
}

cli();
