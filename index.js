const printPyramid = (height) => {

  const addLine = (index) => {
    let row = " ".repeat(height - index - 1) //4
    row += "#".repeat(index * 2 + 1)
    console.log(row)
  }
  
  for (let i = 0; i < height; i++){
    addLine(i)
  }
}

printPyramid(10)