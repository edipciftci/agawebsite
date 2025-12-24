export default function Anasayfa() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-2xl border bg-white/70 p-6 backdrop-blur">
        <h1 className="text-3xl font-bold">Ankara Genç Akademi</h1>
        <p className="mt-2 max-w-2xl text-sm opacity-80">
          Anasayfa açılış metni. Burada kısa bir paragraf var, belki de bir slogan var.
          Çok uzun değil. Ama ikinci satıra inecek kadar uzun. Metnin bitiş cümlesi.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <button className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white">
            Kayıt / Deneme Antrenmanı
          </button>
          <button className="rounded-xl border px-4 py-2 text-sm font-semibold">
            Fikstürü Gör
          </button>
        </div>
      </section>

      {/* QUICK CARDS */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white/70 p-5 backdrop-blur">
          <h2 className="text-lg font-semibold">Haberler</h2>
          <p className="mt-2 text-sm opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="rounded-xl border bg-white/60 p-3">
              Lorem ipsum dolor sit amet.
            </div>
            <div className="rounded-xl border bg-white/60 p-3">
              Sed do eiusmod tempor incididunt.
            </div>
            <div className="rounded-xl border bg-white/60 p-3">
              Ut enim ad minim veniam.
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white/70 p-5 backdrop-blur">
          <h2 className="text-lg font-semibold">Fikstür</h2>
          <p className="mt-2 text-sm opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi.
          </p>

          <div className="mt-4 space-y-2 text-sm">
            {[
              "AGA vs X Takımı — 20:00 — Yaşamkent",
              "Y Takımı vs AGA — 18:30 — Deplasman",
              "AGA vs Z Takımı — 19:00 — Yaşamkent",
              "AGA vs Q Takımı — 21:00 — Yaşamkent",
            ].map((t) => (
              <div key={t} className="rounded-xl border bg-white/60 p-3">
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-white/70 p-5 backdrop-blur">
          <h2 className="text-lg font-semibold">Galeri</h2>
          <p className="mt-2 text-sm opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi.
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl border bg-white/60"
                title="Foto placeholder"
              />
            ))}
          </div>
        </div>
      </section>

      {/* LONG CONTENT (SCROLL TEST) */}
      <section className="rounded-2xl border bg-white/70 p-6 backdrop-blur">
        <h2 className="text-xl font-semibold">Kulüp Hakkında</h2>
        <div className="mt-3 space-y-4 text-sm leading-6 opacity-90">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, erat ut suscipit luctus, nisi urna posuere ligula, vitae
            maximus neque arcu vitae mi. Integer sit amet arcu non elit
            vestibulum consequat. Morbi a vulputate augue. Donec nec mi vitae
            turpis feugiat mattis. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae.
          </p>
          <p>
            Praesent a porta turpis. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Curabitur
            aliquam faucibus ex, sed rhoncus felis vulputate non. Nam eget
            ullamcorper neque. Duis egestas, sapien a porta aliquet, lacus arcu
            facilisis odio, vitae laoreet nibh purus vel felis.
          </p>
          <p>
            Integer ultricies, lectus quis ullamcorper convallis, magna arcu
            aliquam mauris, eget malesuada massa massa sit amet lorem. Maecenas
            vulputate arcu a justo fermentum, sit amet interdum lorem luctus.
            Aenean in dignissim lacus. In vel nulla vel lectus vestibulum
            dapibus.
          </p>
          <p>
            Donec tristique, metus ac tristique venenatis, odio felis volutpat
            nisl, quis volutpat nibh metus a libero. Proin vulputate vestibulum
            consectetur. Nam quis purus mauris. Suspendisse potenti. Etiam
            tincidunt elit in risus rhoncus, eu laoreet massa consequat.
          </p>
          <p>
            Aliquam erat volutpat. Donec in lectus in lorem iaculis porttitor.
            Mauris tristique, mi nec iaculis feugiat, massa dolor consectetur
            tellus, a egestas augue turpis sed risus. Duis sed semper justo.
            Donec ac tortor a nunc ultricies interdum.
          </p>
          <p>
            Sed viverra, risus non tincidunt faucibus, leo arcu aliquet arcu, eu
            pulvinar lorem risus et dolor. Phasellus sed nibh sit amet lorem
            commodo sagittis. Etiam at metus libero. Nulla facilisi. Donec
            euismod, arcu at gravida facilisis, velit turpis tempor purus, ut
            blandit purus mi sit amet lectus.
          </p>
          <p>
            Morbi aliquam, est sed ullamcorper bibendum, nibh turpis consequat
            libero, id interdum nisi dolor sed mauris. Nullam a mauris vel sem
            dignissim feugiat. Cras nec leo id lorem interdum tristique. Mauris
            eget mi et risus porta fringilla.
          </p>
          <p>
            Vivamus porttitor tortor sed massa tristique, id scelerisque lectus
            ultricies. Fusce elementum, libero id vehicula vestibulum, nunc
            turpis aliquam elit, sed condimentum lorem odio at neque. Sed
            iaculis, odio non facilisis tincidunt, augue purus convallis est,
            non commodo nisl nisi sed est.
          </p>
          <p>
            Ut congue, lorem vitae varius posuere, nisl sem tincidunt justo, sed
            posuere libero lectus id ex. Aenean sed ipsum nec neque fringilla
            commodo. Quisque ut dui in magna pulvinar vestibulum. Sed eget
            tortor quis justo volutpat tristique.
          </p>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="rounded-2xl border bg-white/70 p-6 backdrop-blur">
        <h2 className="text-xl font-semibold">Sponsorlar</h2>
        <p className="mt-2 text-sm opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {["Sponsor A", "Sponsor B", "Sponsor C", "Sponsor D"].map((s) => (
            <div
              key={s}
              className="rounded-2xl border bg-white/60 p-4 text-center text-sm font-semibold"
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="rounded-2xl border bg-white/70 p-6 backdrop-blur">
        <h2 className="text-xl font-semibold">Sık Sorulanlar</h2>
        <div className="mt-4 space-y-3 text-sm">
          {[
            ["Deneme antrenmanı var mı?", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
            ["Yaş grupları nasıl?", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
            ["Antrenman yeriniz nerede?", "Ut enim ad minim veniam, quis nostrud exercitation ullamco."],
          ].map(([q, a]) => (
            <div key={q} className="rounded-2xl border bg-white/60 p-4">
              <div className="font-semibold">{q}</div>
              <div className="mt-2 opacity-80">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA FILLER */}
      <section className="rounded-2xl border bg-white/70 p-6 backdrop-blur">
        <h2 className="text-xl font-semibold">Daha Fazla İçerik</h2>
        <p className="mt-3 text-sm leading-6 opacity-90">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Cras sit amet leo vel augue ullamcorper dictum.
          Vestibulum ac mauris vel nulla consequat iaculis. Integer et
          ullamcorper ipsum. Proin a semper mi. Integer vitae elit a metus
          bibendum viverra. Nulla facilisi.
        </p>
        <p className="mt-3 text-sm leading-6 opacity-90">
          Nunc luctus magna eget ex tristique, nec convallis lacus cursus. Sed
          semper, augue at viverra tincidunt, odio augue maximus libero, sed
          volutpat urna justo a risus. Maecenas volutpat sapien sed libero
          blandit, vel interdum arcu gravida.
        </p>
      </section>
    </div>
  );
}
