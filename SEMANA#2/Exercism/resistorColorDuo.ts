let colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
export function decodedValue ([firstColor, secondColor]: [string, string]): number {
    return (colors.indexOf(firstColor) *10 )+ colors.indexOf(secondColor)
}