import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, GraduationCap } from "lucide-react";
import { DISCORD_INVITE, LESSONS, POSTS, SOCIALS } from "@/data/academia";
import { ModTools } from "@/components/mod-tools";

export const Route = createFileRoute("/")({ component: Home });

const TAGS = ["Todas", ...Array.from(new Set(POSTS.map((post) => post.tag)))];

function Home() {
  const [tag, setTag] = useState("Todas");
  const [read, setRead] = useState<string[]>([]);
  const posts = useMemo(
    () => (tag === "Todas" ? POSTS : POSTS.filter((post) => post.tag === tag)),
    [tag],
  );

  function toggleLesson(id: string) {
    setRead((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-20 border-b border-border bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="flex min-h-11 items-center gap-2">
            <span className="grid size-9 place-items-center rounded-md bg-primary text-primary-fg">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg text-fg">Academia de Mods</span>
              <span className="block text-xs text-muted">a partir de @Jotraxs</span>
            </span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            <NavLink href="#publicaciones">Publicaciones</NavLink>
            <NavLink href="#escuela">Escuela</NavLink>
            <NavLink href="#herramientas">Herramientas</NavLink>
            <NavLink href="#comunidad">Comunidad</NavLink>
          </nav>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center rounded-md bg-primary px-3 text-sm font-semibold text-primary-fg"
          >
            Server
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:py-20">
          <div>
            <p className="text-xs font-medium tracking-widest text-primary uppercase">
              Twitch · Discord · escuela pública
            </p>
            <h1 className="mt-4 max-w-xl font-display text-5xl leading-[1.05] text-fg sm:text-6xl">
              No los eches. Mandálos a la escuela.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Jotraxs abrió una academia para moderadores nuevos de Twitch y Discord: recursos,
              orientación y un lugar para practicar el oficio. Esta página ordena esas
              publicaciones y las vuelve herramientas que se pueden usar en el turno.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#herramientas"
                className="inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg"
              >
                Abrir las herramientas
              </a>
              <a
                href="#publicaciones"
                className="inline-flex min-h-11 items-center rounded-md border border-border px-4 text-sm font-medium text-fg"
              >
                Leer las publicaciones
              </a>
            </div>
            <p className="mt-8 font-display text-xl text-fg">Arriba la pala.</p>
          </div>

          <figure className="flex flex-col justify-between rounded-lg border border-border bg-surface p-5 sm:p-7">
            <div>
              <p className="text-xs tracking-wide text-muted uppercase">25 de febrero de 2026</p>
              <blockquote className="mt-4 font-display text-2xl leading-snug text-fg">
                “oficialmente se habré la escuela de mods, un lugar donde tendrá recursos y
                orientación para nuevos Moderadores de Twitch y discord, la misma estará
                dispuesta para público.”
              </blockquote>
            </div>
            <figcaption className="mt-8 flex items-center justify-between gap-3 text-sm">
              <span className="text-muted">@Jotraxs</span>
              <a
                href="https://x.com/Jotraxs/status/2026694926021390692"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1 text-primary"
              >
                Ver post
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </figcaption>
          </figure>
        </section>

        <section className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-3">
            <Principle
              n="01"
              title="Equipo, no recambio"
              text="Si los mods flojean, el post a streamers pide formarlos. Echarlos no arma comunidad."
            />
            <Principle
              n="02"
              title="Herramienta con motivo"
              text="Para qué sirve, qué cuesta y cómo informa. Si no resuelve un problema del chat, sobra."
            />
            <Principle
              n="03"
              title="Guardar todo"
              text="Tras dos años, su conclusión fue concreta: lo bueno también se transforma mal. Exportá."
            />
          </div>
        </section>

        <section id="publicaciones" className="mx-auto max-w-6xl px-4 py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest text-primary uppercase">Fuente</p>
            <h2 className="mt-2 text-4xl text-fg">Lo que publicó</h2>
            <p className="mt-3 text-muted">
              Cada tarjeta sale de un post público. Donde el tono original no aporta a moderar,
              hay una nota. El enlace siempre vuelve a X.
            </p>
          </div>
          <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
            {TAGS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTag(item)}
                className={
                  "min-h-11 shrink-0 rounded-md border px-3 text-sm " +
                  (tag === item
                    ? "border-primary bg-primary text-primary-fg"
                    : "border-border text-fg")
                }
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col rounded-lg border border-border bg-surface p-5">
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="tracking-wide text-primary uppercase">{post.tag}</span>
                  <time className="text-muted">{post.date}</time>
                </div>
                <p className="mt-3 flex-1 text-base leading-relaxed text-fg">“{post.text}”</p>
                {post.note && <p className="mt-3 text-sm leading-relaxed text-muted">{post.note}</p>}
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm text-primary"
                >
                  Abrir en X
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="escuela" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="text-xs font-medium tracking-widest text-primary uppercase">Programa</p>
                <h2 className="mt-2 text-4xl text-fg">Ocho módulos, una pala</h2>
                <p className="mt-3 text-muted">
                  No es un curso inventado al lado del post. Cada módulo desarrolla una línea que
                  Jotraxs ya publicó: herramientas, costos, si el mod es trabajo, el informe y la
                  comunidad.
                </p>
              </div>
              <p className="text-sm text-muted tabular-nums">
                {read.length}/{LESSONS.length} leídos acá
              </p>
            </div>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {LESSONS.map((lesson) => {
                const open = read.includes(lesson.id);
                return (
                  <li key={lesson.id}>
                    <button
                      type="button"
                      onClick={() => toggleLesson(lesson.id)}
                      className="flex w-full items-start gap-4 py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="pt-1 font-display text-2xl text-primary tabular-nums">
                        {lesson.modulo}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-2xl text-fg">{lesson.title}</span>
                        <span className="mt-1 block text-xs tracking-wide text-muted uppercase">
                          {lesson.from}
                        </span>
                        {open && (
                          <span className="mt-3 block max-w-2xl text-sm leading-relaxed text-muted">
                            {lesson.body}
                          </span>
                        )}
                      </span>
                      <span className="pt-2 text-xs text-muted">{open ? "Leído" : "Abrir"}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section id="herramientas" className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-medium tracking-widest text-primary uppercase">Mesa de mods</p>
            <h2 className="mt-2 text-4xl text-fg">Herramientas del turno</h2>
            <p className="mt-3 text-muted">
              Comandos, escalera de sanciones, bitácora, anti-raid, reglas, respaldo y las horas
              del mes. Pensadas desde lo que la escuela dijo que iba a integrar.
            </p>
          </div>
          <ModTools />
        </section>

        <section id="comunidad" className="border-t border-border">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium tracking-widest text-primary uppercase">Comunidad</p>
              <h2 className="mt-2 text-4xl text-fg">El server sigue siendo el aula</h2>
              <p className="mt-3 max-w-md text-muted">
                En el hilo de apertura dejó el enlace. También escribió, suelto, que tiene un
                server de mods y una agencia si a alguien le interesa. Esta página no reemplaza
                esa conversación.
              </p>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg"
              >
                Entrar al Discord
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>
            <div>
              <p className="text-sm text-muted">Para escribirle, con contexto:</p>
              <CopyNote />
              <ul className="mt-6 flex flex-wrap gap-2">
                {SOCIALS.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center rounded-md border border-border px-3 text-sm text-fg"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border pb-20 md:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>Academia de Mods · hecha con las publicaciones de @Jotraxs.</p>
          <p>No es un sitio oficial de Twitch, Discord ni de Jotraxs.</p>
        </div>
      </footer>

      <nav className="sticky bottom-0 z-20 flex border-t border-border bg-bg md:hidden">
        <MobileLink href="#publicaciones">Citas</MobileLink>
        <MobileLink href="#escuela">Escuela</MobileLink>
        <MobileLink href="#herramientas">Taller</MobileLink>
        <MobileLink href="#comunidad">Server</MobileLink>
      </nav>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="inline-flex min-h-11 items-center px-3 text-sm text-muted hover:text-fg">
      {children}
    </a>
  );
}

function MobileLink({ href, children }: { href: string; children: string }) {
  return (
    <a href={href} className="inline-flex min-h-12 flex-1 items-center justify-center text-sm text-fg">
      {children}
    </a>
  );
}

function Principle({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <article className="bg-surface px-5 py-6">
      <p className="font-display text-sm text-primary">{n}</p>
      <h2 className="mt-2 text-2xl text-fg">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </article>
  );
}

function CopyNote() {
  const [copied, setCopied] = useState(false);
  const text =
    "Hola Jotraxs, vi la escuela de mods. Moddeo en Twitch/Discord y me interesa sumarme al server. ¿Sigue abierta la academia?";

  return (
    <div className="mt-3 rounded-lg border border-border bg-surface p-4">
      <p className="text-sm leading-relaxed text-fg">{text}</p>
      <button
        type="button"
        className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-primary"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1600);
          } catch {
            setCopied(false);
          }
        }}
      >
        {copied ? "Copiado" : "Copiar mensaje"}
      </button>
    </div>
  );
}
