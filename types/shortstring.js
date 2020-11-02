const shortstring = ({
  encoder: (v, b) => {
    let d = new TextEncoder("utf-8").encode(v);
    if (d.length > 32) {
      throw Error("String is too long for encoding.");
    }
    for (let i = 0; i < 32; i++) {
      if (i < d.byteLength) {
        b[i] = d[i];
      } else {
        b[i] = 0;
      }
    }
    return null;
  },
  decoder: (b, blob) => {
    const i = b.indexOf(0);
    if (i !== -1) {
      b = b.subarray(0, i);
    }
    return new TextDecoder("utf-8").decode(b);
  },
});

export { shortstring };