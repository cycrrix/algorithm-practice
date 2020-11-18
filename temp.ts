// 请在此处实现 polymerize 过程
function polymerize(inputs: number[][]): number[][][] {
  if (inputs.length === 0) return [];
  const result: number[][][] = [];
  result.push([inputs[0]]);
  for (let i = 1; i < inputs.length; i++) {
    let isAddNewSection = true;
    // 因为顺序不定，可能某个网格衔接多个区域，用来存储多个区域索引
    const adjoinIndexs: number[] = [];
    for (let j = 0; j < result.length; j++) {
      if (isAdjoin(result[j], inputs[i])) {
        // result[j].push(inputs[i]);
        isAddNewSection = false;
        adjoinIndexs.push(j);
      }
    }
    // 都不相邻，新增一块区域
    if (isAddNewSection) {
      result.push([inputs[i]]);
      continue;
    }
    // 网格衔接1个区域
    if (adjoinIndexs.length === 1) {
      result[adjoinIndexs[0]].push(inputs[i]);
    }
    // 网格衔接多个区域；
    if (adjoinIndexs.length > 1) {
      // 合并多个区域，并删除多余区域
      for (let k = adjoinIndexs.length - 1; k > 0; k--) {
        result[adjoinIndexs[0]].push(...result[adjoinIndexs[k]]);
        result.splice(adjoinIndexs[k], 1);
      }
      // 加上当前网格
      result[adjoinIndexs[0]].push(inputs[i]);
    }
  }
  return result;
}

// 是否跟当前网格区域相邻
function isAdjoin(section: number[][], position: number[]): boolean {
  for (let i = 0; i < section.length; i++) {
    if (
      section[i][0] === position[0] &&
      Math.abs(section[i][1] - position[1]) <= 1
    ) {
      return true;
    } else if (
      section[i][1] === position[1] &&
      Math.abs(section[i][0] - position[0]) <= 1
    ) {
      return true;
    }
  }
  return false;
}

// 测试用例
const input1 = [
  [1, 1],
  [2, 1],
  [2, 4],
  [2, 5],
  [3, 2],
  [3, 4],
  [4, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [5, 3],
  [6, 3],
  [6, 4],
  [6, 5],
];
const input2 = [
  [1, 1],
  [2, 1],
  [2, 4],
  [2, 5],
  [3, 2],
  [3, 4],
  [4, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [5, 3],
  [6, 3],
  [6, 4],
  [6, 5],
  [4, 3],
];

console.log(polymerize(input1));
console.log(polymerize(input2));
