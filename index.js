const printPyramid = (height) => {

  for (let i = 0; i < height; i++){
    let row = " ".repeat(height - i - 1)
    row += "#".repeat(i * 2 + 1)
    console.log(row)
  }

}

printPyramid(5)