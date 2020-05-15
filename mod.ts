const DATABASE_URL =
  "https://raw.githubusercontent.com/denoland/deno_website2/master/database.json";

let database: string[] = [];

/** Check whether a package name is available in deno.land/x */
export async function checkIfNameIsAvailable(name: string) {
  if (!database.length) {
    database = Object.keys(await (await fetch(DATABASE_URL)).json());
  }
  return !database.includes(name);
}

/** Check whether a package name is exists in deno.land/x */
export async function checkIfNameExists(name: string) {
  return !(await checkIfNameIsAvailable(name));
}
