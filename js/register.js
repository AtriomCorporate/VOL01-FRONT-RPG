import User from "../models/user.js";
import { createUser } from "../controller/ControllerRegister.js";

async function enviaDados() {
  const name = document.getElementById("username").value.trim(); // .value.trim() remove os espaços em brando do inicio e do final.
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const user = new User(name, email, password);
  await createUser(user);
}
document.getElementById("adicionarUser").addEventListener("click", enviaDados);
