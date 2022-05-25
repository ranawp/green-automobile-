import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useProduct from '../../Shared/Hooks/UseProduct';

const ManageAllProducts = () => {
    const [product, setProduct] = useProduct()
    const [user, loading, error] = useAuthState(auth);

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete?')
        if (confirm) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = product.filter(product => product._id !== id);
                    setProduct(remaining)

                })
        }
    }

    return (
        <div>
            <h3 className='text-primary font-bold text-2xl'>Manage all orders. Its maintain only admin</h3>
            <h5>Total products{product.length}</h5>

            <div class="overflow-x-auto">
                <table class="table lg:w-full md:table-auto">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>User Name</th>
                            <th>Payment Status</th>
                            <th>Remove</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            product.map((product, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{user.displayName}</td>
                                    <td>Unpaid</td>

                                    <svg onClick={() => handleDelete(product._id)} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>


                                </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>




        </div>
    );
};

export default ManageAllProducts;