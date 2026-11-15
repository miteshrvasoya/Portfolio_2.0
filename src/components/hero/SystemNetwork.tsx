/**
 * Animated background: a stylised map of the systems I build.
 * Packets travel along the edges like requests through a payout pipeline.
 */
const nodes = [
  { id: 'client', x: 70, y: 120, label: 'client' },
  { id: 'webhook', x: 120, y: 470, label: 'webhook' },
  { id: 'api', x: 290, y: 260, label: 'api-gateway' },
  { id: 'redis', x: 250, y: 560, label: 'redis' },
  { id: 'queue', x: 470, y: 90, label: 'bullmq' },
  { id: 'worker', x: 700, y: 170, label: 'payout-worker' },
  { id: 'pg', x: 560, y: 560, label: 'postgres' },
  { id: 'ledger', x: 900, y: 330, label: 'ledger' },
  { id: 'gateway', x: 930, y: 80, label: 'gateway' },
  { id: 'llm', x: 840, y: 560, label: 'llm' },
] as const;

type NodeId = (typeof nodes)[number]['id'];

const edges: [NodeId, NodeId, string][] = [
  ['client', 'api', 'syn-blue'],
  ['webhook', 'api', 'syn-purple'],
  ['api', 'queue', 'syn-green'],
  ['api', 'redis', 'syn-orange'],
  ['queue', 'worker', 'syn-green'],
  ['worker', 'gateway', 'syn-blue'],
  ['worker', 'ledger', 'syn-green'],
  ['worker', 'pg', 'syn-purple'],
  ['pg', 'ledger', 'syn-orange'],
  ['pg', 'llm', 'syn-blue'],
  ['redis', 'pg', 'syn-green'],
];

const pos = (id: NodeId) => nodes.find((n) => n.id === id)!;

function curve(a: NodeId, b: NodeId) {
  const p = pos(a);
  const q = pos(b);
  const mx = (p.x + q.x) / 2;
  const my = (p.y + q.y) / 2 - (q.x - p.x) * 0.12;
  return `M${p.x},${p.y} Q${mx},${my} ${q.x},${q.y}`;
}

export function SystemNetwork() {
  return (
    <svg
      viewBox="0 0 1000 640"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        {edges.map(([a, b]) => (
          <path key={`${a}-${b}`} id={`edge-${a}-${b}`} d={curve(a, b)} />
        ))}
      </defs>

      {edges.map(([a, b]) => (
        <use
          key={`line-${a}-${b}`}
          href={`#edge-${a}-${b}`}
          fill="none"
          stroke="rgb(var(--line))"
          strokeWidth={1.2}
          strokeDasharray="4 6"
        />
      ))}

      {edges.map(([a, b, color], i) => (
        <g key={`pkt-${a}-${b}`}>
          {[0, 1].map((k) => (
            <circle key={k} r={k ? 2 : 3} fill={`rgb(var(--${color}))`} opacity={k ? 0.5 : 0.9}>
              <animateMotion
                dur={`${3.2 + (i % 4) * 0.9}s`}
                begin={`${(i * 0.37 + k * 1.6) % 4}s`}
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href={`#edge-${a}-${b}`} />
              </animateMotion>
            </circle>
          ))}
        </g>
      ))}

      {nodes.map((n) => (
        <g key={n.id} transform={`translate(${n.x} ${n.y})`}>
          <circle r={14} fill="rgb(var(--surface))" stroke="rgb(var(--line))" strokeWidth={1.2} />
          <circle r={4} fill="rgb(var(--content-muted))" opacity={0.6} />
          <text
            y={30}
            textAnchor="middle"
            className="font-mono"
            fontSize={11}
            fill="rgb(var(--content-muted))"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
