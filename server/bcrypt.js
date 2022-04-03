import bcrypt from "bcrypt";

const saltRounds = 12;
const plaintextPassword = "password";
let hashedPassword = "";

async function handlePasswords() {
    // todo Put this in the signup router
    const hash = await bcrypt.hash(plaintextPassword, saltRounds);
    console.log(hash);

    // todo Put this in the login router
    // const isSame = await bcrypt.compare(plaintextPassword, hashedPassword);
    // console.log(isSame);
}

handlePasswords();

export default {};
