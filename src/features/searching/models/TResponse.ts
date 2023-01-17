export interface TResponse<T> {
    input?: string;
    setInput(value: string): void;
    show?: boolean;
    setShow(value: boolean): void;
}
