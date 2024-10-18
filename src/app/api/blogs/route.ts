import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/app/data/blogs.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return new Response(jsonData);
}
