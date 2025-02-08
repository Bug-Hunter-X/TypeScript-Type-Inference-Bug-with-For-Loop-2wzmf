function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    // Explicitly define i as number to avoid type inference issues
    const i:number = i;
    console.log(i);
  }
}

printNumbers(10); 