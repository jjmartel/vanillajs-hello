window.onload = function() {
  let who = ["Un alien", "Mi vecino", "El gato", "Un duende"];
  let action = ["robó", "escondió", "rompió", "quemó"];
  let what = ["mi tarea", "mi teléfono", "mi billetera", "mi computadora"];
  let when = [
    "en la mañana",
    "durante la noche",
    "cuando no miraba",
    "mientras dormía",
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex];

  document.getElementById("excuse").innerHTML = excuse;
};
