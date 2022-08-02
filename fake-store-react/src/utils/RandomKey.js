// Generates a random string which can be used as a (statistically) unique identifier.
// This should only be used for items that aren't expected to ever change.
const RandomKey = () => {
    return Math.random().toString(36) + Math.random().toString(36);
};

export default RandomKey;