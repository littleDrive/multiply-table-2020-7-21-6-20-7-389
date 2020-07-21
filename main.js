function createMultiplyTable(start, end) {
  if (!isArgsValid(start, end)) {
    return null;
  } 
  return createMulTable(start, end);
  // return createMulTable(start, end);

}


function isArgsValid(start, end) {
  if (start > end) {
    return false;
  }else if (start <1 || start > 1000) {
    return false
  }else if (end <1 || end > 1000) {
    return false
  }else {
    return true;
  }
}

function createMulTable (start, end) {
  let result = "";
  for (let i = start; i <= end; i++) {
    result += creatMulLine(start, i) + "\n";
  }
  return result.substr(0, result.length-1);

}

function creatMulLine (start, j) {
  let line = "";
  for (let i = start; i <= j; i++) {
    line += i + "*" + j + "=" + i * j + "\t";
  }
  return line.substr(0, line.length-1);
  
}

module.exports = {
  createMultiplyTable,
};
