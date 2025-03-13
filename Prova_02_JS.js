
const idade = parseInt(prompt("Digite sua idade:"));
const status = prompt("Digite seu status de registro (registrado ou não registrado):").toLowerCase();


const maiorDeIdade = idade >= 18 ? true : false;


switch (status) {
    case "registrado":
        console.log("Bem-vindo ao sistema!");
        break;
    case "não registrado":
        console.log("Por favor, complete seu registro para continuar.");
        break;
    default:
        console.log("Status desconhecido.");
}


if (maiorDeIdade && status === "registrado") {
    console.log("Você tem acesso completo ao sistema.");
} else if (!maiorDeIdade || status !== "registrado") {
    console.log("Você tem acesso limitado ao sistema.");
}
