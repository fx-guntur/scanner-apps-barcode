import { kv } from '@vercel/kv';

export default async function handler(req, res) {
    const KV_KEY = 'pos_products';

    if (req.method === 'GET') {
        try {
            let products = await kv.get(KV_KEY);

            // If KV is empty, return an empty array or handle as needed
            if (!products) {
                products = [];
            }

            return res.status(200).json(products);
        } catch (error) {
            console.error('KV GET Error:', error);
            return res.status(500).json({ error: 'Failed to fetch products' });
        }
    }

    if (req.method === 'POST') {
        try {
            const products = req.body;
            if (!Array.isArray(products)) {
                return res.status(400).json({ error: 'Body must be an array of products' });
            }

            await kv.set(KV_KEY, products);
            return res.status(200).json({ success: true });
        } catch (error) {
            console.error('KV SET Error:', error);
            return res.status(500).json({ error: 'Failed to save products' });
        }
    }

    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
}
