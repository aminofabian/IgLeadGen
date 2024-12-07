# IgLeadGen

A modern web application for Instagram lead generation and management built with Next.js 14.

## Features

- 🔐 Secure Authentication with NextAuth.js
- 📱 Responsive Design with Tailwind CSS
- 🎨 Modern UI Components with Radix UI
- 📊 Database Integration with Prisma
- ✉️ Email Functionality with Resend
- 🔄 Form Handling with React Hook Form and Zod validation
- 🌐 Server-side Rendering with Next.js
- 🎯 TypeScript for type safety

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Authentication:** NextAuth.js
- **Database:** Prisma
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Email Service:** Resend
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- A database (supported by Prisma)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aminofabian/igleadgen.git
cd igleadgen
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```

4. Set up your database and run migrations:
```bash
npx prisma generate
npx prisma db push
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=

# Authentication
AUTH_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# Email (Resend)
RESEND_API_KEY=

# App Config
NEXT_PUBLIC_APP_URL=
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.