// GutterCatalogue.js
import { useParams } from 'react-router-dom';

const brandMap = {
  goomor:   'goomorproducts',
  stratco:  'stratcoproducts',
  stramit:  'stramitproducts',
  metroll:  'metrollproducts',
  lysaght:  'lysaghtproducts',
};

useEffect(() => {
  const fetchProduct = async () => {
    try {
      // productId looks like "{brand}-{id}" from your list links
      const { productId } = params; // or useParams()
      const [brandSlug, rawId] = productId.split('-');

      const endpoint = brandMap[brandSlug];
      if (!endpoint) throw new Error('Unknown brand in URL');

      // If your backend supports detail-by-id:
      const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/${endpoint}/${rawId}`);
      // If not, fallback to list + find:
      // const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/${endpoint}`);
      // const list = await resp.json();
      // const data = list.find(p => String(p.id) === rawId);

      if (!resp.ok) throw new Error('Failed to fetch product data');
      const data = await resp.json();

      setProduct(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  fetchProduct();
}, [productId]);
