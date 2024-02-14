import { prompt } from "./helper.js";

const isValidEmail = (email) => email.includes("@") && email.includes(".")

console.log("NODE-MAILER ™️");

let destinataire = await prompt("Enter recipient your email : ");


while (!destinataire.length || !isValidEmail(destinataire)) {
  console.error("🚨 Fill email !")
  destinataire = await prompt("Enter recipient your email : ");
}

const objet = await prompt("Enter your object : ");

const message = await prompt("Enter your message : ");

console.log(`

The mail is sending...

To : ${destinataire}
Object : ${objet}
${message}

`);
