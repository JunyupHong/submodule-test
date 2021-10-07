export const log = message => {
  console.log(`[submodule] ${message}`);
}

const add = (...args) => args.reduce((acc, cur) => acc + cur, 0);

export { add };
