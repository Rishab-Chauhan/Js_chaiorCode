const marvel_hero=["Ironman","Hulk","Thor","Captain America"]
const dc_heros =["Batman","Superman","Aquaman","Wonder Woman"]
 const newAvengers= marvel_hero.concat(dc_heros)
 console.log(newAvengers)

 console.log(marvel_hero.push(dc_heros))

 const all_new_heros = [...marvel_hero, ...dc_heros]
 console.log(all_new_heros)