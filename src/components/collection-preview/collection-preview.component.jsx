import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem  from '../collection-item/collection-item.component';

const CollectionPreview =({ title ,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            items.filter((items ,idx) => idx <4 )
                 .map(({ id , ...otherCollectionProps }) => 
                <CollectionItem key={items.id} {...otherCollectionProps} ></CollectionItem> 
            )
        }
        </div>    
    </div>
);
export default CollectionPreview;