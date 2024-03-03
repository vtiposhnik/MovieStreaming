function triangle() {
    let count = 0;
    for (let i = 0; i < 6; i++) {
        count++;
        for (let k = 0; k < count; k++) {
            console.log('*')
        }
    }
}
triangle();