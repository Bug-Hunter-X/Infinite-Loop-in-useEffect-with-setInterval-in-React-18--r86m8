# React 18+ useEffect Infinite Loop Bug

This repository demonstrates a subtle but critical bug that can occur in React 18 and later versions when using `setInterval` inside a `useEffect` hook.  Improper cleanup of the interval can lead to an infinite loop, causing performance issues or application crashes.

The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected version.

## Bug Description

The issue arises because the `setInterval` function continues running even when the component unmounts. In React 18+, updates from effects are batched. If the component re-renders during an interval's execution and that effect triggers another update, an infinite loop might occur. 

## Solution

The solution involves properly cleaning up the `setInterval` using the `return` function within `useEffect`.  This ensures that the interval is stopped when the component unmounts or when the effect is re-run.