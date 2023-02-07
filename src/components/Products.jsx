import {
  useQuery,
  useMutation,
  useQueryClient
} from '@tanstack/react-query';
import {
  getProducts,
  deleteProduct,
  updateProduct
} from '../api/productsAPI';

const Products = () => {
  const {
    isLoading,
    data: products,
    isError,
    error
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: (products) =>
      products.sort((a, b) => b.id - a.id)
  });

  const queryClient = useQueryClient();

  //ELIMINAR PRODUCTO
  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    }
  });

  //actualizar un producto

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
  });
  
  
  
  
  

  if (isLoading) return <div>Loading....</div>;
  else if (isError)
    return <div>Error: {error.message} </div>;

  return products.map((product) => (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button
        onClick={() => {
          deleteProductMutation.mutate(product.id);
        }}>
        Delete
      </button>
      <input type='checkbox'
       checked ={product.inStock}
       onChange={(e) => { 
        
        updateProductMutation.mutate({
          
          ...product,
          inStock: e.target.checked

          
        });
       }} />
      <label htmlFor=''>In Stock</label>
    </div>
  ));
};

export default Products;
