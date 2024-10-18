import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const str = await Console.readLineAsync("덧셈할 문자열을 입력해 주세요.\n");

    if (str.trim() === "") {
      Console.print(0);
      return;
    }

    let delimiter = /[,:]/;
    let numbersStr = str;

    const customDelimiterMatch = str.match(/^\/\/(.)\\n(.*)$/);
    if (customDelimiterMatch) {
      delimiter = new RegExp(`[${customDelimiterMatch[1]}:,]`);
      numbersStr = customDelimiterMatch[2];
    }

    Console.print(`delimiter: ${delimiter}`);
    Console.print(`numbersStr: ${numbersStr}`);

    const numbers = numbersStr.split(delimiter);
    Console.print(`numbers: ${numbers}`);

    const validNumbers = [];
    for (const numStr of numbers) {
      const num = Number(numStr.trim());
      if (isNaN(num) || num < 0) {
        Console.print(`에러: 유효하지 않은 숫자 입력 - ${numStr}`);
        return;
      }
      validNumbers.push(num);
    }

    Console.print(`validNumbers: ${validNumbers}`);
  }
}

export default App;
