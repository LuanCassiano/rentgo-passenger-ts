export default interface ICardTravel<T> {
    data: T;
    action(value: string | undefined): void;
}
