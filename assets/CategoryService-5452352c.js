const o=async()=>{const a="https://alura-geek-api-e8fc.onrender.com/categories";try{const r=await fetch(a),e=await r.json();if(!r.ok)throw new Error("Fallo al realizar la petición a categorias");return e}catch(r){console.log(r)}};export{o as C};