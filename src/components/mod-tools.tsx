import { useEffect, useMemo, useState } from "react";
import { Check, Copy, Trash2 } from "lucide-react";
import {
  BACKUP_STEPS,
  COMMANDS,
  LADDER,
  RAID_STEPS,
  RULE_OPTIONS,
} from "@/data/academia";

type ToolId = "comandos" | "escalera" | "bitacora" | "raid" | "reglas" | "caja" | "oficio";

const TOOLS: { id: ToolId; label: string; hint: string }[] = [
  { id: "comandos", label: "Comandos", hint: "Armar la línea y copiarla" },
  { id: "escalera", label: "Escalera", hint: "Aviso, timeout o ban" },
  { id: "bitacora", label: "Bitácora", hint: "El informe del turno" },
  { id: "raid", label: "Anti-raid", hint: "No borrar de a uno" },
  { id: "reglas", label: "Reglas", hint: "Texto listo para pinear" },
  { id: "caja", label: "Caja fuerte", hint: "Guardar todo" },
  { id: "oficio", label: "¿Es trabajo?", hint: "Horas del mes" },
];

type LogItem = {
  id: string;
  at: string;
  platform: "Twitch" | "Discord";
  user: string;
  action: string;
  reason: string;
};

const TIMEOUTS = [
  { label: "10 s", seconds: 10 },
  { label: "1 min", seconds: 60 },
  { label: "10 min", seconds: 600 },
  { label: "1 h", seconds: 3600 },
  { label: "1 día", seconds: 86400 },
  { label: "7 días", seconds: 604800 },
  { label: "14 días", seconds: 1209600 },
];

function usePersistent<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(initial);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw) setValue(JSON.parse(raw) as T);
    } catch {
      /* el valor por defecto alcanza */
    }
    setReady(true);
  }, [key]);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, ready, value]);

  return [value, setValue] as const;
}

export function ModTools() {
  const [tool, setTool] = usePersistent<ToolId>("academia-tool", "comandos");
  const active = TOOLS.some((item) => item.id === tool) ? tool : "comandos";

  return (
    <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)]">
      <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {TOOLS.map((item) => {
          const on = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setTool(item.id)}
              className={
                "min-h-11 shrink-0 rounded-md border px-3 py-2 text-left transition-colors lg:w-full " +
                (on
                  ? "border-primary bg-primary text-primary-fg"
                  : "border-border bg-surface text-fg hover:border-primary")
              }
              aria-pressed={on}
            >
              <span className="block text-sm font-semibold">{item.label}</span>
              <span className={"block text-xs " + (on ? "text-primary-fg/80" : "text-muted")}>
                {item.hint}
              </span>
            </button>
          );
        })}
      </div>
      <div className="min-w-0 rounded-lg border border-border bg-surface p-4 sm:p-6">
        {active === "comandos" && <CommandBench />}
        {active === "escalera" && <LadderBench />}
        {active === "bitacora" && <LogBench />}
        {active === "raid" && <CheckBench storageKey="academia-raid" steps={RAID_STEPS} />}
        {active === "reglas" && <RulesBench />}
        {active === "caja" && <CheckBench storageKey="academia-caja" steps={BACKUP_STEPS} />}
        {active === "oficio" && <LaborBench />}
      </div>
    </div>
  );
}

function CommandBench() {
  const [platform, setPlatform] = useState<"Twitch" | "Discord" | "Todas">("Twitch");
  const [query, setQuery] = useState("");
  const [user, setUser] = useState("");
  const [reason, setReason] = useState("");
  const [seconds, setSeconds] = useState(600);
  const [kind, setKind] = useState<"timeout" | "ban" | "warn">("timeout");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COMMANDS.filter((row) => {
      if (platform !== "Todas" && row.platform !== platform) return false;
      if (!q) return true;
      return (row.name + row.use + row.sample).toLowerCase().includes(q);
    });
  }, [platform, query]);

  const handle = user.trim() || "usuario";
  const why = reason.trim();
  const line =
    kind === "timeout"
      ? `/timeout ${handle} ${seconds}${why ? ` ${why}` : ""}`
      : kind === "ban"
        ? `/ban ${handle}${why ? ` ${why}` : ""}`
        : `/warn ${handle}${why ? ` ${why}` : ""}`;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl text-fg">Comandos que se usan de verdad</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Jotraxs dice que las herramientas sirven cuando generan más, y de manera eficiente.
          Esta mesa arma la línea de Twitch para copiarla al chat del mod. Discord no usa la
          misma barra: al lado están las acciones del clic derecho.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block text-muted">Usuario</span>
          <input
            value={user}
            onChange={(event) => setUser(event.target.value)}
            placeholder="nombre en el chat"
            className="min-h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none focus:border-primary"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-muted">Motivo</span>
          <input
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            placeholder="corto, para el informe"
            className="min-h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none focus:border-primary"
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ["timeout", "Timeout"],
            ["warn", "Advertir"],
            ["ban", "Ban"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setKind(id)}
            className={
              "min-h-11 rounded-md border px-3 text-sm font-medium " +
              (kind === id
                ? "border-primary bg-primary text-primary-fg"
                : "border-border bg-bg text-fg")
            }
          >
            {label}
          </button>
        ))}
      </div>

      {kind === "timeout" && (
        <div className="flex flex-wrap gap-2">
          {TIMEOUTS.map((preset) => (
            <button
              key={preset.seconds}
              type="button"
              onClick={() => setSeconds(preset.seconds)}
              className={
                "min-h-11 rounded-md border px-3 text-sm tabular-nums " +
                (seconds === preset.seconds
                  ? "border-primary bg-surface-2 text-primary"
                  : "border-border bg-bg text-fg")
              }
            >
              {preset.label}
            </button>
          ))}
        </div>
      )}

      <CopyBlock label="Listo para el chat de Twitch" value={line} />

      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="block flex-1 text-sm">
          <span className="mb-1 block text-muted">Buscar en la guía</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="slow, audit, shield…"
            className="min-h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none focus:border-primary"
          />
        </label>
        <div className="flex gap-2 sm:items-end">
          {(["Twitch", "Discord", "Todas"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setPlatform(item)}
              className={
                "min-h-11 rounded-md border px-3 text-sm " +
                (platform === item
                  ? "border-primary bg-primary text-primary-fg"
                  : "border-border text-fg")
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {rows.map((row) => (
          <li key={row.platform + row.name} className="grid gap-2 py-4 sm:grid-cols-[140px_minmax(0,1fr)]">
            <div>
              <p className="text-xs tracking-wide text-primary uppercase">{row.platform}</p>
              <p className="font-display text-lg text-fg">{row.name}</p>
            </div>
            <div className="min-w-0">
              <p className="text-sm leading-relaxed text-muted">{row.use}</p>
              <code className="mt-2 block overflow-x-auto rounded-md bg-bg px-3 py-2 text-sm text-fg">
                {row.sample}
              </code>
            </div>
          </li>
        ))}
        {rows.length === 0 && <li className="py-6 text-sm text-muted">Nada con esa búsqueda.</li>}
      </ul>
    </div>
  );
}

function LadderBench() {
  const [caseId, setCaseId] = useState(LADDER[0].id);
  const [step, setStep] = useState<"primera" | "repite" | "grave">("primera");
  const selected = LADDER.find((item) => item.id === caseId) ?? LADDER[0];
  const result = selected.steps[step];

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-2xl text-fg">Escalera, no garrote</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          La academia que publicó Jotraxs enseña a trabajar en equipo, no a vaciar el chat.
          Elegí el caso y si es la primera vez. Odio, acoso y raids no tienen aviso previo.
        </p>
      </div>
      <label className="block text-sm">
        <span className="mb-1 block text-muted">Qué está pasando</span>
        <select
          value={selected.id}
          onChange={(event) => setCaseId(event.target.value)}
          className="min-h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none focus:border-primary"
        >
          {LADDER.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["primera", "Primera vez"],
            ["repite", "Ya se le avisó"],
            ["grave", "Se puso grave"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setStep(id)}
            className={
              "min-h-11 rounded-md border px-3 text-sm " +
              (step === id
                ? "border-primary bg-primary text-primary-fg"
                : "border-border bg-bg text-fg")
            }
          >
            {label}
          </button>
        ))}
      </div>
      <article className="rounded-md border border-border bg-bg p-4">
        <p className="text-xs tracking-wide text-primary uppercase">{selected.platform}</p>
        <h4 className="mt-1 font-display text-2xl text-fg">{result.action}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted">{result.detail}</p>
      </article>
      <CopyBlock label="Para decir o ejecutar" value={result.sample} />
    </div>
  );
}

function LogBench() {
  const [items, setItems] = usePersistent<LogItem[]>("academia-log", []);
  const [platform, setPlatform] = useState<"Twitch" | "Discord">("Twitch");
  const [user, setUser] = useState("");
  const [action, setAction] = useState("aviso");
  const [reason, setReason] = useState("");

  const safeItems = Array.isArray(items) ? items : [];

  function add() {
    const name = user.trim();
    const why = reason.trim();
    if (!name || !why) return;
    const next: LogItem = {
      id: crypto.randomUUID(),
      at: new Date().toISOString(),
      platform,
      user: name,
      action,
      reason: why,
    };
    setItems([next, ...safeItems].slice(0, 80));
    setUser("");
    setReason("");
  }

  const report = [
    "Informe de moderación",
    `Turnos anotados: ${safeItems.length}`,
    "",
    ...safeItems.map((item) => {
      const when = new Date(item.at);
      const stamp = Number.isNaN(when.getTime())
        ? item.at
        : when.toLocaleString("es-AR", { dateStyle: "short", timeStyle: "short" });
      return `${stamp} · ${item.platform} · ${item.action} · ${item.user} · ${item.reason}`;
    }),
  ].join("\n");

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-2xl text-fg">Bitácora del turno</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          El programa de la escuela incluye el informe. Esto queda solo en este navegador:
          no se publica y no reemplaza el panel de Twitch ni el audit log de Discord.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block text-muted">Plataforma</span>
          <select
            value={platform}
            onChange={(event) => setPlatform(event.target.value as "Twitch" | "Discord")}
            className="min-h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none focus:border-primary"
          >
            <option>Twitch</option>
            <option>Discord</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block text-muted">Acción</span>
          <select
            value={action}
            onChange={(event) => setAction(event.target.value)}
            className="min-h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none focus:border-primary"
          >
            <option value="aviso">Aviso</option>
            <option value="borrar">Borrar mensaje</option>
            <option value="timeout">Timeout</option>
            <option value="ban">Ban</option>
            <option value="raid">Raid / contención</option>
          </select>
        </label>
        <label className="block text-sm" htmlFor="log-user">
          <span className="mb-1 block text-muted">Usuario</span>
          <input
            id="log-user"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            className="min-h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none focus:border-primary"
          />
        </label>
        <label className="block text-sm" htmlFor="log-reason">
          <span className="mb-1 block text-muted">Motivo</span>
          <input
            id="log-reason"
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            className="min-h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none focus:border-primary"
          />
        </label>
      </div>
      <button
        type="button"
        onClick={add}
        className="min-h-11 rounded-md bg-primary px-4 text-sm font-semibold text-primary-fg"
      >
        Anotar
      </button>
      {safeItems.length > 0 && <CopyBlock label="Informe para pegar al staff" value={report} />}
      <ul className="space-y-2">
        {safeItems.length === 0 && (
          <li className="rounded-md border border-dashed border-border px-3 py-6 text-sm text-muted">
            El turno todavía no tiene anotaciones.
          </li>
        )}
        {safeItems.map((item) => (
          <li
            key={item.id}
            className="flex items-start justify-between gap-3 rounded-md border border-border bg-bg px-3 py-3"
          >
            <div className="min-w-0">
              <p className="text-sm text-fg">
                <span className="text-primary">{item.platform}</span>
                {" · "}
                {item.action}
                {" · "}
                <span className="font-medium">{item.user}</span>
              </p>
              <p className="text-sm text-muted">{item.reason}</p>
            </div>
            <button
              type="button"
              aria-label={`Quitar anotación de ${item.user}`}
              onClick={() => setItems(safeItems.filter((row) => row.id !== item.id))}
              className="grid size-11 shrink-0 place-items-center rounded-md border border-border text-muted hover:text-fg"
            >
              <Trash2 className="size-4" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CheckBench({
  storageKey,
  steps,
}: {
  storageKey: string;
  steps: readonly { id: string; label: string; group?: string }[];
}) {
  const [done, setDone] = usePersistent<string[]>(storageKey, []);
  const checked = new Set(Array.isArray(done) ? done : []);
  const total = steps.length;
  const count = steps.filter((step) => checked.has(step.id)).length;

  function toggle(id: string) {
    const next = new Set(checked);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setDone([...next]);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-3">
        <h3 className="text-2xl text-fg">
          {storageKey === "academia-raid" ? "Anti-raid" : "Caja fuerte"}
        </h3>
        <p className="text-sm text-muted tabular-nums">
          {count}/{total}
        </p>
      </div>
      <p className="max-w-2xl text-sm leading-relaxed text-muted">
        {storageKey === "academia-raid"
          ? "Sale del post de octubre: no sirve borrar bots de a un mensaje. Primero se cierra la puerta."
          : "Sale del post de mayo, cuando pidió guardar todo porque lo bueno también se transforma mal."}
      </p>
      <div className="h-1.5 overflow-hidden rounded-full bg-bg">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${total === 0 ? 0 : (count / total) * 100}%` }}
        />
      </div>
      <ul className="space-y-2">
        {steps.map((step) => {
          const on = checked.has(step.id);
          return (
            <li key={step.id}>
              <button
                type="button"
                onClick={() => toggle(step.id)}
                className={
                  "flex min-h-11 w-full items-start gap-3 rounded-md border px-3 py-3 text-left " +
                  (on ? "border-primary bg-bg" : "border-border bg-bg")
                }
                aria-pressed={on}
              >
                <span
                  className={
                    "mt-0.5 grid size-5 shrink-0 place-items-center rounded-sm border " +
                    (on ? "border-primary bg-primary text-primary-fg" : "border-border")
                  }
                  aria-hidden="true"
                >
                  {on && <Check className="size-3.5" />}
                </span>
                <span>
                  {step.group && (
                    <span className="mb-0.5 block text-xs tracking-wide text-primary uppercase">
                      {step.group}
                    </span>
                  )}
                  <span className={"text-sm " + (on ? "text-muted line-through" : "text-fg")}>
                    {step.label}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function RulesBench() {
  const [name, setName] = useState("");
  const [picked, setPicked] = useState<string[]>(["respect", "spam", "mods"]);

  function toggle(id: string) {
    setPicked((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  const channel = name.trim() || "este canal";
  const lines = RULE_OPTIONS.filter((option) => picked.includes(option.id)).map(
    (option, index) => `${index + 1}. ${option.label}.`,
  );
  const text = [
    `Reglas de ${channel}`,
    "",
    "El chat se modera para que la comunidad pueda quedarse. No para ganar discusiones.",
    "",
    ...lines,
    "",
    "El staff puede avisar, silenciar o sacar. El motivo queda anotado.",
  ].join("\n");

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl text-fg">Reglas para pinear</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Desarrollar una buena comunidad, como escribió Jotraxs, empieza por decir las reglas
          antes de aplicarlas. Marcá las que el canal realmente va a sostener.
        </p>
      </div>
      <label className="block text-sm">
        <span className="mb-1 block text-muted">Nombre del canal o del server</span>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="el canal"
          className="min-h-11 w-full rounded-md border border-border bg-bg px-3 text-fg outline-none focus:border-primary"
        />
      </label>
      <ul className="grid gap-2 sm:grid-cols-2">
        {RULE_OPTIONS.map((option) => {
          const on = picked.includes(option.id);
          return (
            <li key={option.id}>
              <button
                type="button"
                onClick={() => toggle(option.id)}
                aria-pressed={on}
                className={
                  "flex min-h-11 w-full items-center gap-3 rounded-md border px-3 py-2 text-left text-sm " +
                  (on ? "border-primary bg-bg text-fg" : "border-border text-muted")
                }
              >
                <span
                  className={
                    "grid size-5 shrink-0 place-items-center rounded-sm border " +
                    (on ? "border-primary bg-primary text-primary-fg" : "border-border")
                  }
                  aria-hidden="true"
                >
                  {on && <Check className="size-3.5" />}
                </span>
                {option.label}
              </button>
            </li>
          );
        })}
      </ul>
      <CopyBlock label="Texto" value={text} />
    </div>
  );
}

function LaborBench() {
  const [hours, setHours] = useState(12);
  const [streams, setStreams] = useState(8);
  const [actions, setActions] = useState(40);
  const perStream = streams > 0 ? (hours / streams).toFixed(1) : "0";

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-2xl text-fg">¿Ser mod es trabajo?</h3>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          Jotraxs lo puso en el programa de la escuela, sin responderlo por vos. @jotraxs_ok
          después lo dejó en una línea: «nos van a pagar a los mods!! okno». Las horas igual
          cuentan. Esto no calcula un sueldo: muestra el tiempo que ya pusiste.
        </p>
      </div>
      <Slider label="Horas este mes" value={hours} min={0} max={80} onChange={setHours} />
      <Slider label="Streams cubiertos" value={streams} min={0} max={40} onChange={setStreams} />
      <Slider label="Acciones anotadas" value={actions} min={0} max={400} step={5} onChange={setActions} />
      <dl className="grid gap-3 sm:grid-cols-3">
        <Stat k="Horas" v={String(hours)} />
        <Stat k="Por stream" v={`${perStream} h`} />
        <Stat k="Acciones" v={String(actions)} />
      </dl>
      <p className="text-sm leading-relaxed text-muted">
        {hours === 0
          ? "Cuando cubras el primer turno, volvé y anotá. El informe sale de la bitácora."
          : hours < 8
            ? "Un turno corto también es turno. Dejalo escrito para el streamer, no solo en la cabeza."
            : "Eso ya es una franja fija del mes. Si el canal crece, el equipo también tiene que crecer: no se resuelve con un solo mod heroico."}
      </p>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-sm">
        <span className="text-muted">{label}</span>
        <span className="font-medium text-fg tabular-nums">{value}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-11 w-full accent-primary"
      />
    </label>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-md border border-border bg-bg px-3 py-3">
      <dt className="text-xs tracking-wide text-muted uppercase">{k}</dt>
      <dd className="mt-1 font-display text-3xl text-fg tabular-nums">{v}</dd>
    </div>
  );
}

function CopyBlock({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-md border border-border bg-bg">
      <div className="flex items-center justify-between gap-3 border-b border-border px-3 py-2">
        <p className="text-xs tracking-wide text-muted uppercase">{label}</p>
        <button
          type="button"
          onClick={copy}
          className="inline-flex min-h-11 items-center gap-2 rounded-md px-2 text-sm font-medium text-primary"
        >
          {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre className="overflow-x-auto px-3 py-3 text-sm leading-relaxed whitespace-pre-wrap text-fg">
        {value}
      </pre>
    </div>
  );
}
