// Finds action related to the payload.
export const hasItem = (arr, condCallback) => arr.items.find(element => condCallback(element));

// Returns array modifying a single item utilizing the passed in callback.
export const modItem = (arr, condCallback, mod) => arr.map(element => condCallback(element) ? mod(element) : element);

// Returns an array with a new item appended on.
export const appendItem = (arr, item) => ([...arr, item]);

// Returns an array with matching items removed.
export const removeItem = (arr, condCallback) => arr.filter(element => !condCallback(element));

// Simply returns the state with no changes.
export const noChange = (state) => ({...state});