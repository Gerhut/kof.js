import assert from "node:assert/strict";
import { it } from "node:test";

import { mock } from "./mock.js";

import { Kof } from "kof.js";

it("should works", async () => {
  const kof = Kof("", mock("hello world"));
  const response = await kof("http://example.com/");
  assert.equal(await response.text(), "hello world");
});
