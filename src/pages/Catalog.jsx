// src/pages/Catalog.jsx
import React from "react";

const whatsappLink = "https://wa.me/5491112345678"; // cambia el número cuando quieras

export default function Catalog() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden font-catalog bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-10">
        <div className="flex flex-col max-w-[1200px] flex-1">

          {/* Título principal */}
          <main className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-between items-center gap-4 px-4 sm:px-6 lg:px-10">
              <p className="text-text-light dark:text-text-dark text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Nuestro Catálogo de Productos
              </p>
            </div>

            {/* Filtros (aún sin lógica, solo UI) */}
            <div className="flex gap-3 p-3 flex-wrap px-4 sm:px-6 lg:px-10">
              <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-primary/20 dark:bg-primary/30 pl-4 pr-4">
                <p className="text-primary dark:text-primary text-sm font-bold leading-normal">
                  Todos
                </p>
              </div>
              <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 pl-4 pr-4 transition-colors">
                <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                  Maderas Duras
                </p>
              </div>
              <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 pl-4 pr-4 transition-colors">
                <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                  Maderas Blandas
                </p>
              </div>
              <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 pl-4 pr-4 transition-colors">
                <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                  Vigas
                </p>
              </div>
              <div className="flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark hover:bg-primary/10 dark:hover:bg-primary/20 pl-4 pr-4 transition-colors">
                <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                  Tablas
                </p>
              </div>
            </div>

            {/* Grid de productos */}
            <div
              id="catalog"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-10"
            >
              {/* Product Card 1 */}
              <ProductCard
                title="Viga de Pino Eliotis"
                description="Madera resistente ideal para estructuras de techos."
                category="Vigas"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCZIIBucARCUjg2x3u9k6IR-KFsf6isevb8Ry-zJ3Wy21j-oqzYxMJQZPgqqzpNmva6x__gtkvK6qB33fCaUuBo7dqfSJV4qpJbPWXYH5NxDRGQsK5Nd5PPWX4T-I81Uj8Vvl2RexkNvYtmVYnOGD-r-MDqXStmJtYRKDF5pAOmjfK94bcOwWWnv-G3V7nXMyHq-gkMygTQwFQiK0UFBce_4T7IdgH1x8l8qCjKtyB4kNLFnGAUdBYKHcMtqOiDBJWDK3CkHuQbgM8"
              />

              {/* Product Card 2 */}
              <ProductCard
                title="Tabla de Eucalipto"
                description="Acabado liso perfecto para carpintería fina y muebles."
                category="Tablas"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAP9sJCVDdtpcQa7nNtc2NUlzdhDQlAEDTc7bu9CvcqE4zhoRE-ZuzkguxgwnpOylCDgdyMaLQSVQPxc6rDmVaQPk94H6mDQXARIznZfP-94ZikFxnZfKBCg-EkP1olqkFA5by-0zaiUT79QGu3R4RSOM9NKw4H-4RMlG1PVspVZSe78aor_05ZpQGilNtnifCQvjTf-VWro6RmzymBroiHoBm8uunT427FNqL_dccaWjzlEX5jYaNoSNyRWL0PveO4u5cMuK65LkE"
              />

              {/* Product Card 3 */}
              <ProductCard
                title="Machimbre de Pino"
                description="Revestimiento clásico para paredes y cielorrasos."
                category="Maderas Blandas"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBY30l0roTLXii671aosKe5mp5xBSQ1C8ve6LAMubNxUkQ_LQlMIW5gVX7HYY8Ada-cakyonkax1ajwMSNlGRDxSCt7kBFeOeT9iffWuLLW9vbyrArVH2YlLcf4_pEHzkKel444fkWFbAKhNOElTVchnmeh-6wEMhTvc6_P2XKqSkHON0TQHY3InrmvXD7_XhkdJjA5ClU28hdxtoBN6DUqyzogIY9Pdw4xI6OFX6kJ8VIzFjYfg9Nmb8VEIyYeL9cZSkII8uPIImQ"
              />

              {/* Product Card 4 */}
              <ProductCard
                title="Tirante de Saligna"
                description="Soporte estructural para diversas construcciones."
                category="Vigas"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCGcw99mTtbU7AtfeLa2DMVknHz8vG0zmIbHoxpr0_x0r4whZWQ6n3nVqhuYbbQeSsQwVvQbJdDEiD5delEyim6TqeEsS8PhBaKUVm432rN10dOFnKV0zHHnADUiISU8U3r0VpkLSo8ld2x39a8l12uh2PSiqMuoudu0zJKrZNuSfGlK8UmCZPtqB1bYx_9zxv34CZh7g9OwpilCNM2nt060PXb3_CMhT9DgrPFBXQlcqwkaKDUpthTi5_qAdRip6QCs_v3EXyEZ6Y"
              />

              {/* Product Card 5 */}
              <ProductCard
                title="Deck de Madera Dura"
                description="Madera de alta densidad, ideal para exteriores y piscinas."
                category="Maderas Duras"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDFMhOBazFWt3Wmfb5nIBB-xaLATyUJWTmbRgDaf2Kyeqn3WwIzLGVepEwjQLkUxEVwS23VU3e3d3uv7_f6qsfXFGJZmw61Oyt2KX8ZZoJjzw37wytRO2JFl2c_emQ_JELl62qb1pNyLUsMZ2LfotAjfFCKl6vWaCaM7JZVeW8agrJj6xn79xKBXOANEiz3GpEWQc5239h7HQ9QdbmRnCq5zospo9bJK4mG-SslT4FSHHqcLcvgbWcYI7-v2S-mBab_tR2vJH_CUgE"
              />

              {/* Product Card 6 */}
              <ProductCard
                title="Poste de Eucalipto"
                description="Postes robustos para cercos y alambrados."
                category="Maderas Duras"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCO5ldxgHy1vhoYo5gkc-YEd2Ap6v4M5-9amiasxJZSe0igFyk4xDrMOy86m3M-zg4OI4cDYntJgEGxMV_Yr5w0qcDdAnut2dLe4TFqZhVqkyuwaqV6lDwLUtfD03bZzZ7ccxx2DUESk24B5frBtX5tKL0LiomluFajTbFE_jox8ur4Ru7gVI-kWccHb1MCvOK_BzBTxHhQAinjmDNFcHamu5b_LJ4Zt4CYVmT-100OPa4E29hgqpzygvv9tc0Qze7fzD_vIi6umsI"
              />

              {/* Product Card 7 */}
              <ProductCard
                title="Listón de Pino"
                description="Pieza versátil para trabajos de carpintería y bricolaje."
                category="Maderas Blandas"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuCwaihcrir5vlffCEqmZlmwo1-1ZXnv-PSkW6etbMukjVUCE4EQaEMxWawmabizlQHO8Is_z-BTl19zYZ-ZrTBYUJItJhGj-uEjLRCP9L3P9okoMUPCXCTvxk0euVZxEbYtf3mWnZ3qeQlYCXJHEaI0nPKoY9cC4OaPGaMalqVTpSpDh_zTQHaPmKnFW_5lwr2WkE13dvffp6aQRuQtSCS7cQIVERjAldO0ATMOOgszr_LWoeKqbA7_wxr30WKm1br-6ul45HhFVLE"
              />

              {/* Product Card 8 */}
              <ProductCard
                title="Leña de Eucalipto"
                description="Combustión lenta y alto poder calorífico."
                category="Otros"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBfmEF2JfwxUiVVQKsf3j9wXiOTsGGw-NeSooTdrrzimfiMRAUToBX_WPIHd-F2OEdf3AWehbn1pqPd-aNVPhxYrVvl3fZo9EC0JZhh5UTNbLQ1EWWkV5PYiDenzDlIp1x32A8kqVvjLQ2B80YIBfDViGgr81iEjuAY-4S4YcA7VHsS6NcsTSnYkE6kemPZAB-KmY8tfXbuDDxMauNnrpMUUeXrzj0O3apL75dblBk8YsrfxLZFYFkfYxZ1XYyIlkzE9zlxkyI3uPs"
              />
            </div>

            {/* Footer interno del catálogo (encima del Footer global) */}
            <section className="flex flex-col gap-8 px-5 py-10 text-center border-t border-solid border-border-light dark:border-border-dark mt-10">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                <span className="text-subtle-text-light dark:text-subtle-text-dark text-base">
                  Dirección: Calle Falsa 123, Ciudad
                </span>
                <span className="text-subtle-text-light dark:text-subtle-text-dark text-base">
                  Teléfono: +54 9 11 1234-5678
                </span>
                <span className="text-subtle-text-light dark:text-subtle-text-dark text-base">
                  Email: contacto@montemoriah.com
                </span>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {/* Iconos solo decorativos */}
                <a
                  href="#"
                  className="text-subtle-text-light dark:text-subtle-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-subtle-text-light dark:text-subtle-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-subtle-text-light dark:text-subtle-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"></path>
                  </svg>
                </a>
              </div>

              <p className="text-subtle-text-light dark:text-subtle-text-dark text-sm">
                © 2024 Aserradero Monte Moriah. Todos los derechos reservados.
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ title, description, category, image }) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-4 transition-shadow hover:shadow-lg dark:hover:shadow-primary/10">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div className="flex flex-col gap-2">
        <p className="text-text-light dark:text-text-dark text-lg font-bold leading-normal">
          {title}
        </p>
        <p className="text-subtle-text-light dark:text-subtle-text-dark text-sm">
          {description}
        </p>
        <p className="text-subtle-text-light dark:text-subtle-text-dark text-xs font-medium uppercase tracking-wider">
          Categoría: {category}
        </p>
      </div>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full h-11 rounded-lg bg-primary text-white font-bold text-sm transition-transform hover:scale-105 active:scale-95"
      >
        <span className="material-symbols-outlined">chat</span>
        Consultar por WhatsApp
      </a>
    </div>
  );
}
