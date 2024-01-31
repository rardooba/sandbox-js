var usernme = 'Tyler'

function foo () {
	bar = 'Created in foo without declaration'
}

foo()

console.log(window.username) // Tyler
console.log(window.bar) // Created in foo without declaration