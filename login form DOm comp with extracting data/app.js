let input = document.querySelector("form");
input.addEventListener('submit', function (event) {
    event.preventDefault();
    // method way 2
    let user = this.elements[0];
    let pass = this.elements[1];
    console.log(user.value);
    console.log(pass.value);

    // method way 1
    // let email = document.querySelector("#Email");
    // let pass = document.querySelector("#password");
    // console.dir(email);
    // console.log(input.value);
    // console.dir(pass);
    // console.log(pass.value);
})