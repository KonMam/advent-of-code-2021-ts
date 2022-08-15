import test from "node:test";
import expect from "node:test"
import { readInput } from "../src/day4";

test('reading a csv file should result in a string array', () => {
    expect(readInput('day-4-boards.txt')).toBe(1)

    });