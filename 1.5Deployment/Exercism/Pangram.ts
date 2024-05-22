const alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] 
export function isPangram(sentence: string) {
  const lowerSentence = sentence.toLowerCase()
  return alpha.every(x => lowerSentence.includes(x))
}
