export class Book {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly publishedDate: string,
        public readonly authors?: string[]
    ) {
    }
}
