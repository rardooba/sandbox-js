// 


const url = "http://user/profile"
//(item) => Boolean(item)
const createPath = (url) => url.split("/").filter(Boolean).filter((item) => item !== "http:").map(item => item + "/").join("")

console.log(createPath(url))
