# TypeScript Type Inference Bug

This repository demonstrates a subtle bug in TypeScript related to type inference within a `for` loop.  The issue becomes apparent when dealing with scenarios where the loop counter's type is not explicitly defined. 

The `bug.ts` file contains the buggy code. The `bugSolution.ts` file provides a corrected version and explains the problem and solution.

## Bug Description

The original code appears to work correctly for small input values. However, there's an implicit use of `any` within the loop, which could lead to unexpected behavior or type errors in more complex situations. The solution makes the loop counter's type explicit, thereby resolving the issue.