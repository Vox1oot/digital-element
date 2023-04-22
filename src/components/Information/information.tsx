import React from 'react';
import Card from './Card';
import { ReactComponent as Icon1 } from '../../assets/icons/1.svg';
import { ReactComponent as Icon2 } from '../../assets/icons/2.svg';
import { ReactComponent as Icon3 } from '../../assets/icons/3.svg';
import styles from './Information.module.scss';

interface IDataInformation {
    id: number;
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

const dataInformation: IDataInformation[] = [
    {
        id: 1,
        icon: Icon1,
        title: 'Make Your business To Be Better Famous In Internet',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        icon: Icon2,
        title: 'Build Your Digital Product That Suitable For Your Need',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 3,
        icon: Icon3,
        title: 'Bring Technology To Your Comfrotable Home',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    }
];

const Information = () => (
    <div className={styles.container}>
        {dataInformation.map((data: IDataInformation) => (
            <Card key={data.id} {...data} />
        ))}
        <h2 className={styles.h2}>
            What we do to help our client grow in digital era,
        </h2>
    </div>
);

export default Information;
