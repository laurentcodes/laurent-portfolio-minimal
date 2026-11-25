import type { Metadata } from 'next';
import { baseUrl } from 'app/sitemap';

// components
import WorkPagination from '../../components/pagination/WorkPagination';

// utils
import { metadata } from 'utils/metadata';

export function generateMetadata(): Metadata {
  return metadata({
    title: 'Work',
    description: 'Personal projects and current work.',
    url: `${baseUrl}/work`,
  });
}

const workExperience = [
  {
    project: 'Codeva',
    techStack: [
      'Next.js',
      'TypeScript',
      'React Native',
      'Node.js',
      'PostgreSQL',
      'Docker',
    ],
    description:
      'A technology delivery firm that designs, builds, deploys, and supports the software, cloud systems, and workplace technology companies depend on, with experience across finance, digital services, and advertising.',
    role: 'Lead Engineer since December 2025, leading technical delivery of web and mobile products and the cloud foundations behind them, from architecture and implementation through launch and ongoing operations.',
    impact:
      'Helping client teams move from business requirements to dependable products and infrastructure, with continuity from build through day-to-day operation.',
    access: 'Publicly available',
    url: 'https://thecodeva.com',
  },
  {
    project: 'DinaSend',
    techStack: [
      'TypeScript',
      'Hono',
      'Bun',
      'PostgreSQL',
      'Redis',
      'AWS SES',
    ],
    description:
      'A transactional-only email API for product mail such as verification, password resets, receipts, and alerts, sent through a REST API and an official SDK, with no campaigns or lists.',
    role: 'Founder, building the REST API, the official SDK, and the product surface for sending and tracking transactional email.',
    impact:
      'Gives product teams a dedicated path for verification, password resets, receipts, and alerts without campaign or list tooling.',
    access: 'Publicly available. Docs at https://docs.dinasend.com.',
    url: 'https://dinasend.com',
  },
  {
    project: 'Nigeria Tax Calculator',
    techStack: [
      'React',
      'TypeScript',
      'TanStack Start',
      'TanStack Router',
      'Tailwind CSS',
    ],
    description:
      'A personal PAYE calculator based on the Nigeria Tax Act 2025, effective 1 January 2026. It covers personal tax only.',
    role: 'Built and published the calculator as a personal project.',
    impact:
      'Puts the Nigeria Tax Act 2025 personal PAYE rules into a public web app ahead of the 1 January 2026 effective date.',
    access: 'Publicly available',
    url: 'https://nigeria-tax-calculator-one.vercel.app',
  },
  {
    project: 'Form Builder',
    techStack: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Clerk',
      'dnd-kit',
    ],
    description:
      'A web app for creating, publishing, and sharing forms and collecting submissions, with drag-and-drop editing and signed-in accounts.',
    role: 'Built the app as a personal project, including the drag-and-drop editor, publish and share flow, submission storage, and Clerk authentication.',
    impact:
      'Lets a signed-in user assemble a form, publish it on a share link, and keep the submissions that come back.',
    access:
      'Source is public. The live deploy is currently unavailable, so this entry links to the repository.',
    url: 'https://github.com/laurentcodes/form-builder',
  },
  {
    project: 'Gym Management',
    techStack: [
      'TypeScript',
      'Bun',
      'Next.js',
      'Hono',
      'PostgreSQL',
      'Drizzle',
      'Paystack',
      'Cloudflare R2',
    ],
    description:
      'A Bun monorepo for gym operations: a Next.js web app, a Hono API, background workers, and an internal control plane, with PostgreSQL and Drizzle, Paystack payments, and Cloudflare R2 storage.',
    role: 'Building the workspace as a personal project, across the web app, API, workers, and control plane.',
    impact:
      'Keeps gym operations, payments, and file storage in one codebase that runs locally, with no public deploy.',
    access: 'Source is public, with no live demo.',
    url: 'https://github.com/laurentcodes/gym-management',
  },
  {
    project: 'Zeron',
    techStack: ['Rust'],
    description:
      'An open-source native control plane for coding agents. It runs locally by default, with optional multi-device sync.',
    role: 'Contributor, not a lead. Merged Antigravity ACP support with context UI and window geometry persistence (https://github.com/zeronsh/zeron/pull/349), restored Antigravity detection and updates (https://github.com/zeronsh/zeron/pull/617), and Cursor Plus model defaults (https://github.com/zeronsh/zeron/pull/920).',
    impact:
      'Those merged changes added Antigravity support, later restored its detection and updates, and sent Cursor Plus model defaults with requests.',
    access: 'Publicly available',
    url: 'https://zeron.sh',
  },
  {
    project: 'react-native-rich-toast',
    techStack: ['React Native', 'TypeScript'],
    description:
      'A published npm package (v1.2.0): a Sonner-style toast API over react-native-toast-message, with rich color variants and optional queueing.',
    role: 'Author of the package, published on npm.',
    impact:
      'Gives React Native apps a short API for success, error, info, and warning toasts, with optional rich colors and a queue.',
    access:
      'Published on npm. Repository at https://github.com/laurentcodes/react-native-rich-toast. Snack demo at https://snack.expo.dev/@stlaurent/react-native-rich-toast.',
    url: 'https://www.npmjs.com/package/react-native-rich-toast',
  },
];

export default function Work() {
  return (
    <section>
      <div className='p-6'>
        <h1 className='mb-4 text-2xl font-semibold tracking-tighter text-black [html.dark_&]:text-white'>
          Work
        </h1>

        <div className='mb-8 prose [html.dark_&]:prose-invert'>
          <p className='text-black [html.dark_&]:text-white'>
            Below is a selection of personal projects and my current work. It
            includes products I have built from scratch, open-source
            contributions, and a published package, alongside my current role.
            Each entry shows a different part of how I design and ship
            software.
          </p>
        </div>

        <WorkPagination workExperience={workExperience} itemsPerPage={3} />

        <div className='mt-8 mb-4'>
          <p className='text-black [html.dark_&]:text-white'>
            Full employer history is in my{' '}
            <a
              href='https://drive.google.com/file/d/1NOI7ZdxX6Ni_M-TSKqDKu2XlGDeJTufZ/view?usp=drive_link'
              className='underline hover:text-gray-600 [html.dark_&]:hover:text-gray-400 transition-all duration-200 ease-out'
              target='_blank'
              rel='noopener'
            >
              CV
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
