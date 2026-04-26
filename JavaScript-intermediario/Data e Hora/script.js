// Obter datas e horas no JavaScript.
console.log("Obtendo data e horas no JavaScript");
function dataHora() {
  const selecionando_Data_Hora = function () {
    // Exibe a data e hora atual.
    console.log(new Date());

    //   Exibe a data de referencia (considerendo a fuso)
    console.log(new Date(0));

    //   Exibe o número de milisegundos
    console.log(new Date().getTime());

    // Definindo uma data e uma hora específica

    /*
      - Ano mes dia
      - Lembrando que o ano começa do 0 
      */

    console.log(new Date(2024, 5, 14, 21, 7, 4));

    //   Defeinindo data com sting
    console.log("Defeinindo data com sting", new Date("2026-07-31T14:05:01"));

    //   Podemos definir o [Mes dia, ano oras]
    console.log(new Date("jun 3, 2032 13:34:01"));
  };

  const obtendo_Cada_Valor = function () {
    let date = new Date();
    console.log("######################");

    // Dia da semana de 0 à 6 (domingo é 0)
    console.log("Dia da semana de 0 à 6 (domingo é 0)", date.getDay());

    // Dia so mês (0 à 30)
    console.log("Dia do mês", date.getDate());

    // Mes (0 à 11)
    console.log("Mes", date.getMonth() + 1);

    // Ano
    console.log("Ano", date.getFullYear());

    // Horas
    console.log("Horas", date.getHours());

    // Mitutos
    console.log("Minutos", date.getMinutes());

    // Segundos
    console.log("Segundos", date.getSeconds());
  };

  const modificando_Data_Hora = function () {
    const date = new Date();
    console.log("######################");

    // Modifica o ano
    date.setFullYear(2021);

    // Modifica o mes (Começa do 0)
    date.setMonth(0);

    // Modifica o dia
    date.setDate(19);

    // Modifica a hora
    date.setHours(21);

    // Modifica o minuto
    date.setMinutes(3);

    // Modifica o segundos
    date.setSeconds(33);

    console.log(date);
  };

  const formatando_Date_Hora = () => {
    let date = new Date("2013-07-03T14:40");
    console.log("###################");
    // Formatando para o dia sempre ter 2 digites
    let day = date.getDate().toString().padStart(2, "0");
    console.log(day);

    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    console.log(month);

    // Ano
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();

    console.log(`${day}/${month}/${year} as ${hour}:${minute}`);
  };

  const convertendo_Data_pra_sting = () => {
    const date = new Date("2012-01-02T15:20:00");
    //Convete pra string
    date.toString();

    // Exibe somente a hora
    let hour = date.toTimeString();
    console.log(hour);

    // Exibe somente a data
    let dt = date.toDateString();
    console.log(dt);
  };

  //Exibindo data e hora formatadas de acordo com a localidade

  const exibindo_formatadas_localidade = () => {
    console.log("Exibindo data e hora formatadas de acordo com a localidade");
    const date = new Date("2014-07-03T12:20:00");

    // Exibindo formatado de acode com o pais
    // Brasil
    let brasil_date = date.toLocaleDateString("pt-BR");
    let brasil_hour = date.toLocaleTimeString("pt-BR");
    console.log(`Data do brasil ${brasil_date} Hora do brasil ${brasil_hour}`);

    // Estados unidos
    let usa_date = date.toLocaleDateString("en");
    let usa_hour = date.toLocaleTimeString("en");
    console.log(`Data do USA ${usa_date} Hora do USA ${usa_hour}`);
  };

  const recursos_data_hora = () => {
    let date = new Date();
    console.log("##################");

    console.log(date.toLocaleString("en"));

    // Mosta a date e hora em style diferentes.
    console.log(
      date.toLocaleString("pt-BR", {
        dateStyle: "short",
      }),
    );

    // Date por estenço
    console.log(
      date.toLocaleString("pt-BR", {
        dateStyle: "long",
      }),
    );

    console.log(
      date.toLocaleString("pt-BR", {
        dateStyle: "medium",
      }),
    );

    console.log(
      date.toLocaleString("pt-BR", {
        dateStyle: "full",
      }),
    );

    // Formatando date

    let format = date.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",

      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
    console.log(format);

    let amout = 12.5;
    let res = amout.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    console.log(`Sue saldo da conta é ${res}R$`);
  };

  selecionando_Data_Hora();
  obtendo_Cada_Valor();
  modificando_Data_Hora();
  formatando_Date_Hora();
  convertendo_Data_pra_sting();
  exibindo_formatadas_localidade();
  recursos_data_hora();

  //   setFullYear, setMonth, setDate para alterar o ano, mês e dia. Para modificar a hora, usaremos setHours, setMinutes e setSeconds.
}
dataHora();
