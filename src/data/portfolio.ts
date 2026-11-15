export const profile = {
  name: 'Mitesh Vasoya',
  handle: 'mitesh',
  role: 'Software Engineer',
  location: 'Ahmedabad, India',
  email: 'mrvasoya2001@gmail.com',
  phone: '+91 7096141814',
  github: 'https://github.com/miteshrvasoya',
  linkedin: 'https://linkedin.com/in/mitesh-vasoya',
  resume: '/Mitesh_Vasoya_Software_Engineer_Resume.pdf',
  summary:
    'Software engineer with 2.7 years building fault-tolerant backend systems — payment gateways, idempotent APIs and queue-based payout infrastructure moving real money — and shipping AI products on the side.',
};

export const roles = [
  'backend systems',
  'payment infrastructure',
  'distributed queues',
  'AI-powered products',
];

export const stats = [
  { value: '₹4Cr+', label: 'disbursed via systems I built' },
  { value: '2.7y', label: 'shipping production code' },
  { value: '4', label: 'payment gateways integrated' },
  { value: '0', label: 'duplicate payouts' },
];

export const traits = [
  'idempotent-apis',
  'fintech',
  'postgresql',
  'bullmq',
  'multi-tenant',
  'fault-tolerance',
  'real-time',
  'system-design',
];

export const techStack = [
  { file: 'languages', items: ['TypeScript', 'JavaScript', 'SQL', 'Python'] },
  { file: 'backend', items: ['Node.js', 'Express.js', 'FastAPI', 'REST API Design', 'Microservices'] },
  { file: 'databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Query Optimization', 'Perf Tuning'] },
  { file: 'infra', items: ['Redis', 'BullMQ', 'Distributed Systems', 'Async Processing', 'Caching'] },
  { file: 'payments', items: ['Cashfree', 'Paytm', 'Easebuzz', 'PhonePe', 'Webhooks', 'Reconciliation'] },
  { file: 'observability', items: ['Sentry', 'Structured Logging', 'Monitoring', 'Error Tracking'] },
  { file: 'ai', items: ['LLM Pipelines', 'Knowledge Ingestion', 'Classification', 'Chat Agents'] },
  { file: 'tooling', items: ['Git', 'Postman', 'Jira', 'React', 'Angular'] },
] as const;

export interface Commit {
  hash: string;
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  changes: string[];
}

export const experience: Commit[] = [
  {
    hash: 'a4c91e2',
    title: 'Backend Engineer (SDE-II)',
    company: 'eVitalRx',
    location: 'Ahmedabad, India',
    period: 'Feb 2025 — Present',
    current: true,
    changes: [
      'Leading architecture of payment infrastructure handling ₹4Cr+ total disbursements and ₹8Mn/month partner settlements.',
      'Designed queue-based payout execution on Redis / BullMQ for retryable, fault-tolerant payment processing.',
      'Mentoring junior engineers on system design, idempotency patterns and API reliability.',
    ],
  },
  {
    hash: '7f03bd9',
    title: 'Backend Engineer (SDE-I)',
    company: 'eVitalRx',
    location: 'Ahmedabad, India',
    period: 'Aug 2023 — Jan 2025',
    changes: [
      'Integrated Cashfree, Paytm, Easebuzz and PhonePe for payment collection and vendor payouts.',
      'Built idempotent APIs and webhook handlers that eliminated duplicate transaction processing.',
      'Designed validation & reconciliation flows keeping transactions, payouts and ledger records consistent.',
      'Cut PostgreSQL query time by 40% through indexing and query optimisation.',
      'Set up Sentry-based proactive monitoring and error tracking.',
    ],
  },
  {
    hash: '1e5d0a7',
    title: 'Junior Web Developer (MERN)',
    company: 'DUIUX Infotech',
    location: 'Surat, India',
    period: 'Dec 2022 — Aug 2023',
    changes: [
      'Built REST APIs and business workflows for e-commerce and booking platforms.',
      'Shipped real-time, bidirectional features with Socket.IO.',
      'Implemented secure authentication and role-based access control.',
    ],
  },
];

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  live?: string;
  github?: string;
  status: 'live' | 'building' | 'archived';
  kind: 'personal' | 'open-source';
  featured?: boolean;
  pipeline?: string[];
}

export const projects: Project[] = [
  {
    slug: 'tryk',
    name: 'Tryk',
    tagline: 'AI-powered customer support platform',
    description:
      'My personal product: a plug-and-play AI support platform that lets businesses and Shopify merchants deploy conversational assistants trained on their own knowledge base — embedded with a single script tag.',
    highlights: [
      'Multi-tenant backend architecture with per-workspace isolation and widget keys.',
      'Knowledge ingestion pipelines that turn docs & store data into a queryable knowledge base.',
      'Scalable query routing and response generation behind an embeddable chat widget.',
      'Explored payment routing that picks the optimal gateway by latency and success rate.',
    ],
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'LLMs', 'Shopify'],
    live: 'https://tryk.in',
    github: 'https://github.com/tryk-ai/tryk',
    status: 'live',
    kind: 'personal',
    featured: true,
    pipeline: ['widget.js', 'api gateway', 'tenant router', 'knowledge base', 'llm'],
  },
  {
    slug: 'mailos',
    name: 'MailOS',
    tagline: 'AI email processing system',
    description:
      'An AI-driven inbox that classifies, prioritises and digests 100–300 emails per user per day, extracting tasks into a structured daily summary.',
    highlights: [
      'Reduced inbox noise by ~80% with classification & prioritisation.',
      'Email-intelligence pipelines with <3s processing latency.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'LLMs'],
    live: 'https://mailos.in',
    github: 'https://github.com/mailos',
    status: 'live',
    kind: 'personal',
  },
  {
    slug: 'tracscore',
    name: 'TracScore',
    tagline: 'Real-time cricket analytics',
    description:
      'A real-time cricket platform with live score updates and full tournament management.',
    highlights: [
      'Redis caching cut database load by ~60% on read-heavy endpoints.',
      'Complete match orchestration and player performance analytics.',
    ],
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'Real-Time'],
    github: 'https://github.com/miteshrvasoya/tracscore_backend',
    status: 'archived',
    kind: 'open-source',
  },
];

export const education = {
  degree: 'B.E. Computer Engineering',
  institution: 'Gujarat Technological University',
  period: '2019 — 2023',
  location: 'Surat, India',
  grade: '8.38 / 10 CGPA',
  coursework: ['Core CS Fundamentals', 'DBMS & Networks', 'Data Structures & Algorithms'],
};

export const posts = [
  {
    title: 'From a For-Loop to a Fault-Tolerant Payout System (₹70L/month, 0 Duplicate Payments)',
    description:
      'How we moved from a fragile loop-based payout system to a reliable, idempotent and traceable architecture — processing ₹70L/month with zero duplicate payments.',
    url: 'https://dev.to/miteshvasoya/from-a-for-loop-to-a-fault-tolerant-payout-system-70lmonth-0-duplicate-payments-4cfp',
    tags: ['fintech', 'system-design', 'architecture', 'backend'],
    date: 'May 2026',
    readTime: '8 min',
    platform: 'DEV.to',
  },
];
