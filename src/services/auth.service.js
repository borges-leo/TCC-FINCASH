import Usuario from "../models/Usuario.js";
import jwt from "jsonwebtoken";
//JWT, faz a tranmissão de informações de forma criptografada. Usado para autorizar o acesso do usuário, seja uma parte ou o sistema inteiro.


/* Const para chamar as informações que o usuário possui dentro do banco de dados pelo campo "email". Neste caso, .select(+senha) 
está sendo usado para, assim que for feita a requisição ao banco de dados, a senha também irá retornar nos campos, mas criptografada. */
const loginService = (email) => Usuario.findOne({ email: email }).select("+senha");

const geradorToken = () => jwt.sign({ id: id }, process.env.CHAVE_JWT, {expiresIn: 172800});

export { loginService, geradorToken };