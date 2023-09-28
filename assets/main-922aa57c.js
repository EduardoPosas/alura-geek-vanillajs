import"./style-ad932b61.js";import{C as E}from"./CategoryService-5452352c.js";import{p as w,a as N}from"./ProductService-4ab90952.js";import"./ContactController-aba72802.js";const L=()=>{const e=document.createElement("a");return e.className="py-3 px-4 border border-indigo-600 text-indigo-600 font-bold rounded-sm hover:bg-indigo-800 hover:text-neutral-100",e.href="/views/login.html",e.textContent="Login",e},k=()=>{const e=document.createElement("a");return e.className="py-3 px-4 border border-red-600 text-red-600 font-bold rounded-sm hover:bg-red-800 hover:text-neutral-100",e.href="",e.textContent="Logout",e},S=()=>{const e=document.createElement("a");return e.className="py-3 px-4 border border-indigo-600 text-indigo-600 font-bold rounded-sm hover:bg-indigo-800 hover:text-neutral-100",e.href="/views/products.html",e.textContent="Admin",e},j=document.querySelector("[data-search-container]"),q=(e,a)=>{const i=e.target.value.toLowerCase(),t=document.querySelector(".filtered-products-container");if(t&&t.remove(),!i.length)return;const c=a.filter(r=>r.name.toLowerCase().includes(i)),n=document.createElement("ul");n.className="filtered-products-container absolute bg-white z-10 w-[40rem] mt-2 left-1/2 -translate-x-1/2 rounded-sm p-4 divide-y divide-indigo-200",c.forEach(r=>{const{id:d,name:s}=r,o=document.createElement("li");o.className="mt-2 py-2 px-4 hover:bg-indigo-100 cursor-pointer";const l=document.createElement("a");l.className="block w-full",l.textContent=s,l.href=`/views/product-description.html?id=${d}`,o.appendChild(l),n.appendChild(o)}),j.appendChild(n)},B=document.querySelector("[data-search]"),$=async()=>{(await E()).forEach(async a=>{const{id:i,category:t}=a,c=document.querySelector("[data-categories]"),n=document.createElement("section");n.className="mb-8 last-of-type:mb-0";const r=document.createElement("div");r.className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6";const d=document.createElement("div");d.className="flex items-center justify-between mb-8 border-b-[1px] border-b-neutral-200";const s=document.createElement("h2");s.className="text-3xl font-bold text-neutral-700",s.textContent=t;const o=document.createElement("a");o.className="text-lg text-indigo-600 flex items-center after:content-[url('/images/right-arrow.svg')] after:ml-2 after:transition-transform after:ease-in-out after:duration-300 hover:after:translate-x-1",o.textContent="Ver Todo",o.href=`/alura-geek-vanillajs/views/products-category.html?category=${t}`,d.appendChild(s),d.appendChild(o),n.appendChild(d),(await N(t)).forEach(f=>{const{category:A,description:C,id:x,imageUrl:b,name:v,price:y}=f,m=document.createElement("div"),u=document.createElement("img");u.className="h-[15rem] w-full object-cover object-top",u.src=b,u.alt=C;const g=document.createElement("h3");g.className="text-base mt-4",g.textContent=v;const h=document.createElement("p");h.className="font-bold text-neutral-700 text-xl mt-4",h.textContent=`$ ${y}`;const p=document.createElement("a");p.className="text-indigo-600 inline-block mt-4 transition-all duration-300 ease-in-out hover:text-indigo-800 hover:font-bold",p.textContent="Ver Producto",p.href=`/alura-geek-vanillajs/views/product-description.html?id=${x}`,m.appendChild(u),m.appendChild(g),m.appendChild(h),m.appendChild(p),r.appendChild(m),n.appendChild(r)}),c.appendChild(n)})};document.addEventListener("DOMContentLoaded",async()=>{const e=JSON.parse(sessionStorage.getItem("user")),a=document.querySelector("[data-header]");if(!e){const t=L();a.appendChild(t)}if(e){const t=document.createElement("div");t.className="flex gap-2";const c=k(),n=S();c.onclick=()=>{sessionStorage.removeItem("user"),window.location.reload()},t.appendChild(n),t.appendChild(c),a.appendChild(t)}const i=await w();B.addEventListener("keyup",t=>q(t,i))});$();
