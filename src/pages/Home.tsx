import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to TransFlow</h1>
      <Card>
        <CardHeader>
          <CardTitle>About TransFlow</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            TransFlow is a modern, responsive web application built with:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>React 19 with TypeScript</li>
            <li>Vite for fast development</li>
            <li>shadcn/ui components</li>
            <li>Tailwind CSS for styling</li>
            <li>React Router for navigation</li>
            <li>OpenAPI TypeScript for API client generation</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

