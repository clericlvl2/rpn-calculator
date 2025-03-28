import { isEmptyString } from '@shared/validation';

export class TokenAccumulator {
  private accumulator: string[] = [];

  add(chunk: string) {
    this.accumulator.push(String(chunk));
  }

  collect(): string {
    const collected = this.accumulator.join('');

    this.reset();

    return collected;
  }

  collectTo(target: string[]): void {
    const collected = this.collect();

    if (!isEmptyString(collected)) {
      target.push(collected);
    }
  }

  private reset() {
    this.accumulator = [];
  }
}
