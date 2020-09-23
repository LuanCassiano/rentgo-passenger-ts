export default interface IHeader {
    title: string;
    action?(): void;
    iconType?: string | undefined;
    iconName?: string | undefined;
}
