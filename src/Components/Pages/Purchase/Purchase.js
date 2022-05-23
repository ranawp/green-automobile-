import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams();
    return (
        <div>
            <h4>Purchase page:{purchaseId}</h4>
        </div>
    );
};

export default Purchase;