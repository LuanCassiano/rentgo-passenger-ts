import { NavigationActions } from '@react-navigation/compat';

let nav: any;

function setTopLevelNavigator(navigatorRef: unknown): void {
    nav = navigatorRef;
}

function navigate(routeName: string, params?: Record<string, unknown>): void {
    nav.dispatch(NavigationActions.navigate({ routeName, params }));
}

function back(routeName: string): void {
    nav.dispatch(
        NavigationActions.back({
            key: routeName,
        }),
    );
}

export default {
    setTopLevelNavigator,
    navigate,
    back,
};
