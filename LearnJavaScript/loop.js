for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    let Answer = i ** 2
    console.log(Answer);
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    let Answer = i ** 2
    console.log(Answer);
}

for (let i = 1; i <= 10; i++) {
    if (i % 5 === 0) {
        break;
    }
    let Answer = i ** 2
    console.log(Answer);
}