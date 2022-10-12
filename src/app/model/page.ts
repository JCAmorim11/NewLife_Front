export interface Page<T>{
    content: T[];
    pageSize: number;
    totalElements: number;
}