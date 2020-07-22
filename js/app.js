(function () {
  // customers
  let customers = [];
  let index = 0;

  // object constructor function
  function Customer(name, img, text) {
    this.name = name;
    this.img = img;
    this.text = text;
  }

  // create customer function
  function createCustomer(name, img, text) {
    // full img
    let fullImg = `img/customer-${img}.jpeg`;

    // create a new customer instance
    const customer = new Customer(name, fullImg, text);

    // add to all customers
    customers.push(customer);
  }
  createCustomer(
    "john",
    1,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, repellat veniam facilis sed cumque corporis quae architecto maxime totam facere.`
  );

  createCustomer(
    "bob",
    2,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos harum ab incidunt voluptatum eius expedita nam.`
  );

  createCustomer(
    "peter",
    3,
    `amet enim animi deserunt placeat perferendis unde maxime inventore reprehenderit molestiae saepe cum blanditiis ipsum? Quidem, reiciendis.`
  );

  createCustomer(
    "tom",
    4,
    `Itaque deleniti ullam nostrum, autem tempore commodi porro accusamus fugiat reprehenderit saepe est earum quaerat fuga officiis!.`
  );

  document.querySelectorAll(".btn").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.parentElement.classList.contains("prevBtn")) {
        if (index === 0) {
          index = customers.length;
        }

        index--;
        document.getElementById("customer-img").src = customers[index].img;
        document.getElementById("customer-name").textContent =
          customers[index].name;
        document.getElementById("customer-text").textContent =
          customers[index].text;
      }

      if (e.target.parentElement.classList.contains("nextBtn")) {
        if (index === customers.length - 1) {
          index = -1;
        }

        index++;
        document.getElementById("customer-img").src = customers[index].img;
        document.getElementById("customer-name").textContent =
          customers[index].name;
        document.getElementById("customer-text").textContent =
          customers[index].text;
      }
    });
  });
})();
