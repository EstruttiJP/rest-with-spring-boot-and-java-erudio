export interface Book {
    id?: number;
    author: string;
    launchDate: string;
    price: number;
    title: string;
    _links?: {
        self: {
            href: string;
        };
    };
}

export interface EmbeddedBooks {
    bookVOList: Book[];
}

export interface BookResponse {
    _embedded: EmbeddedBooks;
    _links: {
        first: { href: string };
        self: { href: string };
        next: { href: string };
        last: { href: string };
    };
    page: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    };
}