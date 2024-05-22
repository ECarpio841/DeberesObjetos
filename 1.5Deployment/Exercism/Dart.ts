export function score(x: number, y: number): number {
    const dist = Math.sqrt(x ** 2 + y ** 2);
    let score = 0;
    if (dist <= 1) { score = 10; }
    else if (dist <= 5) { score = 5; }
    else if (dist <= 10) { score = 1; } 
    return score;
  }