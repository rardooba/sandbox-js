const PushButton = () => {
  console.log(`
  👇
  🛎️
  `)
} 
const home = () => {
const tv = "📺" 
const tvOff = "🚫"
let isTv = false
  const telecommad = {
    on: () => {
      isTv = true
      PushButton
    },
    off: () => {
      isTv = false
      PushButton
    },
    getTv: () => {
      if(isTv) return tv
      return tvOff
    }
  }

  return telecommad
}

const telecommad = home()

PushButton()
telecommad.on()
console.log("Show tv: ", telecommad.getTv())
PushButton()
telecommad.off()
console.log("Show tv: ", telecommad.getTv())



