import React from 'react';
import styles from './Clients.module.scss';

const Clients = () => (
    <>
        <div className={styles.clients}>
            <h2 className={styles.h2}>Our Beloved Client</h2>
            <p className={styles.p}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
            </p>
        </div>
        <div className={styles.logos}>
            {[...new Array(8).fill('LOGO CLIENT')].map(
                (item: string, index: number) => (
                    <div
                        key={`${item}-${index.toString()}`}
                        className={styles.logo}
                    >
                        {index === 7 ? 'More Client' : `${item} ${index + 1}`}
                    </div>
                )
            )}
        </div>
    </>
);

export default React.memo(Clients);
