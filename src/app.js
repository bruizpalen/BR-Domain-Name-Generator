function getFiveRandomeIndexesOfAnArray(array) {
  const indexes = [];

  while (indexes.length < 5) {
    let randomIndex = Math.floor(Math.random() * array.length);
    if (!indexes.includes(randomIndex)) {
      indexes.push(randomIndex);
    }
  }

  return indexes;
}

function createString() {
  let domains = [];
  let pron = ["the", "our"];
  let adjec = ["great", "big"];
  let name = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];
  for (let i = 0; i < pron.length; i++) {
    for (let j = 0; j < adjec.length; j++) {
      for (let k = 0; k < name.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          domains.push(`${pron[i]}${adjec[j]}${name[k]}${extension[l]}`);
        }
      }
    }
  }

  const domainsElement = document.getElementById("domains");
  domainsElement.innerHTML = ""; // Clear the previous content
  const randomNumbers = getFiveRandomeIndexesOfAnArray(domains);
  for (const number of randomNumbers) {
    const paragraph = document.createElement("p");
    paragraph.textContent = domains[number];
    domainsElement.appendChild(paragraph);
  }
  // domains.forEach((domain) => {
  //   const paragraph = document.createElement("p");
  //   paragraph.textContent = domain;
  //   excuseElement.appendChild(paragraph);
  // });
  // const excuseElement = document.getElementById("excuse");
  const generateButton = document.getElementById("generateButton");
  const reloadButton = document.getElementById("reloadButton");
  // excuseElement.innerText = result;
  reloadButton.classList.remove("hidden");
}
