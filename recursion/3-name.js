function name(n) {
  if (n <= 0) {
    return;
  } else {
    name(n - 1);
    console.log("Visaj", n);
  }
}

name(10);
