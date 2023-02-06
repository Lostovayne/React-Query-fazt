const ProductForm = () => {
  return (
    <form>
      <label htmlFor=''>Name</label>
      <input type='text' id='name' name='name' />

      <label htmlFor='description'>Description</label>
      <input
        type='text'
        id='description'
        name='description'
      />

      <label htmlFor='price'>Price</label>
      <input type='number' id='price' name='price' />

      <button>Add Product</button>
    </form>
  );
};

export default ProductForm;
