import { DrawerNavigationProp } from '@react-navigation/drawer';

type HomeScreenProps = {
    HomePage: undefined;
};

export type DrawerProps = DrawerNavigationProp<HomeScreenProps, 'HomePage'>;
