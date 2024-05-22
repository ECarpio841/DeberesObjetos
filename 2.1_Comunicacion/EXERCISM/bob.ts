export function hey(message: unknown): unknown {
    if(typeof message === "string")
          if (/[a-zA-Z]/.test(message) && message === (message as string).toUpperCase() && message.charAt(message.length - 1) !== "?") return 'Whoa, chill out!';
          else if (/[a-zA-Z]/.test(message) && message === (message as string).toUpperCase() && message.charAt(message.length - 1) === "?") return  `Calm down, I know what I'm doing!`;
          else if (message.trim().charAt(message.trim().length - 1) === "?") return 'Sure.';
          else if ((message as string).replace(/\s+/g,"") === "") return 'Fine. Be that way!';
          else return 'Whatever.'; 
      return 'Invalid argument';
  
  }
  
  