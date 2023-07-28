axios.get("http://20.244.56.144/numbers/primes")
.then((res)=>{
    function removeDuplicates(res) {
        return arr.filter((item,
            index) => res.indexOf(item) === index);
    }
    res.sort();
    console.log(removeDuplicates(res));
}
)   
.catch((err)=>{
console.log(err);
});

 
   