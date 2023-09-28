import"./style-429ee022.js";import{b as w,a as b}from"./ProductService-4ab90952.js";const y=async()=>{const t=new URL(window.location.href).searchParams.get("id");console.log(t),t||(window.location.href="/");const o=await w(t);o||(window.location.href="/"),console.log(o);const{name:c,price:i,description:r,imageUrl:s,category:a,id:l}=o,n=document.querySelector("[data-product-description]"),d=`
                <img class="w-full md:w-1/2 object-cover object-top h-[20rem] md:h-[30rem] lg:h-[40rem]" src=${s} alt=${r}>
                <div class="py-2 flex flex-col gap-4 md:justify-center grow">
                    <h2 class="text-2xl md:text-4xl lg:text-6xl leading-3">${c}</h2>
                    <p class="text-xl md:text-2xl lg:text-3xl font-bold">$${i}</p>
                    <p class="text-base">${r}</p>
                </div>
            `;n.innerHTML=d;const m=(await b(a)).filter(e=>e.id!==l),p=document.querySelector("[data-similar-products]");m.forEach(e=>{const{imageUrl:u,name:x,price:g,id:f}=e,h=`
            <div>
            <img class="h-[15rem] w-full object-cover object-top" src=${u} alt="product image">
            <h3 class="text-base mt-4">${x}</h3>
            <p class="font-bold text-neutral-700 text-xl mt-4">$${g}</p>
            <a href="/views/product-description.html?id=${f}" class="text-indigo-600 inline-block mt-4 transition-all duration-300 ease-in-out hover:text-indigo-800 hover:font-bold">Ver Producto</a>
            </div>
        `;p.innerHTML+=h})};y();
