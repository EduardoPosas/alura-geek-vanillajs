const c=async()=>{const r="https://alura-geek-api-e8fc.onrender.com/products";try{return await(await fetch(r)).json()}catch(o){console.log(o)}},s=async r=>{const o=`https://alura-geek-api-e8fc.onrender.com/products?category=${r}&_limit=6`;try{const t=await fetch(o);if(!t.ok)throw new Error("Petición falló");return await t.json()}catch(t){console.log(t)}},n=async r=>{const o=`https://alura-geek-api-e8fc.onrender.com/products?category=${r}`;try{const t=await fetch(o);if(!t.ok)throw new Error("Petición falló");return await t.json()}catch(t){console.log(t)}},a=async r=>{const o=`https://alura-geek-api-e8fc.onrender.com/products/${r}`;try{const t=await fetch(o);if(!t.ok)throw new Error("Fallo la petición");return await t.json()}catch(t){console.log(t.message)}},u=async r=>{const o="https://alura-geek-api-e8fc.onrender.com/products";try{const t=await fetch(o,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});if(t.ok)return t.body}catch(t){console.log(t)}},d=async(r,o)=>{const t=`https://alura-geek-api-e8fc.onrender.com/products/${o}`;try{const e=await fetch(t,{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});if(e.ok)return e.body}catch(e){console.log(e)}},i=async r=>{const o=`https://alura-geek-api-e8fc.onrender.com/products/${r}`;try{const t=await fetch(o,{method:"DELETE"});if(console.log(t),t.ok)return t.body}catch(t){console.log(t)}};export{s as a,a as b,u as c,n as d,i as e,c as p,d as u};
