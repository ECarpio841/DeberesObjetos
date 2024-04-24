enum Colors {
    black = 0,
    brown = 1,
    red = 2,
    orange = 3,
    yellow = 4,
    green = 5,
    blue = 6,
    violet = 7,
    grey = 8,
    white = 9,
  }
  
  type Color = keyof typeof Colors
  export function decodedResistorValue([firstColor, secondColor, thirdColor]: Color[]): string {
    let value = (Colors[firstColor] * 10 + Colors[secondColor]) * Math.pow(10, Colors[thirdColor])
    if (value > 1_000_000_000){
      return `${value / 1_000_000_000} gigaohms`
    } else if (value > 1_000_000) {
      return `${value / 1_000_000} megaohms`
    } else if (value > 1_000) {
      return `${value / 1_000} kiloohms`
    } else {
      return `${value} ohms`
    }
  }