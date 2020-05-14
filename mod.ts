const DATABASE_URL =
  "https://raw.githubusercontent.com/denoland/deno_website2/master/database.json";

let database: {
  [index: string]: {
    type: "github" | "gitlab" | "deno_std";
    owner?: string;
    repo?: string;
    desc?: string;
  };
} | undefined = undefined;

/** Check whether a package name is available in deno.land/x */
export async function checkIfNameIsAvailable(name: string) {
  if (!database) {
    database = await (await fetch(DATABASE_URL)).json();
  }
  return !!(database && database[name]);
}
