import path from 'path';
import {promises as fs} from 'fs';


export default async function Home(props) {

  const jsonDirectory = path.join(process.cwd(), 'data');
  const staticData = await fs.readFile(jsonDirectory + '/dummy-backend.json', 'utf8');
  const products = JSON.parse(staticData).products;

  return (
   <ul>
    {products.map(product => (
      <li key={product.id}> <h1>{product.title}</h1></li>
    ))}
   </ul>
  )
}

