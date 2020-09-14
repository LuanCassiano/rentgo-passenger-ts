interface IData<T> {
    result: T;
}

export interface IApiResponse<T> {
    data: IData<T>;
}
