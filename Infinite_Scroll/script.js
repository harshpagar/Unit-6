const container = document.getElementById("scroll");

let counter = 1;
let start = 1;
let end = 25;

const loadData = (start, end) => {
  console.log(start, end);

  for (let i = start; i <= end; i++) {
    let div = document.createElement("div");

    let title = document.createElement("h3");
    title.innerHTML = `Masai Student ${i}`;

    div.append(title);

    container.append(div);
  }
};

loadData(start, end);

const loadMore = () => {
  setTimeout(() => {
    counter++;
    end = counter * 25;
    start = end - 24;

    loadData(start, end);
  }, 250);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("Bottom Hit");

    loadMore();
  }
});