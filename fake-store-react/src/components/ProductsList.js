// React
import { useRef } from 'react';

// Utils
import { useDraggable } from 'react-use-draggable-scroll';

// Sub Components
import ProductCard from './ProductCard';

// CSS
import styles from './ProductsList.module.css'

function ProductsList({view}){
    // Draggable
    const dragPoint = useRef(); 
    const { events } = useDraggable(dragPoint);

    return (
        <div className={`container ${styles.horizontalScrollable} ${styles.products}`}>
            <div className={`row text-center ${styles.force} ${styles.scrolling}`} {...events} ref={dragPoint}>
                {view && view.map(el => <ProductCard key={el.id} {...el} description={null}/>)}
            </div>
        </div>  
    );
}

export default ProductsList;