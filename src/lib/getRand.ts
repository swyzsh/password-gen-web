export default function* getRand() {
  while (true) {
    // Generate a random 32-bit unsigned integer
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);

    // Normalize to rand [0, 1]
    yield array[0] / (0xffffffff + 1);
  }
}
