import"./style-ad932b61.js";import{b as w,a as v}from"./ProductService-4ab90952.js";const b=async()=>{const t=new URL(window.location.href).searchParams.get("id");console.log(t),t||(window.location.href="/alura-geek-vanillajs/");const o=await w(t);o||(window.location.href="/alura-geek-vanillajs/"),console.log(o);const{name:r,price:i,description:a,imageUrl:c,category:l,id:s}=o,n=document.querySelector("[data-product-description]"),d=`
                <img class="w-full md:w-1/2 object-cover object-top h-[20rem] md:h-[30rem] lg:h-[40rem]" src=${c} alt=${a}>
                <div class="py-2 flex flex-col gap-4 md:justify-center grow">
                    <h2 class="text-2xl md:text-4xl lg:text-6xl leading-3">${r}</h2>
                    <p class="text-xl md:text-2xl lg:text-3xl font-bold">$${i}</p>
                    <p class="text-base">${a}</p>
                </div>
            `;n.innerHTML=d;const m=(await v(l)).filter(e=>e.id!==s),u=document.querySelector("[data-similar-products]");m.forEach(e=>{const{imageUrl:p,name:g,price:x,id:f}=e,h=`
            <div>
            <img class="h-[15rem] w-full object-cover object-top" src=${p} alt="product image">
            <h3 class="text-base mt-4">${g}</h3>
            <p class="font-bold text-neutral-700 text-xl mt-4">$${x}</p>
            <a href="/alura-geek-vanillajs/views/product-description.html?id=${f}" class="text-indigo-600 inline-block mt-4 transition-all duration-300 ease-in-out hover:text-indigo-800 hover:font-bold">Ver Producto</a>
            </div>
        `;u.innerHTML+=h})};b();
