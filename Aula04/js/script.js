var num = 0;

function umadez() {

    let para = document.createElement('p');

    para.textContent = num;

    document.body.appendChild(para);

    const buttons = document.querySelectorAll('button');



    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click');

    }

    num++;

    if (num >= 10) {
        num = 10;
    }


}

function debito() {
    window.location.href = "debito.html";

}

function voltar() {
    window.location.href = "index.html";
}

function jenkins() {
    window.location.href = "https://www.gocache.com.br/dicas/o-que-e-jenkins-para-iniciantes/";
}

function sonar() {
    window.location.href = "https://blog.myscrumhalf.com/sonar-apoiando-a-qualidade-do-desenvolvimento-de-software/"

};