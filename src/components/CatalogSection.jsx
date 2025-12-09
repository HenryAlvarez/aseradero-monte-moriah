// src/components/CatalogSection.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CatalogSection() {
  return (
    <section
      className="py-16 sm:py-24 bg-white dark:bg-background-dark/50"
      id="catalog"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-[#2F4F4F] dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-8 text-center">
          Catálogo de Productos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Item 1 */}
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
              data-alt="Stack of large wooden beams for construction"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2wgWHsSmnG_NEWJQWyYELzOHUv-JfP9D_cpstZhP7zi8zSmppJYIjPur7yEgntP7C-ia88B3eE6ha3fEGqpk9HprD8_xrtzJiguPnPw7UeS6vwT-DfmIPJ94dlBwKNEH362yPYdV2vkXEAZ1VxQBsv3tcZBq1eTo_njRsUm5hWMx4RiEBJegF-t_UE0NjO5tLXGclzMKyl37ZOmsWT_RwaZXCoJWodGegqV1Cy594yXrRBtKnAMpoVxeuByU1zqqGAsMB8BU0XZU")',
              }}
            />
            <div>
              <p className="text-base font-medium">Vigas de madera</p>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Alta resistencia para estructuras.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
              data-alt="Neatly arranged planks of pine wood"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrKzxfQKK5IW6mVkIdvFe1l7ejbtiWCzzMER5CU24itgHBuAMBHXaUtqs-APqAoDU6VjtXJbA13-PuQVZ_bTqajKy8vqZOO63Qs1ASXffZGX_7CIqEulVjTh2eIzOz-cbP0V-eI-80MOLMh64k_6J62JBbIVqrULixvssaVSMpdKs-25mAVhr7844zwMGx0rDrd0pyUuU5B3AZsM--u9xnLQFqCMl6uZsNp3pN0u6YhZ1RTmzaqwBahpsLP0BEiUjY-O-dfEChv5c")',
              }}
            />
            <div>
              <p className="text-base font-medium">Tablas de pino</p>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Ideal para construcción y carpintería.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
              data-alt="Treated wooden posts for outdoor use"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCol0f_D9mrYVoo7wjJpcoNCE_ZWFiGOrIICGZet_QPftIA-s0tL15Eq0tdZK519JpaRqsWO3ZcGM6Ugt55ja7UEmTFl3HvPTuZRtZrwEIzQJPAcelWAMyipTUAnjbWuopFgLoQoWAG08BGSiSrsy_mlPeedIZoIAxQ9gWjSJC3x5jcq9CExXvOQuwQFzh-s7ISRtfKVdYpLfRQWLaeXlVJOG3pG2o3Xy1mWlqi33ihc9B5GlsORxIWPbgy6YaxsywY8k2bS17UhyM")',
              }}
            />
            <div>
              <p className="text-base font-medium">Postes tratados</p>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Durabilidad para exteriores.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col gap-3 group">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300"
              data-alt="Interlocking machimbre wood panels"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD3z-eSd1HMs8RlfH00kA7P6YbScrHYKKtutYrnzVUdfKfvz_uXogAJqaJO59zE8_FA5tCClrHmaR6mvXUStGfi1c8nn-soN55EOd6BQhsKZ08siHYSyichrXbBVdQD2A-Qy_vimjfmTCVQOZm1TFw7Vb_DuS8Ah3153gt7AoW5Mtv0NSGXKATXOwqm1wRJbd6VWD0VxBenMVmqgXg1rYN0wBFJWaPEvOFyamKyy6WJzumkbCZuqn-dnbF_k5MKRIjgu_GcQ5l2PUU")',
              }}
            />
            <div>
              <p className="text-base font-medium">Machimbre</p>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Perfecto para revestimientos y techos.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/catalogo"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent border border-primary text-primary text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-primary/10 transition-colors"
          >
            <span className="truncate">Ver Catálogo Completo</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
