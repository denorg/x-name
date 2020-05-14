import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { checkIfNameIsAvailable } from "./mod.ts";

Deno.test("name should be available", async (): Promise<void> => {
  assertEquals(await checkIfNameIsAvailable("abc"), true);
});
Deno.test("name should not be available", async (): Promise<void> => {
  assertEquals(
    await checkIfNameIsAvailable(`3hu92jr031-${Math.random().toString()}`),
    false,
  );
});
