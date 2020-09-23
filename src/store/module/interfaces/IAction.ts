import IDriver from 'src/interfaces/IDriver';

export default interface IAction<P = undefined> {
    type: string;
    payload?: P;
}
